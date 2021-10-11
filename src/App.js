import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, Checkout, Product } from './pages';

import { ProductsProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Router>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/product/:id" component={Product} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
