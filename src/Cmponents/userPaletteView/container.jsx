import React, { useState } from 'react';
import Component from './userPalette';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../../Modules/AuxModals/actions';

const Container = () => {
  const { user_palette_open } = useSelector((state) => state.auxModals);
  const dispatch = useDispatch();
  const onClose = () => dispatch(actions.userPalett_modal_close());

  const onCopy = (copiedColor) => {
    dispatch(actions.copy_modal_open(copiedColor));
  };

  return (
    <Modal onClose={onClose} open={user_palette_open.isOpen} basic size='small'>
      <Modal.Header>
        Color Code:{'  '} <span style={{ color: 'red' }}> {user_palette_open.isOpen && user_palette_open.data.paletteName}</span>
      </Modal.Header>
      <Modal.Content>
        <Component onCopy={onCopy} palette={user_palette_open.data} />
      </Modal.Content>
    </Modal>
  );
};

export default Container;
