import React from 'react';
import Component from './Menu';
import { actions } from '../../Modules/SideBar/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

const Container = ({ children, sidebar }) => {
  const dispath = useDispatch();
  const params = useParams();
  const history = useHistory();
  //console.log(params);

  const { visible } = useSelector((state) => state.sideBar);
  const { location } = useSelector((state) => state.router);

  const onToggleSideBar = () => {
    if (!visible) {
      dispath(actions.sidebar_open());
    } else {
      dispath(actions.sidebar_close());
    }
  };
  const onHomeRoute = () => history.push('/');

  return (
    <Component location={location} onHomeRoute={onHomeRoute} sidebar={sidebar} visible={visible} onToggleSideBar={onToggleSideBar}>
      {children}
    </Component>
  );
};

export default Container;
