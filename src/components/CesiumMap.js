import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";
const satellite = require('satellite.js');

// Two fake TLE data for testing
const tle_list = [
  {
    name: 'VANGUARD 1',
    tleLine1: '1 25544U 98067A   19156.50900463  .00003075  00000-0  59442-4 0  9992',
    tleLine2: '2 25544  51.6433  59.2583 0008217  16.4489 347.6017 15.51174618173442'
  },
  {
    name: 'ISS (ZARYA)',
    tleLine1: '1 25544U 98067A   08264.51782528 -.00002182  00000-0 -11606-4 0  2927',
    tleLine2: '2 25544  51.6416 247.4627 0006703 130.5360 325.0288 15.72125391563537'
  }
];


const CesiumMap = () => {

  useEffect(() => {

    const viewer = new Cesium.Viewer('cesiumContainer');

    tle_list.forEach(item => {
      let sample_position = getSamplePosition(item.tleLine1, item.tleLine2);

      viewer.entities.add({
        point: {
          pixelSize: 8,
          color: Cesium.Color.RED
        },
        label: {
          text: item.name,
          font: '14px sans-serif',
          show: true,
        },
        orientation: new Cesium.VelocityOrientationProperty(sample_position),
        position: sample_position
      });
    });
    viewer.clock.shouldAnimate = true;
    viewer.clock.multiplier = 200;



    /*
    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-75.170726, 39.920866),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
      },
      label: {
        text: 'Hello, Class!',
        font: '14px sans-serif',
        show: true,
      },
    });


    viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-75.170726, 39.920866),
      point: {
        pixelSize: 10,
        color: Cesium.Color.RED,
      },
      label: {
        text: 'Hello, Class!',
        font: '14px sans-serif',
        show: true,
      },
    });
    
    */


    return () => {
      if (!viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  /**
   * This function returns the postion data of each satellite rendering on the Cesium map
   * @param {TLE line 1} tleLine1 
   * @param {TLE line 2} tleLine2 
   * @returns 
   */
  function getSamplePosition(tleLine1, tleLine2) {
    let startTime = Cesium.JulianDate.now(new Date());
    let stopTime = Cesium.JulianDate.addDays(startTime, 365, new Cesium.JulianDate());

    let SampledPosition = new Cesium.SampledPositionProperty(Cesium.ReferenceFrame.INERTIAL);
    let second = parseInt(Cesium.JulianDate.secondsDifference(stopTime, startTime) / 300) + 5;
    let start = new Date(startTime);
    let satrec = satellite.twoline2satrec(tleLine1, tleLine2);

    let time_step = 0;
    let current_time = null;

    for (let i = 0; i < second; i++) {

      current_time = new Date(start.getTime() + time_step)

      let positionAndVelocity = satellite.propagate(satrec, current_time)
      let positionEci = positionAndVelocity.position

      let position = Cesium.Cartesian3.fromElements(positionEci.x * 1000, positionEci.y * 1000, positionEci.z * 1000)

      if (position) {

        SampledPosition.addSample(Cesium.JulianDate.fromDate(current_time), position)
        time_step += 300 * 1000

      }

      let interpolationOptions = {
        interpolationDegree: 5,
        interpolationAlgorithm: Cesium.LagrangePolynomialApproximation
      }

      SampledPosition.setInterpolationOptions(interpolationOptions)

    }

    return SampledPosition;
  }

  return <div id="cesiumContainer" style={{ height: '100vh' }} />;
};

export default CesiumMap;
