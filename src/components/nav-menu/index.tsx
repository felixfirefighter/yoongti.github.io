import React, { useState } from 'react';
import './index.scss';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <>
      <div className="nav-menu-container">
        <div className="nav-menu">
          <div onClick={() => setIsOpen(!isOpen)}>
            <div className={`nav-icon ${isOpen ? 'nav-active' : ''}`}></div>
          </div>
        </div>
        <div className={`nav-menu-list ${isOpen ? 'nav-active' : ''}`}>
          <div
            className="nav-menu-item font-size-xxl"
            onClick={() => scrollToView('about')}
          >
            About
          </div>
          <div
            className="nav-menu-item font-size-xxl"
            onClick={() => scrollToView('work')}
          >
            Work
          </div>
          <div
            className="nav-menu-item font-size-xxl"
            onClick={() => scrollToView('contact')}
          >
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
