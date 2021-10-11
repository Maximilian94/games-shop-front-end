import React, { useState } from 'react';
import './style.css';

import loupe from '../../../images/loupe.png';

import { useProducts } from '../../../context/ProductContext';

function Search() {
  const [nameSearch, setNameSearch] = useState('');
  const { filterProductsBySearch } = useProducts();
  return (
    <div className="div-header-search">
      <input
        type="text"
        placeholder="Buscar"
        className="header-search"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            e.preventDefault();
            filterProductsBySearch(nameSearch);
          }
        }}
        data-cy='search-product-input'
      />
      <button type="button" onClick={() => filterProductsBySearch(nameSearch)} data-cy='search-product'>
        <img src={loupe} alt="search-loupe" />
      </button>
    </div>
  );
}

export default Search;
