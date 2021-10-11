import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';

function ButtonTrash(props) {
  const {
    staticImage, animatedImage, name, onClick,
  } = props;
  const [image, setImage] = useState(staticImage);

  return (
    <button
      type="button"
      className="animated-button"
      onMouseEnter={() => { setImage(animatedImage); }}
      onMouseLeave={() => { setImage(staticImage); }}
      onClick={onClick ? (() => onClick()) : null}
    >
      <img src={image} alt={name} />
    </button>
  );
}

ButtonTrash.propTypes = {
  staticImage: PropTypes.string.isRequired,
  animatedImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ButtonTrash;
