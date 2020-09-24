import React, { useState, useEffect } from 'react';
import { getOrders } from '../controllers/firestore.controller';
import Background from '../Components/Background';
import EnteredOrder from '../Components/OrderKitchen';

const Kitchen = () => {
  const [enteredOrder, setEnteredOrder] = useState([]);

  useEffect(() => {
    getOrders().then((arr) => setEnteredOrder(arr));
  }, []);

  return (
    <div>
      <Background />
      <div className="title-orders-kitchen">
        <p>PEDIDOS INGRESADOS</p>
      </div>
      <EnteredOrder enteredOrder={enteredOrder} setEnteredOrder={setEnteredOrder} />
    </div>
  );
};

export default Kitchen;
