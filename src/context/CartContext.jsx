import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

import { useProducts } from './ProductContext';

// const cartTest = [
//   {
//     id: 312,
//     name: 'Super Mario Odyssey',
//     price: 197.88,
//     score: 100,
//     image: 'super-mario-odyssey.png',
//   },
// ];

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { products } = useProducts();
  const oneShippingPrice = 10;

  const updateCart = (id, quantity) => {
    if (!quantity) { return {}; }
    const newCart = [...cart];
    const productFound = newCart.find((product) => product.id === id);
    if (!productFound) { newCart.push({ id, quantity }); }
    if (productFound) { productFound.quantity = quantity; }
    return setCart(newCart);
  };

  const removeProduct = (id) => {
    let newCart = [...cart];
    newCart = newCart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const getSubTotalPrice = () => {
    const subTotalPrice = cart.reduce((acc, cartItem) => {
      const productData = products.find((product) => product.id === cartItem.id);
      return acc + (productData.price * cartItem.quantity);
    }, 0);
    return subTotalPrice.toFixed(2);
  };

  const getShippingPrice = () => {
    const shippingPrice = cart.reduce((acc, cartItem) => (
      acc + (oneShippingPrice * cartItem.quantity)), 0);
    if (getSubTotalPrice() > 250) { return 0; }
    return shippingPrice;
  };

  const subTotalPrice = getSubTotalPrice();
  const shippingPrice = getShippingPrice().toFixed(2);
  const totalPrice = (parseFloat(subTotalPrice) + parseFloat(shippingPrice)).toFixed(2);

  const context = {
    cart,
    subTotalPrice,
    shippingPrice,
    totalPrice,
    oneShippingPrice,
    setCart,
    updateCart,
    removeProduct,
  };

  return (
    <CartContext.Provider value={context}>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}

CartProvider.propTypes = {
  children: node,
}.isRequired;
