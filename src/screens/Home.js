import React from "react";
import "./Home.css";
import dayBg from "../assets/images/day-bg.webp";
import nightBg from "../assets/images/night-bg.webp";
import { useNavigate } from "react-router-dom";

function Home({ darkMode }) {
    const navigate = useNavigate();
    return (
        <div
            className="home-container"
        >
            <img
                src={darkMode ? nightBg : dayBg}
                alt="Background"
                className="home-bg-image"
            />
            <div className="home-content">
                <h1>Welcome to Shahabaz Verse</h1>
                <p className="typing-text">Exploring the Galaxy of Code & Creativity.</p>
                <div className="quick-links">
                    <button className="cta-btn" onClick={() => navigate('/about')}>🧑‍💻 My Journey</button>
                    <button className="cta-btn" onClick={() => navigate('/projects')}>🚀 View My Projects</button>
                </div>
            </div>
        </div>
    );
}

export default Home;