import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import './css/app.css';
import PlaceAndViewOrders from './Components/Waiter-choice';
import DoOrders from './Components/Do-orders';

const App = () => (
  <Router>
    <div className="">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/orders">
          <PlaceAndViewOrders />
        </Route>
        <Route path="/orders-menu">
          <DoOrders />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
