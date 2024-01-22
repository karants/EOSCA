import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import "cesium/Build/CesiumUnminified/Widgets/widgets.css";

const CesiumMap = () => {
  useEffect(() => {
    const viewer = new Cesium.Viewer('cesiumContainer');

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

    return () => {
      if (!viewer.isDestroyed()) {
        viewer.destroy();
      }
    };
  }, []);

  return <div id="cesiumContainer" style={{ height: '100vh' }} />;
};

export default CesiumMap;
