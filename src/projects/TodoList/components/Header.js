import React from 'react';

function Header({ title, darkMode, setDarkMode }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}

export default Header;
