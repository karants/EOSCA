import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

let viewer;

const CesiumMap = (props) => {

  useEffect(() => {
    updateCesiumMap();
  }, [props.CZML]);

  const updateCesiumMap = () => {
    if (viewer) {
      viewer.destroy();
    }

    Cesium.CzmlDataSource.load(props.CZML).then(function (data_source) {
      viewer = new Cesium.Viewer('cesiumContainer');
      viewer.dataSources.add(data_source);
      viewer.clock.shouldAnimate = true;
      viewer.clock.multiplier = 200;
    });
  }

  return <div id="cesiumContainer" style={{ height: '100vh' }} />;
};

export default CesiumMap;
