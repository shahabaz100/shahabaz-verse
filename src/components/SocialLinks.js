// import React from 'react'
// import { FaGithub, FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
// import "./SocialLinks.css";

// function SocialLinks({ footer, darkMode }) {
//     return (
//         <div className={`social-links ${footer ? "row" : "column"} ${darkMode ? 'darkFont':'lightFont'  }`}>
//             <a href="https://github.com/shahabaz100" target="_blank" rel="noopener noreferrer">
//                 <FaGithub />{footer ? '' : 'GitHub'}
//             </a>
//             <a href="https://www.linkedin.com/in/shahabaz-khan/" target="_blank" rel="noopener noreferrer">
//                 <FaLinkedin />{footer ? '' : 'LinkedIn'}
//             </a>
//             <a href="https://www.instagram.com/shahabaz_100/" target="_blank" rel="noopener noreferrer">
//                 <FaInstagram />{footer ? '' : 'Instagram'}
//             </a>
//             <a href="https://x.com/shahabazk100" target="_blank" rel="noopener noreferrer">
//                 <FaTwitter />{footer ? '' : 'Twitter'}
//             </a>
//             <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
//                 <FaFacebook />{footer ? '' : 'Facebook'}
//             </a>
//         </div>
//     )
// }

// export default SocialLinks

import React from "react";
import "./SocialLinks.css";
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function SocialLinks({ footer, darkMode }) {
    return (
        <div className={`social-links ${footer ? "row" : "column"} ${darkMode ? 'darkFont' : 'lightFont'}`}>
           
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="icon twitter" /> {footer ? '' : 'Twitter'}
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="icon facebook" /> {footer ? '' : 'Facebook'}
            </a>
             <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
                <FaGithub className="icon github" />  {footer ? '' : 'GitHub'}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon linkedin" /> {footer ? '' : 'LinkedIn'}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="icon instagram" /> {footer ? '' : 'Instagram'}
            </a>
        </div>
    );
}

export default SocialLinks;
