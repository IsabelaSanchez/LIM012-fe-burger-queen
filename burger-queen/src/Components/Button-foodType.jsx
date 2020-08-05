import React from 'react';
import '../css/app.css';

const ButtonFoodType = ({ food, icon }) => (
  <div>
    <span>{ food }</span>
    <img src={icon} alt={food} />
  </div>
);

const ButtonBreakfast = () => (
  <div>
    <button type="button">
      <ButtonFoodType food="Desayuno" icon="../assets/breakfast-brown.svg" />
    </button>
  </div>
);

const ButtonMenu = () => (
  <div>
    <button type="button">
      <ButtonFoodType food="Menu" icon="../assets/menu-white.svg" />
    </button>
  </div>
);

const ButtonDrinks = () => (
  <div>
    <button type="button">
      <ButtonFoodType food="Bebidas" icon="../assets/drinks-white.svg" />
    </button>
  </div>
);

export ;
