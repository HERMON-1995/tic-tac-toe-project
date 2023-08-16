import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Box.css';

const Box = ({ value, onClick }) => {
  const style = value === 'X' ? 'box x' : 'box o';

  return (
    <div>
      <button className={style} onClick={onClick} type="button">{value}</button>
    </div>
  );
};

Box.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Box;
