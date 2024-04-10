import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <div>
                <div id="page1" className="py-5">
                    <h1 className="">PLAY. WIN. REPEAT.</h1>
                    <h2 className="my-element">WELCOME TO <span>GAMER HIVE</span></h2>
                </div>
            </div>
            <div className='allgames'>
                <button onClick={() => handleNavigate('/rock-paper-scissors')}>Rock Paper Scissors</button>
                <button onClick={() => handleNavigate('/bubble-score')}>Bubble Score</button>
                <button onClick={() => handleNavigate('/tic-tac-toe')}>Tic Tac Toe</button>
                <button onClick={() => handleNavigate('/snake-game')}>Snake Game</button>
            </div>
        </>
    );
};

export default Home;