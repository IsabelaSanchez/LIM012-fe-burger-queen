import React from 'react';
import PropTypes from 'prop-types';
import { updateStatus } from '../controllers/firestore.controller';

const EnteredOrder = ({ enteredOrder }) => {
  console.log(enteredOrder);
  const handleClick = (id) => {
    const idList = enteredOrder.find((obj) => obj.id === id);
    const newStatus = 'list';
    updateStatus(id, newStatus);
  };
  EnteredOrder.propTypes = {
    enteredOrder: PropTypes.arrayOf.isRequired,
  };

  return (
    <div>
      {enteredOrder.map((obj) => (
        <div key={obj.id} className="entered-order-container">
          <div className="entered-order-info">
            <p>{obj.name}</p>
            <p>{obj.hour}</p>
            {obj.items.map((objItem, index) => (
              <ul key={index}>
                <li>
                  <span>{objItem.amount}</span>
                  <span>{objItem.name}</span>
                </li>
              </ul>
            ))}
            <button type="button" onClick={() => handleClick(obj.id)}>listo!</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EnteredOrder;
