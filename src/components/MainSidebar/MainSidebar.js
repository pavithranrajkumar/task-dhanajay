import React, { useState } from 'react';
import classes from './MainSidebar.module.css';
import MenuIcon from '../../assets/SampleIcon.svg';
import ToggleIcon from '../../assets/ToggleIcon.png';

/**
 *These are dummy routes,which will be replaced by respective links, routes later (or) these can be 
  imported from a seperate file. Ex:Routes.js
 */
const SAMPLE_ROUTES = [
  { name: 'Dashboard1', route: '/dashboard1', id: 'dashboard1' },
  { name: 'Dashboard2', route: '/dashboard2', id: 'dashboard2' },
  { name: 'Dashboard3', route: '/dashboard3', id: 'dashboard3' },
  { name: 'Dashboard4', route: '/dashboard4', id: 'dashboard4' },
  { name: 'Dashboard5', route: '/dashboard5', id: 'dashboard5' },
];

const MainSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // This function is used to open/hide the sidebar. For now I have hardcoded a fixed width
  const toggleSidebar = () => {
    if (!sidebarOpen) {
      /*If the sidebar is not open, this function opens it by giving a width, for a smoother 
      experience, I've added transition in CSS*/

      document.getElementById('mySidebar').style.width = '19.2vw';
      document.getElementById('menuText').style.width = 'max-content';
      setSidebarOpen(true);
    } else {
      /*If the sidebar is open, this function closes it by setting the width to 0*/

      document.getElementById('mySidebar').style.width = '6vw';
      document.getElementById('menuText').style.width = '0vw';
      setSidebarOpen(false);
    }
  };

  return (
    <div id='mySidebar' className={classes.Sidebar}>
      {/* This button is used to toggle the sidebar, i.e clicking on this will open/hide the
      sidebar based on the previous state */}
      <div className={classes.MenuContainer} onClick={toggleSidebar}>
        <div className={classes.MenuIcon}>
          <img src={ToggleIcon} alt='Menu Icon' />
        </div>
        <div className={classes.MenuText}>SWITCH</div>
      </div>

      {/* For each route,link sidebar is populated with an icon, and the respective link  */}
      {SAMPLE_ROUTES.map((eachRoute) => (
        <div className={classes.MenuContainer}>
          <div className={classes.MenuIcon}>
            <img src={MenuIcon} alt='Menu Icon' />
          </div>
          <div id='menuText' className={classes.MenuText}>
            {eachRoute.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainSidebar;
