import React, { useState, useEffect } from 'react';
import { Menu, Icon, MenuItem, Popup, Button, Dropdown, Segment, Input, Label } from 'semantic-ui-react';
import { actions } from '../../Modules/AuthModal/actions';
import { actions as authActions } from '../../Modules/Auth/actions';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import log from '../../Utils/images/log.png';

const MainMenu = () => {
  const [state, setState] = useState({ isOpen: false, activeItem: 'inbox' });

  const location = useLocation();

  const { authenticated, user } = useSelector((state) => state.logs);

  const dispath = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('feathers-jwt')) {
      dispath(authActions.reauthenticate_start());
    } else {
      console.log('not authenticated with no  token');
    }
  }, [location.pathname]);

  const onOpenModal = () => {
    dispath(actions.open_start());
  };

  const onOpenPopup = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  const handleItemClick = (e, { name }) => {
    e.stopPropagation();
    setState({ ...state, activeItem: name });
  };

  const signOut = () => {
    dispath(authActions.logout_start());
  };

  return (
    <Menu style={{ margin: 0, borderRadius: 0, width: '100%' }}>
      <NavLink to='/'>
        <Menu.Item>
          <img src={log} />
        </Menu.Item>
      </NavLink>

      <MenuItem onClick={onOpenPopup}>
        <Popup offset='-10px, 10px' on='click' open={state.isOpen} position='bottom left' trigger={<Icon name='sliders horizontal' />}>
          <Popup.Content>
            <Menu vertical>
              <NavLink to='/'>
                {/* <Menu.Item>
                <img src={log} />
              </Menu.Item> */}
                <Menu.Item name='inbox' active={state.activeItem === 'inbox'}>
                  <Icon size='large' name='compass' />
                  Home
                </Menu.Item>
              </NavLink>
              <NavLink to='/compose_palette'>
                <Menu.Item name='spam' active={state.activeItem === 'spam'}>
                  <Icon size='large' name='pencil' />
                  <span>Compose Palette</span>
                </Menu.Item>
              </NavLink>
              <NavLink to='/extract_colors'>
                <Menu.Item name='updates' active={state.activeItem === 'updates'}>
                  <Icon name='camera' size='large' />
                  <span>Extract Colors</span>
                </Menu.Item>
              </NavLink>
              <Link to='/generate_gradient'>
                <Menu.Item>
                  <Icon name='cube' size='large' />
                  <span>Generate Gradient</span>
                </Menu.Item>
              </Link>
            </Menu>
          </Popup.Content>
        </Popup>
      </MenuItem>
      <Menu.Menu position='right'>
        {authenticated && user ? (
          <React.Fragment>
            <Menu.Item header icon>
              Hi {user.name.toUpperCase()}
            </Menu.Item>
            <Menu.Item header onClick={signOut}>
              <Icon size='large' name='sign-out' />
            </Menu.Item>
          </React.Fragment>
        ) : (
          <Menu.Item onClick={onOpenModal}>
            <Icon name='user' />
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export default MainMenu;
