import React, { useState } from 'react';
import './index.scss';

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="nav-menu">
        <div onClick={() => setIsOpen(!isOpen)}>
          <div className={`nav-icon ${isOpen ? 'nav-active' : ''}`}></div>
        </div>
      </div>
      <div className={`nav-menu-list ${isOpen ? 'nav-active' : ''}`}></div>
    </>
  );
};

export default NavMenu;
