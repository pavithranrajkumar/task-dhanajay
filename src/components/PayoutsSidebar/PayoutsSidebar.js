import React, { useState } from 'react';
import classes from './PayoutsSidebar.module.css';
import MenuIcon from '../../assets/SampleIcon.svg';
import ToggleIcon from '../../assets/ToggleIcon.png';

/**
 *These are dummy routes,which will be replaced by respective links, routes later (or) these can be 
  imported from a seperate file. Ex:Routes.js
 */
const SAMPLE_ROUTES = [
  { name: 'Summary', route: '/dashboard1', id: 'dashboard1' },
  { name: 'Beneficiaries', route: '/dashboard2', id: 'dashboard2' },
  { name: 'Transfers', route: '/dashboard3', id: 'dashboard3' },
  { name: 'Cashgram', route: '/dashboard4', id: 'dashboard4' },
  { name: 'Account', route: '/dashboard5', id: 'dashboard5' },
];

const PayoutsSidebar = () => {
  /* This state variable is used to keep track of the current active link, we can directly get it from
  location but for now I've maintained in state */
  const [activeLink, setActiveLink] = useState('dashboard3');

  return (
    <div id='payoutsSidebar' className={classes.Sidebar}>
      <div className={classes.SidebarContent}>
        <div className={classes.SidebarTitle}>Payouts</div>

        {/* For each route,link sidebar is populated with an icon, and the respective link  */}
        <div className={classes.MenuContainer}>
          {SAMPLE_ROUTES.map((route) => (
            <div
              className={`${classes.MenuItem} 
                  ${route.id === activeLink ? classes.Active : ''}`}
              onClick={() => setActiveLink(route.id)}
            >
              <div className={classes.MenuIcon}>
                <img src={MenuIcon} alt='Menu Icon' />
              </div>
              <div id='payoutsMenuText' className={classes.MenuText}>
                {route.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PayoutsSidebar;
