import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name }) => (
  <section>
    <p>{name}</p>
  </section>
);

Character.propTypes = {
  name: PropTypes.string,
};

export default Character;
