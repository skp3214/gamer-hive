import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import BubbleGame from './components/bubble-game/BubbleGame'
import Header from './components/header/Header'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RockPaperScissors from './components/rock-paper-scissors/RockPaperScissors';
import TicTackToe from './components/tic-tac-toe/TickTackToe';
import SnakeGame from './components/snake-game/SnakeGame';
import Home from './components/Home';

function App() {

  return (
    <>
      <Router>
        <Header/>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bubble-score" element={<BubbleGame />} />
            <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
            <Route path="/tic-tac-toe" element={<TicTackToe />} />
            <Route path="/snake-game" element={<SnakeGame />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
