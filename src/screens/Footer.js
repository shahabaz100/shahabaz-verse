import React from "react";
import "./Footer.css";
import SocialLinks from "../components/SocialLinks";

function Footer() {
  return (
    <footer className="footer">
      <SocialLinks footer/>
      <p className="footer-text">© {new Date().getFullYear()} Shahabaz Verse. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
