import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import PlaceAndViewOrders from './Components/Waiter-choice';
import DoOrders from './Components/Do-orders';
import Kitchen from './views/Kitchen';

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
        <Route path="/kitchen">
          <Kitchen />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
