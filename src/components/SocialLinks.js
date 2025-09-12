import { useState } from "react";
import "./SocialLinks.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope, FaRegCopy } from "react-icons/fa";

function SocialLinks({ footer, darkMode }) {
    const [toastVisible, setToastVisible] = useState(false);
    const email = "shahabaz100@gmail.com";

    const copyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setToastVisible(true);
            setTimeout(() => setToastVisible(false), 6000); 
        });
    };
    return (
        <div className={`social-links ${footer ? "row" : "column"} ${darkMode ? 'darkTheme' : 'lightTheme'}`}>
            <a href="https://www.linkedin.com/in/shahabaz-khan/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon linkedin" /> {footer ? '' : 'LinkedIn'}
            </a>
            <a href="https://x.com/shahabazk100" target="_blank" rel="noreferrer">
                <FaTwitter className="icon twitter" /> {footer ? '' : 'Twitter'}
            </a>
            <a href="https://github.com/shahabaz100" target="_blank" rel="noreferrer">
                <FaGithub className="icon github" />  {footer ? '' : 'GitHub'}
            </a>
            <a href="https://www.facebook.com/shahabaz100" target="_blank" rel="noreferrer">
                <FaFacebook className="icon facebook" /> {footer ? '' : 'Facebook'}
            </a>
            <a href="https://www.instagram.com/shahabaz_100/" target="_blank" rel="noreferrer">
                <FaInstagram className="icon instagram" /> {footer ? '' : 'Instagram'}
            </a>
            {!footer &&
                <div className="email-wrapper">
                    <a href={`mailto:${email}`}>
                        <FaEnvelope className="icon email" />Email
                    </a>
                    <FaRegCopy className="copy-icon" onClick={copyEmail} title="Copy Email" />
                </div>
            }
            {/* Toast message */}
            {toastVisible && (
                <div className="toast">📋 Email copied to clipboard!</div>
            )}
        </div>
    );
}

export default SocialLinks;
