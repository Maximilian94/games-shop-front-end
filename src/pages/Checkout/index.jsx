import React from 'react';

import Header from '../../components/Header';
import CheckoutList from '../../components/CheckoutList';
import PurchaseSummary from '../../components/PurchaseSummary';

import './style.css';

function Checkout() {
  return (
    <div>
      <Header />
      <main className="main-checkout">
        <CheckoutList />
        <PurchaseSummary />
      </main>
    </div>
  );
}

export default Checkout;
