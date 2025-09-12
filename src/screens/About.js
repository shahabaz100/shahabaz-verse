import React from 'react';
import './About.css';
import profilePic from '../assets/images/test3.jpeg'; // replace with your photo
import TechStack from './TechStack';

function About({ darkMode }) {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <img src={profilePic} alt="Shahabaz Khan" className="profile-pic" />
        <h1>Shahabaz Khan</h1>
        <h2>Front End Engineer</h2>
        <p>I build accessible, pixel-perfect digital experiences for the web.</p>
        <TechStack />
      </div>

      <div className={`about-right ${darkMode ? 'lightTheme' : 'darkTheme'}`}>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I’m Shahabaz Khan, a front-end engineer from Hyderabad, India, with over 6 years of
            experience building scalable, high-performance web applications.
          </p>
          <p>
            I specialize in creating clean, responsive, and pixel-perfect interfaces that strike
            a balance between thoughtful design and strong engineering. My focus is on
            accessibility, usability, and performance—ensuring that every experience I deliver
            is both intuitive and reliable.
          </p>
          <p>
            Over the years, I’ve grown from writing code to mentoring developers, leading teams,
            and shaping workflows that drive successful project outcomes.
          </p>
        </section>

        <section id="experience">
          <h2>Experience</h2>

          <div className="experience-card">
            <h3>Lead Developer — Infosys Limited, Hyderabad</h3>
            <span className="duration">Jan 2022 – Present</span>
            <p>
              At Infosys, I’ve led the development of enterprise-scale applications with a strong
              focus on usability, performance, and accessibility. I worked across teams, guided
              junior developers, and introduced improvements that enhanced delivery timelines,
              code quality, and user satisfaction. My contributions were consistently recognized
              with awards for innovation and execution.
            </p>
          </div>

          <div className="experience-card">
            <h3>Software Developer — Osmosys Software Solutions, Hyderabad</h3>
            <span className="duration">Apr 2019 – Jan 2022</span>
            <p>
              At Osmosys, I was responsible for building and delivering reliable web applications
              while working closely with designers, QA, and backend engineers. I took ownership
              of end-to-end delivery, resolved high-impact issues under tight timelines, and
              mentored small teams, setting the foundation for my transition into leadership roles.
            </p>
          </div>
        </section>

        <section id="awards">
          <h2>Awards & Recognitions</h2>
          <ul>
            <li>
              <strong>Infosys Limited</strong> – Awards for excellence in delivery, UI innovation,
              and project leadership.
            </li>
            <li>
              <strong>Certificate of Appreciation (2024)</strong> – For critical contributions to
              the Intermodal Carrier Hub project.
            </li>
            <li>
              <strong>Insta Awards (2023 & 2024)</strong> – Recognized for leadership and solving
              complex project challenges.
            </li>
            <li>
              <strong>Osmosys (2021)</strong> – Ad-Hoc Award for resolving critical issues and
              ensuring on-time project delivery.
            </li>
          </ul>
        </section>

        <section id="skills">
          <h2>Skills at a Glance</h2>
          <ul className="skills-list">
            <li>Frontend Engineering – building scalable, responsive apps</li>
            <li>UI/UX – pixel-perfect, accessible, and user-focused design</li>
            <li>Performance Optimization – improving speed and scalability</li>
            <li>Leadership – mentoring, Agile workflows, cross-team collaboration</li>
            <li>Problem Solving – transforming complex requirements into clean solutions</li>
          </ul>
        </section>

        <section id="tech-stack">
          <h2>Tech Stack</h2>
          <p>
            Here are the tools and technologies I work with day-to-day:
          </p>
          <ul className="skills-list">
            <li><strong>Frontend:</strong> Angular (2–14), React, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS</li>
            <li><strong>State Management:</strong> NgRx, Redux</li>
            <li><strong>Backend & APIs:</strong> Node.js, REST APIs</li>
            <li><strong>Databases & Cloud:</strong> Firebase (Auth, Hosting, Firestore)</li>
            <li><strong>UI/UX & Standards:</strong> Responsive Design, WCAG Accessibility, Design Systems</li>
            <li><strong>Tools & Workflow:</strong> Git, CI/CD, Agile/Scrum</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
