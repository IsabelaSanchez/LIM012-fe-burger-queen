import React from 'react';
import viewOrders from '../assets/checklist.svg';
import placeOrders from '../assets/listEdit.svg';
import BackgroundBack from './Background-back';
import '../css/app.css';

const PlaceOrders = () => (
  <div className="waiter-choice">
    <span className="strong-subtitle colorLetterBrown">REALIZAR PEDIDO</span>
    <img className="placeOrders" src={placeOrders} alt="" />
    <span className="subtitle colorLetterBrown">INGRESA NOMBRE</span>
    <input className="input-name" placeholder="Nombre del Cliente" type="text" />
    <a href="/orders-menu"><button type="button" className="button-brown buttonNone">CONTINUAR</button></a>
  </div>
);

const ViewOrders = () => (
  <div>
    <button type="button" className="waiter-choice buttonNone">
      <span className="strong-subtitle special-subtitle colorLetterBrown">VER PEDIDOS LISTOS</span>
      <img src={viewOrders} alt="" />
    </button>
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
