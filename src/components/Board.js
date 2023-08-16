import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';
import '../styles/Board.css';

const Board = ({ board, onClick }) => (
  <div className="board">
    {board.map((value, idx) => (
      <Box
        key={Date.now}
        value={value}
        onClick={() => value === null && onClick(idx)}
      />
    ))}
  </div>
);

Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.oneOf([null, 'X', 'O'])).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
