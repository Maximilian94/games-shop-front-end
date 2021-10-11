import React, { useState } from 'react';

import { useProducts } from '../../context/ProductContext';

import './style.css';

function FilterRequest() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { filterProductsByPrice } = useProducts();
  const priceRange = () => (
    <div className="price-range">
      <p>Preço:</p>
      <input
        type="text"
        placeholder="min"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        onFocus={() => setMinPrice('')}
        onBlur={() => setMinPrice(minPrice || 0)}
        data-cy='min-price-range'
      />
      <p>-</p>
      <input
        type="text"
        placeholder="max"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        onFocus={() => setMaxPrice('')}
        onBlur={() => setMaxPrice(maxPrice || 0)}
        data-cy='max-price-range'
      />
      <button
        type="button"
        onClick={() => filterProductsByPrice({ min: minPrice, max: maxPrice })}
        data-cy='filter-price-range'
      >
        Filtrar
      </button>
    </div>
  );
  return (
    <div>
      {priceRange()}
    </div>
  );
}

export default FilterRequest;
