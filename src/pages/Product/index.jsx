import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';
import ProductDetail from '../../components/ProductDetail';
import ProductsRecommendation from '../../components/ProductsRecommendation';

import './style.css';

import { useProducts } from '../../context/ProductContext';

function Product(props) {
  const { match: { params: { id } } } = props;
  const { getProductById } = useProducts();
  const product = getProductById(id);
  return (
    <div>
      <Header />
      <main className="main-product">
        <ProductDetail data={product} />
        <ProductsRecommendation />
      </main>
    </div>
  );
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Product;
