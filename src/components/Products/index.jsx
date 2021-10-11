import React from 'react';

// import jsonProducts from './products.json';

import ProductCard from './ProductCard';

import './style.css';

import { useProducts } from '../../context/ProductContext';

function Products() {
  const { products } = useProducts();

  // useEffect(() => {
  //   setProducts(jsonProducts);
  // }, []);
  return (
    <div className="products-list">
      {products.map((product) => <ProductCard productData={product} key={product.id} />)}
    </div>
  );
}

export default Products;
