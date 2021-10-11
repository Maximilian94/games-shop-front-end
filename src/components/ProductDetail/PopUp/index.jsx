// https://www.youtube.com/watch?v=i8fAO_zyFAM

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

import PopUpRecommendations from './PopUpRecommendations';

function PopUp(props) {
  const { isTrue, setPopUp } = props;
  if (!isTrue) { return null; }
  return (
    <div className="pop-up">
      <div className="pop-up-inner">
        <div className="main-message">
          Um novo item foi adicionado ao seu carrinho de compras.
        </div>
        <div className="buttons">
          <Link to="/checkout">
            <button type="button">Ver carrinho de compras</button>
          </Link>
          <Link to="/">
            <button className="white" type="button">Continuar comprando</button>
          </Link>
        </div>
        <PopUpRecommendations setPopUp={setPopUp} />
      </div>
    </div>
  );
}

PopUp.propTypes = {
  isTrue: PropTypes.bool.isRequired,
  setPopUp: PropTypes.func.isRequired,
};

export default PopUp;
