import React from 'react';
import './footer.css';

const footerMenu = [
  {
    id: 1,
    name: 'Support',
  },
  {
    id: 2,
    name: 'Learning',
  },
  {
    id: 3,
    name: 'Русская версия',
  },
]

const Footer = () => {
  return ( 
    <footer className="footer">
      <div className="footer__content">
        <div className="container">
          <nav className="footer__menu">
            {footerMenu.map(({ id, name }) => <a href={`#${name}`} key={id} className="footer__link">{ name }</a>)}
          </nav>
          <div className="footer__copyright">
            © 2020 Your Name
          </div>
        </div>
      </div>
    </footer>
   );
}

export default Footer;