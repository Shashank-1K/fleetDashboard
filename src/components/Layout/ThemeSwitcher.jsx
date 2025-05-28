import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-switcher" onClick={toggleTheme}>
      {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeSwitcher;