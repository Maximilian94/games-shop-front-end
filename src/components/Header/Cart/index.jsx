import React from 'react';
import { Link } from 'react-router-dom';

import cart from '../../../images/shopping-cart.png';

import './style.css';

function Cart() {
  return (
    <div className="header-cart-div">
      <Link to="/checkout">
        <button type="button">
          <p hidden>Cart</p>
          <img src={cart} alt="cart" />
        </button>
      </Link>
    </div>
  );
}

export default Cart;
