import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">Fleet Manager</div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;