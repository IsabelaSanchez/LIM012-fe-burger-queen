import React from 'react';
import PropTypes from 'prop-types';
import '../css/app.css';
import Icons from './Icons';

const ButtonSelectFood = ({ price, name, id }, index) => (
  <div key={id} className="buttonSelectFood">
    <button type="button" className="buttonNone buttonByProduct">
      <img src={Icons[index].img} alt={name} />
      <span>
        S/
        {price}
      </span>
      <span className="upperText">{name}</span>
    </button>
  </div>
);

export const BreackfastView = ({ breakfastData }) => {
  const arrView = breakfastData.map(ButtonSelectFood);
  return (
    <div>
      {arrView}
    </div>
  );
};

export const MenuView = ({ menuData }) => {
  const arrView = menuData.map(ButtonSelectFood);
  return (
    <div>
      {arrView}
    </div>
  );
};

export const DrinksView = ({ drinksData }) => {
  const arrView = drinksData.map(ButtonSelectFood);
  return (
    <div>
      {arrView}
    </div>
  );
};

ButtonSelectFood.propTypes = {
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

BreackfastView.propTypes = {
  breakfastData: PropTypes.arrayOf.isRequired,
};

MenuView.propTypes = {
  menuData: PropTypes.arrayOf.isRequired,
};

DrinksView.propTypes = {
  drinksData: PropTypes.arrayOf.isRequired,
};
