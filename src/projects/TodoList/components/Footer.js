import React from 'react';

function Footer({ title, darkMode }) {
  return (
    <div className={darkMode ? 'footer dark' : 'footer'}>
      {title}
    </div>
  );
}

export default Footer;
