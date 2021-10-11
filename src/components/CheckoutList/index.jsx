import React from 'react';

import './style.css';

import CheckoutProduct from './CheckoutProduct';

import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductContext';

function CheckoutList() {
  const { cart } = useCart();
  const { getProductById } = useProducts();

  return (
    <div>
      {cart.map(({ id, quantity }) => (
        <CheckoutProduct product={getProductById(id)} quantity={quantity} key={id} />))}
    </div>
  );
}

export default CheckoutList;
