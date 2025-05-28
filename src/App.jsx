import React from 'react';
import Header from './components/Layout/Header';
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <main className="main">
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;