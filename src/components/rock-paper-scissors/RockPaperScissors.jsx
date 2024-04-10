import React, { useState } from 'react';
import rock from '../../assets/images/rock.png';
import paper from '../../assets/images/paper.png';
import scissors from '../../assets/images/scissors.png';
import './RockPaperScissor.css'; // Import your CSS file

const RockPaperScissors = () => {
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [message, setMessage] = useState('Play your move');
  const [messageColor, setMessageColor] = useState('#081b31');

  const choices = ['rock', 'paper', 'scissors'];

  const genCompChoice = () => {
    const randIdx = Math.floor(Math.random() * 3);
    return choices[randIdx];
  };

  const drawGame = () => {
    setMessage('Game was Draw. Play again.');
    setMessageColor('#081b31');
  };

  const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      setUserScore(userScore + 1);
      setMessage(`You win! Your ${userChoice} beats ${compChoice}`);
      setMessageColor('green');
    } else {
      setCompScore(compScore + 1);
      setMessage(`You lost. ${compChoice} beats your ${userChoice}`);
      setMessageColor('red');
    }
  };

  const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if (userChoice === compChoice) {
      drawGame();
    } else {
      let userWin = true;
      if (userChoice === 'rock') {
        userWin = compChoice === 'paper' ? false : true;
      } else if (userChoice === 'paper') {
        userWin = compChoice === 'scissors' ? false : true;
      } else {
        userWin = compChoice === 'rock' ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };

  return (
    <div className='rpsgame'>
      <h1 className='rps'>Rock Paper Scissors</h1>
      <div className="choices">
        <div className="choice" onClick={() => playGame('rock')}>
          <img src={rock} alt="rock" />
        </div>
        <div className="choice" onClick={() => playGame('paper')}>
          <img src={paper} alt="paper" />
        </div>
        <div className="choice" onClick={() => playGame('scissors')}>
          <img src={scissors} alt="scissors" />
        </div>
      </div>
      <div className="score-board">
        <div className="score">
          <p>{userScore}</p>
          <p>You</p>
        </div>
        <div className="score">
          <p>{compScore}</p>
          <p>Comp</p>
        </div>
      </div>
      <div className="msg-container" style={{ backgroundColor: messageColor }}>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default RockPaperScissors;