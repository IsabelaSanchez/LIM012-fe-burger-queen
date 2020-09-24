import React from 'react';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import BackgroundBack from './Background-back';

const PlaceOrders = () => (
  <div className="">
    <a href="/orders-menu">
      <button type="button" className="waiter-choice buttonNone">
        <span className="strong-subtitle colorLetterBrown">REALIZAR PEDIDO</span>
        <img className="placeOrders" src={placeOrders} alt="" />
      </button>
    </a>
  </div>
);

const ViewOrders = () => (
  <div>
    <a href="/">
      <button type="button" className="waiter-choice buttonNone">
        <span className="strong-subtitle special-subtitle colorLetterBrown">VER PEDIDOS LISTOS</span>
        <img src={viewOrders} alt="" />
      </button>

    </a>
  </div>
);

const PlaceAndViewOrders = () => (
  <div>
    <BackgroundBack />
    <main className="main-PlaceAndOrders flexRow">
      <PlaceOrders />
      <ViewOrders />
    </main>
  </div>
);

export default PlaceAndViewOrders;
