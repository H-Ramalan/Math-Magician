import React from 'react';
import PropTypes from 'prop-types';

const Elements = ({ number }) => {
  if (
    number === '\u00F7'
    || number === 'x'
    || number === '-'
    || number === '+'
    || number === '='
  ) {
    return <div className="input-btn signs">{number}</div>;
  }
  if (number === '0') {
    return <div className="input-btn zero">{number}</div>;
  }
  if (number === 'AC' || number === '+/-' || number === '%') {
    return <div className="input-btn top">{number}</div>;
  }
  return <div className="input-btn">{number}</div>;
};

Elements.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Elements;
