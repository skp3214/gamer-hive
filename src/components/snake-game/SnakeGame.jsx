import { useEffect, useState } from 'react';
import './SnakeGame.css';

const SnakeGame = () => {
    const [gameOver, setGameOver] = useState(false);
    const [foodX, setFoodX] = useState(5);
    const [foodY, setFoodY] = useState(5);
    const [snakeX, setSnakeX] = useState(5);
    const [snakeY, setSnakeY] = useState(5);
    const [velocityX, setVelocityX] = useState(0);
    const [velocityY, setVelocityY] = useState(0);
    const [snakeBody, setSnakeBody] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(
        localStorage.getItem('high-score') || 0
    );

    const updateFoodPosition = () => {
        setFoodX(Math.floor(Math.random() * 30) + 1);
        setFoodY(Math.floor(Math.random() * 30) + 1);
    };

    const handleGameOver = () => {
        alert('Game Over! Press OK to replay...');
        setGameOver(false);
        setScore(0);
        setSnakeX(5);
        setSnakeY(5);
        setVelocityX(0);
        setVelocityY(0);
        setSnakeBody([]);
        updateFoodPosition();
    };

    const changeDirection = (e) => {
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp':
                if (velocityY !== 1 || (velocityX === 0 && velocityY === 0)) {
                    setVelocityX(0);
                    setVelocityY(-1);
                }
                break;
            case 'ArrowDown':
                if (velocityY !== -1 || (velocityX === 0 && velocityY === 0)) {
                    setVelocityX(0);
                    setVelocityY(1);
                }
                break;
            case 'ArrowLeft':
                if (velocityX !== 1 || (velocityX === 0 && velocityY === 0)) {
                    setVelocityX(-1);
                    setVelocityY(0);
                }
                break;
            case 'ArrowRight':
                if (velocityX !== -1 || (velocityX === 0 && velocityY === 0)) {
                    setVelocityX(1);
                    setVelocityY(0);
                }
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        const handleGameLoop = () => {
            if (gameOver) return handleGameOver();

            if (snakeX === foodX && snakeY === foodY) {
                updateFoodPosition();
                setSnakeBody([...snakeBody, [foodY, foodX]]);
                setScore(score + 1);
                setHighScore(Math.max(score + 1, highScore));
                localStorage.setItem('high-score', Math.max(score + 1, highScore));
            }

            setSnakeX(snakeX + velocityX);
            setSnakeY(snakeY + velocityY);

            const newSnakeBody = [...snakeBody];
            for (let i = newSnakeBody.length - 1; i > 0; i--) {
                newSnakeBody[i] = newSnakeBody[i - 1];
            }
            newSnakeBody[0] = [snakeX + velocityX, snakeY + velocityY];
            setSnakeBody(newSnakeBody);

            if (
                snakeX + velocityX <= 0 ||
                snakeX + velocityX > 30 ||
                snakeY + velocityY <= 0 ||
                snakeY + velocityY > 30
            ) {
                setGameOver(true);
            }

            for (let i = 0; i < newSnakeBody.length; i++) {
                if (
                    i !== 0 &&
                    newSnakeBody[0][1] === newSnakeBody[i][1] &&
                    newSnakeBody[0][0] === newSnakeBody[i][0]
                ) {
                    setGameOver(true);
                }
            }
        };

        const interval = setInterval(handleGameLoop, 100);
        return () => clearInterval(interval);
    }, [gameOver, snakeX, snakeY, velocityX, velocityY, foodX, foodY, score, highScore, handleGameOver, snakeBody]);

    useEffect(() => {
        updateFoodPosition();
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', changeDirection);
        return () => window.removeEventListener('keydown', changeDirection);
    }, [changeDirection]);

    return (
        <>
            <div className='snakegame'>
                <div className="wrapper">
                    <div className="game-details">
                        <span className="score">Score: {score}</span>
                        <span className="high-score">High Score: {highScore}</span>
                    </div>
                    <div className="play-board">
                        <div
                            className="food"
                            style={{ gridArea: `${foodY} / ${foodX}` }}
                        ></div>
                        {snakeBody.map((segment, index) => (
                            <div
                                key={index}
                                className={index === 0 ? 'head' : 'body'}
                                style={{ gridArea: `${segment[1]} / ${segment[0]}` }}
                            ></div>
                        ))}
                    </div>
                </div>
                {
                gameOver && <h1 className='game-over'>Game Over</h1>                
                }
            </div></>
    );
};

export default SnakeGame;