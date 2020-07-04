import React from 'react';
import './_styled.scss';
import { Menu } from 'semantic-ui-react';

const NavMenu = ({ activeItem, handleItemClick }) => {
  return (
    <Menu id='picker_menu' fluid pointing vertical>
      <Menu.Item name='picker' active={activeItem === 'picker'} onClick={handleItemClick} />
      <Menu.Item name='hsl' active={activeItem === 'hsl'} onClick={handleItemClick} />
      <Menu.Item name='hex' active={activeItem === 'hex'} onClick={handleItemClick} />
      <Menu.Item name='random color' active={activeItem === 'messages'} onClick={handleItemClick} />
      <Menu.Item name='home' active={activeItem === 'home'} onClick={handleItemClick} />
    </Menu>
  );
};

export default NavMenu;
