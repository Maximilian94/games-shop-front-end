import React from 'react';
import './style.css';

import { useCart } from '../../context/CartContext';

function PurchaseSummary() {
  const { subTotalPrice, shippingPrice, totalPrice } = useCart();

  return (
    <div className="purchase-summary">
      <h2>Resumo do pedido</h2>
      <div className="line">
        <p>Subtotal</p>
        <p>{`R$ ${subTotalPrice}`}</p>
      </div>
      <div className="line">
        <p>Envio</p>
        <p data-cy="checkout-shipping-price">{`R$ ${shippingPrice}`}</p>
      </div>
      <div className="line">
        <p>Total</p>
        <p>{`R$ ${totalPrice}`}</p>
      </div>
      <button type="button">
        Comprar
      </button>
    </div>
  );
}

export default PurchaseSummary;
