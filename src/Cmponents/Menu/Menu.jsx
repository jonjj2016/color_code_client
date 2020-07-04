import React from 'react';
import { Icon, Menu, MenuItem, Dropdown, Image } from 'semantic-ui-react';
import logo from '../../Utils/images/logo2.png';

import './_Menu.scss';

const MyMenu = ({ onToggleSideBar, children, visible, sidebar, onHomeRoute, location }) => {
  console.log(location.pathname.split('/'));

  return (
    <Menu id='top_menu' attached='top'>
      <MenuItem onClick={onHomeRoute} style={{ padding: ' .5em 2rem' }}>
        <Image src={logo} />
      </MenuItem>
      {sidebar && <MenuItem onClick={onToggleSideBar}>{!visible ? <Icon name='arrow right' /> : <Icon name='arrow left' />}</MenuItem>}
      {children}
    </Menu>
    // </div>
  );
};

export default MyMenu;
