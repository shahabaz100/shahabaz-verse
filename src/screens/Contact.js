import React from "react";
import "./Contact.css";
import contactImg from "../assets/images/test4.jpg";
import SocialLinks from "../components/SocialLinks";

function Contact({ darkMode }) {
  return (
    <div className={`contact-container ${darkMode ? 'darkTheme' : 'lightTheme'}`} >
      <div className="contact-left">
        <h1>Contact<span className="dot">.</span></h1>
        <p>
          Get in touch with me via social media or drop me an email.
        </p>

        <SocialLinks darkMode={darkMode} />
      </div>

      <div className="contact-right">
        <img src={contactImg} alt="Contact Visual" />
      </div>
    </ div>
  );
}

export default Contact;
