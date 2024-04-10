import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className='manav'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary manav">
                <div className="container-fluid">
                    <Link  className="navbar-brand tc" to="/">
                        Gamer Hive
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active tc" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tc" to="/bubble-score">
                                    Bubble Score
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tc" to="/rock-paper-scissors">
                                    Rock-Paper-Scissors
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tc" to="/tic-tac-toe">
                                    Tic-Tac-Toe
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link tc" to="/snake-game">
                                    Snake Game
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header