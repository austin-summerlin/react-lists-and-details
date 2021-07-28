import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ image, name }) => (
  <figure aria-label="individual" role="individual">
    <img src={image} alt={name} />
    <h3>{name}</h3>
  </figure>
);


CharacterDetail.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CharacterDetail;

