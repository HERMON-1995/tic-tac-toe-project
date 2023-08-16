import React from 'react';
import './styles/Nav.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './AllPages/Home';
import AboutPage from './AllPages/About';
import ContactPage from './AllPages/Contact';
import GameBoard from './AllPages/GameBoard';

const App = () => (
  <>
    <nav>
      <ul>
        <NavLink to="/" activeClassName="active" end>
          Home
        </NavLink>
        <NavLink to="/About" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/Contact" activeClassName="active">
          Contact
        </NavLink>
        
      </ul>
    </nav>
  
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Contact" element={<ContactPage />} />
      <Route path="/GameBoard" element={<GameBoard />} />
    </Routes>

    <footer>
       <p>Footer</p>
    </footer>
  </>
);

export default App;
