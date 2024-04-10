import React, { useState, useEffect } from 'react';

import './BubbleGame.css'
const BubbleGame = () => {
    const [timer, setTimer] = useState(60);
    const [score, setScore] = useState(0);
    const [newHit, setNewHit] = useState(Math.floor(Math.random() * 10));
    const [bubbleArray, setBubbleArray] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);
    const gameRunning = () => {
        if (gameStarted) {
            const interval = setInterval(() => {
                if (timer > 0) {
                    setTimer((prevTimer) => prevTimer - 1);
                } else {
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }
    useEffect(() => {
        if (gameStarted) {
            const interval = setInterval(() => {
                if (timer > 0) {
                    setTimer((prevTimer) => prevTimer - 1);
                } else {
                    clearInterval(interval);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [gameStarted, timer]);

    useEffect(() => {
        generateBubbleArray();
    }, [newHit]);

    const generateBubbleArray = () => {
        const newArray = Array.from({ length: 120 }, () => Math.floor(Math.random() * 10));
        setBubbleArray(newArray);
    };

    const handleBubbleClick = (clickedNum) => {
        if (gameStarted) {
            if (clickedNum === newHit) {
                setScore((prevScore) => prevScore + 10);
                setNewHit(Math.floor(Math.random() * 10));
                generateBubbleArray();
            }
            else {
                setScore((prevScore) => prevScore - 10);
                setNewHit(Math.floor(Math.random() * 10));
                generateBubbleArray();
            }
        }
    };

    const handleStartGame = () => {
        if (timer == 0) {
            setGameStarted((prev) => !prev);
            setTimer(60);
            setScore(0);
            setNewHit(Math.floor(Math.random() * 10));
            generateBubbleArray();
            gameRunning();
        }
        setGameStarted((prev) => !prev);
    };

    return (
        <div id="main">
            <h1 className='game_name'>BUBBLE SCORE</h1>
            <div id="panel">
                <div id="ptop">
                    <div className="elem">
                        <h4>Hit</h4>
                        <div id="hit" className="boxg">
                            {newHit}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>Timer</h4>
                        <div id="Timer" className="boxg">
                            {timer}
                        </div>
                    </div>
                    <div className="elem">
                        <h4>Score</h4>
                        <div id="Score" className="boxg">
                            {score}
                        </div>
                    </div>
                    <div className='elem'>
                        {
                            gameStarted && timer !== 0 ? (<button id='sg' onClick={handleStartGame}>Pause Game</button>) : (<button id='sg' onClick={handleStartGame}>Start Game</button>)
                        }
                    </div>

                </div>

                <div id="pbottom">
                    {timer > 0 ? (
                        bubbleArray.map((num, index) => (
                            <div key={index} className="bubble" onClick={() => handleBubbleClick(num)}>
                                {num}
                            </div>
                        ))
                    ) : (
                        <div className='gameOver'>
                            <h1>Game Over</h1>
                            <h2 style={{ marginTop: 50 }}>Your Score is : {score}</h2>
                        </div>

                    )}
                </div>
            </div>
        </div>
    );
};

export default BubbleGame;
