import React from 'react';
import './style.css';

import ProductRecommended from './ProductRecommended';

import { useProducts } from '../../context/ProductContext';

function ProductsRecommendation() {
  const { recommendedProducts } = useProducts();

  return (
    <div className="recommendations">
      <p>Jogos em alta</p>
      {recommendedProducts()
        .map((product) => <ProductRecommended product={product} key={product.id} />)}
    </div>
  );
}

export default ProductsRecommendation;
