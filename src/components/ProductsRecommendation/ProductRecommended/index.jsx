import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './style.css';

function ProductRecommended(props) {
  const { product: { image, price, id } } = props;
  return (
    <Link to={`/product/${id}`} className="product-recommended">
      <img src={`/images/Products/${image}`} alt="product" />
      <p>{`R$ ${price}`}</p>
    </Link>
  );
}

ProductRecommended.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default ProductRecommended;
