import React from 'react';
import FilterOrderList from '../../components/FilterOrderList';
import FilterRequest from '../../components/FilterRequest';

import Header from '../../components/Header';
import Products from '../../components/Products';

import './style.css';

function Home() {
  return (
    <div>
      <Header />
      <main className="main-home">
        <FilterRequest />
        <FilterOrderList />
        <Products />
      </main>
    </div>
  );
}

export default Home;
