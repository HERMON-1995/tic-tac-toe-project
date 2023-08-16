import React, { useState, useEffect} from 'react';
import '../styles/Home.css';
import { Link, NavLink } from 'react-router-dom';

const HomePage = () => {
  const [typedText, setTypedText] = useState('');
  const text = 'Tic-Tac-Toe Game';

  const startTyping = () => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedText('');
          startTyping();
        }, 1020);
      }
    }, 150);
  };

  useEffect(() => {
    startTyping();
  }, []);

  return (
  <div className="gradient-background">
    <div className="content">
      <div>
      <h1 className="glowing-text">{typedText}</h1>
        {/* <img src="logo.png" alt="Game Logo" /> */}
      </div>
    <div>
      <div>
        <p  className="description">Tic Tac Toe is a classic two-player strategy game played on a 3x3 grid. The objective of the game is to be the first player to get three of their symbols (usually &quot;X&quot; or &quot;O&quot;) in a row, either horizontally, vertically, or diagonally. Here's a step-by-step guide on how to play Tic Tac Toe:</p>
        <Link to="/About"><h2 className="how-play">How to Play</h2></Link>
      </div>

      <div className="leaderboard">
        <NavLink to="https://hermon-1995.github.io/Leaderboard-list-app-project/dist/" activeClassName="active" >
           <h3>Rank Player Name Score</h3>
        </NavLink>
        <Link to="/GameBoard" activeClassName="active" >
          <h1 className="play-now">PLAY NOW</h1>
        </Link>
      </div>

      <div className="social-media">
        <h2>Share the Game</h2>
        <div className="social-icons">
          <a href="/" className="icon" aria-label="Facebook">
            Facebook
          </a>
          <a href="/" className="icon" aria-label="Twitter">
            Twitter
          </a>
          <a href="/" className="icon" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
     </div>
    </div>
  </div>  
  )
};

export default HomePage;
