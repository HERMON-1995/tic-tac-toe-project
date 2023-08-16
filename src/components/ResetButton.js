import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ResetButton.css';

const ResetButton = ({ resetBoard }) => (
  <button className="resetButton" onClick={resetBoard} type="button">Reset</button>
);

ResetButton.propTypes = {
  resetBoard: PropTypes.func.isRequired,
};

export default ResetButton;
