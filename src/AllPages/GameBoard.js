import React, { useState } from 'react';
import '../styles/GameOver.css';
import Board from '../components/Board';
import ScoreBoard from '../components/ScoreBoard';
import ResetButton from '../components/ResetButton';

const GameBoard = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i += 1) {
      const [x, y, z] = WIN_CONDITIONS[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
    return null;
  };

  const handleBoxClick = (boxIdx) => {
    if (gameOver || board[boxIdx]) return;

    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? 'X' : 'O';
      }
      return value;
    });

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    setBoard(updatedBoard);
    setXPlaying(!xPlaying);
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      {gameOver && (
        <div className="gameOver">
          Game Over -
          {xPlaying ? <span className="span-o">O</span> : <span className="span-x">X</span>}
          wins!
        </div>
      )}
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
};

export default GameBoard;
