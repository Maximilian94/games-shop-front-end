import React from 'react';
import PropTypes from 'prop-types';

import { useCart } from '../../../../context/CartContext';

import './style.css';

function ButtonAddRemove(props) {
  const { quantity, id } = props;
  const { updateCart } = useCart();
  return (
    <div className="div-add-remove-product">
      <button type="button" onClick={() => updateCart(id, quantity - 1)}>-</button>
      <p data-cy="checkout-product-quantity">{quantity}</p>
      <button type="button" onClick={() => updateCart(id, quantity + 1)}>+</button>
    </div>
  );
}

ButtonAddRemove.propTypes = {
  quantity: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default ButtonAddRemove;
