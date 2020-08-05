import React from 'react';
import Background from './Background';
import '../css/app.css';

const DoOrders = () => (
  <div>
    <Background />
    <div className="flexRow">
      <div>
        <div className="containerOptionFood" />
        <div className="containerOptionFood" />
        <div className="containerOptionFood" />
        <div className="containerAllFood flexRow" />
      </div>
      <div className="containerFolder flexRow">
        <div className="folder" />
        <div className="folderTwo" />
      </div>
    </div>
  </div>
);
export default DoOrders;
