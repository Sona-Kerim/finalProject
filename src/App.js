import React, { useState , useEffect} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/home/Home';
import Torot from './Components/Torot/Torot';
import DailyHoroscope from './Components/dailyHoroscope/DailyHoroscope';
import Compatibility from './Components/Compatibility/Compatibility';
import Pages404 from './Components/Pages404';
import backgroundPhoto from './photos/backgroundPhoto.jpg';
import peakpx from './photos/lightBackgroung.jpg';
import Quiz from './Components/Quiz/Quiz';
import './App.css';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const changeBodyColor = () => {
    const body = document.body;
    if (isDarkMode) {
      body.style.backgroundImage = `url(${backgroundPhoto})`;
    } else {
      body.style.backgroundImage = `url(${peakpx})`;
    }
  };
  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    changeBodyColor();
  }, [isDarkMode]);
  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar">
        <NavLink className="nav-link" to="/">
          Signs
        </NavLink>
        <NavLink className="nav-link" to="daily-horoscope">
          Daily Horoscope
        </NavLink>
        <NavLink className="nav-link" to="torot">
          Torot
        </NavLink>
        <NavLink className="nav-link" to="compatibility">
          Compatibility
        </NavLink>
        <NavLink className="nav-link" to="quiz">
          Quiz
        </NavLink>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="daily-horoscope" element={<DailyHoroscope />} />
          <Route path="torot" element={<Torot />} />
          <Route path="compatibility" element={<Compatibility />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="*" element={<Pages404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
