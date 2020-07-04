import React from 'react';
import { Modal } from 'semantic-ui-react';
import Login from './Login';
import Register from './Register';
import { useState } from 'react';

const Component = (props) => {
  const { handleClose, open, onSubmitLogin, onSubmitRegister } = props;

  const [state, setState] = useState({ current: 'login' });

  const handleRoute = (dir) => {
    setState({ current: dir });
  };

  return (
    <Modal dimmer='blurring' size='tiny' onClose={handleClose} open={open} centered={false}>
      <Modal.Content>{state.current === 'login' ? <Login onSubmitForm={onSubmitLogin} handleRoute={handleRoute} handleClose={handleClose} /> : <Register onSubmitForm={onSubmitRegister} handleRoute={handleRoute} handleClose={handleClose} />}</Modal.Content>
    </Modal>
  );
};

export default Component;
