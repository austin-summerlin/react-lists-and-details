import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ image, name }) => (
  <>
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </>
);


CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterDetail;

