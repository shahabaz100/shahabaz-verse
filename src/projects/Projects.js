import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Projects.css";
import todoImage from "../assets/images/Todo-app.webp";
import BlogImage from "../assets/images/Blog-app.webp";

function Projects({ darkMode }) {
  const projects = [
    {
      title: "Todo App",
      description: "A sleek task manager built with React to organize your daily tasks.",
      link: "/todo",
      image: todoImage,
    },
    {
      title: "Blog Platform",
      description: "Write, edit, and share your articles seamlessly.",
      link: "/Articles",
      image: BlogImage
    }
  ];

  return (
    <div className={`projects-page ${darkMode ? "light" : "dark"}`}>
      <header className="projects-header">
        <h1>My Projects</h1>
        <p>Explore some of the work I’ve done recently.</p>
      </header>

      <nav className="projects-nav">
        <Link to="/todo" className="nav-link">Todo</Link>
        <Link to="/Articles" className="nav-link">Blog</Link>
      </nav>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link to={project.link} className="project-btn">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Outlet />
    </div>
  );
}

export default Projects;
