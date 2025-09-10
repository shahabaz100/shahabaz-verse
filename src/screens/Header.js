import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

function Header({ darkMode, setDarkMode }) {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className="header container">
      <div className="home-btn" onClick={redirectToHome}>
        {`<Shahabaz❤️Verse />`}
      </div>

      <nav className="quick-links">
        <Link className="linkTo" to="/">Home</Link>
        <Link className="linkTo" to="/about">About</Link>
        <Link className="linkTo" to="/Articles">Blogs</Link>
        <Link className="linkTo" to="/projects">Projects</Link>
        <Link className="linkTo" to="/contact">Contact</Link>
      </nav>

      <div className="right-side">
        <div className="theme-btn-wrapper">
          <div className="theme-btn">
            <button onClick={() => setDarkMode(!darkMode)}>
              {/* {darkMode ? "🌙" : "🌞"} */}
              {darkMode ? "🌚" : "😎"}
            </button>
          </div>
          <span className="tooltip-text">
            {darkMode ? "Shift to Day Mode" : "Shift to Night Mode"}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Header;
