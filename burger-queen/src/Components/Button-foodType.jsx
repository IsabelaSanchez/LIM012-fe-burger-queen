import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../assets/white-icons/menu-white.svg';
import Drinks from '../assets/white-icons/drinks-white.svg';
import Breakfast from '../assets/white-icons/breakfast-white.svg';
// import menuBrown from '../assets/brown-icons/menu-brown.svg';
// import breakfastBrown from '../assets/brown-icons/breakfast-brown.svg';
// import drinksBrown from '../assets/brown-icons/drinks-brown.svg';

const ButtonFoodType = ({ food, icon }) => (
  <div className="flexColumn containerFood">
    <span className="typeFood">{ food }</span>
    <img src={icon} alt={food} />
  </div>
);

export const ButtonBreakfast = ({ filterSelectType }) => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood" onClick={() => filterSelectType('0')}>
      <ButtonFoodType food="Desayuno" icon={Breakfast} />
    </button>
  </div>
);

export const ButtonMenu = ({ filterSelectType }) => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood" onClick={() => filterSelectType('1')}>
      <ButtonFoodType food="Menu" icon={Menu} />
    </button>
  </div>
);

export const ButtonDrinks = ({ filterSelectType }) => (
  <div className="flexColumn">
    <button type="button" className="containerOptionFood" onClick={() => filterSelectType('2')}>
      <ButtonFoodType food="Bebidas" icon={Drinks} />
    </button>
  </div>
);
ButtonBreakfast.propTypes = {
  filterSelectType: PropTypes.func.isRequired,
};

ButtonMenu.propTypes = {
  filterSelectType: PropTypes.func.isRequired,
};

ButtonDrinks.propTypes = {
  filterSelectType: PropTypes.func.isRequired,
};
