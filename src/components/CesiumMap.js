import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

const cesium_access_token = process.env.REACT_APP_CESIUM_ACCESS_TOKEN;
let viewer;

const CesiumMap = (props) => {

  useEffect(() => {
    updateCesiumMap();
  }, [props.CZML]);

  const updateCesiumMap = () => {
    if (viewer) {
      viewer.destroy();
    }

    Cesium.Ion.defaultAccessToken = cesium_access_token;
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
