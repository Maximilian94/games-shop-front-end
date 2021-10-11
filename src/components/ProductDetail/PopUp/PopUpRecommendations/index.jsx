import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useProducts } from '../../../../context/ProductContext';
import './style.css';

function PopUpRecommendations(props) {
  const { recommendedProducts } = useProducts();
  const { setPopUp } = props;

  const card = ({
    image, name, price, id,
  }) => (
    <Link className="popup-recommendations-card" to={`/product/${id}`} onClick={() => setPopUp(false)}>
      <img alt="product" src={`/images/Products/${image}`} />
      <p>{name}</p>
      <p>{`R$ ${price}`}</p>
    </Link>
  );

  return (
    <div className="popup-recommendations">
      {recommendedProducts().map((product) => card(product))}
    </div>
  );
}

PopUpRecommendations.propTypes = {
  setPopUp: PropTypes.func.isRequired,
};

export default PopUpRecommendations;
