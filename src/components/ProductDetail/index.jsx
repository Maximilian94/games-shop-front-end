import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.css';

import ScoreStarts from '../ScoreStarts';
import ButtonAddRemove from './ButtonAddRemove';

import { useCart } from '../../context/CartContext';
import PopUp from './PopUp';

function ProductDetail(props) {
  const { data } = props;
  const [numberOfProducts, setNumberOfProducts] = useState(1);
  const { updateCart } = useCart();
  const [popUp, setPopUp] = useState(false);

  if (!data) { return <div>Loading</div>; }

  const shippingPrice = (numberOfProducts * 10).toFixed(2);

  const timeToReceive = () => {
    const today = new Date();
    const receivedDay = new Date();
    receivedDay.setDate(today.getDate() + 5);

    const dd = String(receivedDay.getDate()).padStart(2, '0');
    const mm = String(receivedDay.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = receivedDay.getFullYear();

    return <p>{`Estimativa de entrega: ${`${dd}/${mm}/${yyyy}`}`}</p>;
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={`/images/Products/${data.image}`} alt="product" />
      </div>
      <div className="right">
        <p>{data.name}</p>
        <ScoreStarts score={data.score} />
        <p>{`R$ ${data.price.toFixed(2)}`}</p>
        <ButtonAddRemove number={numberOfProducts} updateNumber={setNumberOfProducts} />
        <p>{`Envio: R$ ${shippingPrice}`}</p>
        {timeToReceive()}
        <div>
          <Link to="/checkout">
            <button
              type="button"
              onClick={() => { updateCart(data.id, numberOfProducts); }}
            >
              Comprar agora
            </button>
          </Link>
          <button
            type="button"
            onClick={() => {
              updateCart(data.id, numberOfProducts);
              setPopUp(true);
            }}
          >
            Adicionar no carrinho

          </button>
          <PopUp isTrue={popUp} setPopUp={setPopUp} />
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  data: PropTypes.objectOf().isRequired,
};

export default ProductDetail;
