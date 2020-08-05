import React from 'react';
import back from '../assets/arrowBack.svg';
import logo from '../assets/title-burger-queen.svg';

const BackgroundBack = () => (
  <div>
    <header className="headerMain flexRow">
      <div className="start">
        <a href="/home"><img src={back} alt="Volver" /></a>
      </div>
      <div className="center">
        <img src={logo} alt="logo" />
      </div>
    </header>
    <main className="flexRow" />
  </div>
);

export default BackgroundBack;
