import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image, _id }) => (
  <Link to={`${_id}`}>
    <img src={image} alt={name} />
    <p>{name}</p>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  _id: PropTypes.string,
};

export default Character;
