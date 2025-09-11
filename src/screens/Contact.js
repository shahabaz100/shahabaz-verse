import React from "react";
import "./Contact.css";
import contactImg from "../assets/images/anonymous-blog.jpg"; // replace with your image
import SocialLinks from "../components/SocialLinks";

function Contact({ darkMode }) {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>contact<span className="dot">.</span></h1>
        <p>
          Get in touch with me via social media or drop me an email.
        </p>

        <SocialLinks darkMode={darkMode} />
      </div>

      <div className="contact-right">
        <img src={contactImg} alt="Contact Visual" />
      </div>
    </div>
  );
}

export default Contact;
