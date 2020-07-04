import React from 'react';
import Component from './Component';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/AuthModal/actions';
import { actions as authActions } from '../../Modules/Auth/actions';

const Container = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.authModal);

  const handleClose = () => {
    dispatch(actions.close_start());
  };
  const onSubmitRegister = (formData) => {
    dispatch(authActions.register_start(formData));
  };

  const onSubmitLogin = (formData) => {
    dispatch(authActions.login_start(formData));
  };

  return <React.Fragment>{isOpen ? <Component onSubmitLogin={onSubmitLogin} onSubmitRegister={onSubmitRegister} handleClose={handleClose} open={isOpen} /> : null}</React.Fragment>;
};

export default Container;
