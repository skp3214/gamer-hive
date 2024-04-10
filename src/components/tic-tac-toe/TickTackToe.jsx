import React, { useState } from 'react';
import './TickTackToe.css';

const TicTackToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [turnO, setTurnO] = useState(true);
  const [winner, setWinner] = useState('');
  const [draw, setDraw] = useState(false);

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turnO ? 'O' : 'X';
    setBoard(newBoard);
    setTurnO(!turnO);

    checkWinner(newBoard);
  };

  const checkWinner = (newBoard) => {
    for (let pattern of winPatterns) {
      const [pos1, pos2, pos3] = pattern;
      if (
        newBoard[pos1] &&
        newBoard[pos1] === newBoard[pos2] &&
        newBoard[pos2] === newBoard[pos3]
      ) {
        setWinner(newBoard[pos2]);
        return;
      }
    }

    const isBoardFull = newBoard.every((value) => value !== '');
    if (isBoardFull) {
      setDraw(true);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setTurnO(true);
    setWinner('');
    setDraw(false);
  };

  return (
    <div>
      <h1 className='tictactoe'>Tic Tac Toe</h1>
      <div className="container">
        <div className="game">
          {board.map((value, index) => (
            <button
              key={index}
              className="box"
              onClick={() => handleClick(index)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      {winner && <p className='result'>Congratulations, Winner is {winner}</p>}
      {draw && <p className='result'>Game was a Draw</p>}
      <button className='reset' onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTackToe;