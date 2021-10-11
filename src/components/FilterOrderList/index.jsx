import React from 'react';

import './style.css';

import sortNotSelected from '../../images/iconmonstr-sort-2.svg';
import sortUp from '../../images/iconmonstr-sort-3.svg';
import sortDown from '../../images/iconmonstr-sort-4.svg';

import { useProducts } from '../../context/ProductContext';

function FilterOrderList() {
  const {
    orderProductsByName, orderProductsByScore, orderProductsByPrice, currentOrderType,
  } = useProducts();

  const getSortIcon = (type) => {
    if (currentOrderType.name === type) {
      return currentOrderType.isReverse ? sortDown : sortUp;
    }
    return sortNotSelected;
  };

  const isOrderActive = (type) => {
    if (currentOrderType.name === type) {
      return 'active';
    }
    return null;
  };

  return (
    <div className="filter-order-products">
      <p>Ordernar por:</p>
      <button
        type="button"
        onClick={() => orderProductsByPrice()}
        className={isOrderActive('price')}
      >
        Preço
        <img src={getSortIcon('price')} alt="sort" />
      </button>
      <button
        type="button"
        onClick={() => orderProductsByScore()}
        className={isOrderActive('score')}
      >
        <p>Avaliações</p>
        <img src={getSortIcon('score')} alt="sort" />
      </button>
      <button
        type="button"
        onClick={() => orderProductsByName()}
        className={isOrderActive('name')}
      >
        <p>Alfabética</p>
        <img src={getSortIcon('name')} alt="sort" />
      </button>
    </div>
  );
}

export default FilterOrderList;
