import React, { useState } from 'react';
import classes from './Sidebar.module.css';
import MenuIcon from '../../assets/SampleIcon.svg';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    if (!sidebarOpen) {
      document.getElementById('mySidebar').style.width = '19.2vw';
      document.getElementById('menuText').style.width = 'max-content';
      setSidebarOpen(true);
    } else {
      document.getElementById('mySidebar').style.width = '6vw';
      document.getElementById('menuText').style.width = '0vw';
      setSidebarOpen(false);
    }
  };

  return (
    <div id='mySidebar' className={classes.Sidebar}>
      <div className={classes.MenuContainer} onClick={toggleSidebar}>
        <div className={classes.MenuIcon}>
          <img src={MenuIcon} alt='Menu Icon' />
        </div>
        <div className={classes.MenuText}>SWITCH</div>
      </div>

      <div className={classes.MenuContainer}>
        <div className={classes.MenuIcon}>
          <img src={MenuIcon} alt='Menu Icon' />
        </div>
        <div id='menuText' className={classes.MenuText}>
          Dashboard
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
