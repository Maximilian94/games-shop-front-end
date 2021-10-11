import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function ButtonAddRemove(props) {
  const { number, updateNumber } = props;

  const add = () => number + 1;
  const remove = () => {
    if (number !== 1) { return number - 1; }
    return 1;
  };

  return (
    <div className="product-quantity">
      <p>Quantidade</p>
      <div className="div-add-remove-product">
        <button type="button" onClick={() => updateNumber(remove())}>-</button>
        <p>{number}</p>
        <button type="button" onClick={() => updateNumber(add())}>+</button>
      </div>
    </div>
  );
}

ButtonAddRemove.propTypes = {
  number: PropTypes.number.isRequired,
  updateNumber: PropTypes.number.isRequired,
};

export default ButtonAddRemove;
