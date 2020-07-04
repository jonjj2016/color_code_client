import React, { useState } from 'react';
import { Button, Input, ButtonGroup, Header, Image, Form, Modal, Icon, MenuItem } from 'semantic-ui-react';
import MiniPalette from '../MiniPalette/MiniPalette';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/AuxModals/actions';
import './_Modal.scss';

const MyModal = ({ onSavePalette, state, onChange, onEdit }) => {
  const dispatch = useDispatch();
  const { save_palette_modal_open: isOpen } = useSelector((state) => state.auxModals);
  const { mode } = useSelector((state) => state.paletteReducer);
  console.log(mode);

  //const [open, setOpen] = useState(false);
  const setPaletteName = () => {
    if (mode === 'edit') return state.newPaletteName;
    return '';
  };

  const palette = {
    paletteName: state.newPaletteName,
    // paletteName: setPaletteName(),
    colors: state.colors,
  };

  const onClick = (e) => {
    e.stopPropagation();
    if (mode === 'edit') {
      onEdit(palette);
    } else {
      console.log(palette);

      onSavePalette(palette);
    }
  };
  const onUnmount = () => dispatch(actions.save_palette_modal_close());
  const btnText = () => {
    if (mode === 'modify') return 'Save';
    if (mode === 'edit') return 'Edit';
    if (!mode) return 'Save';
  };
  return (
    <Modal open={isOpen} className='myModal' onClose={onUnmount}>
      <Modal.Header>Save your Palette</Modal.Header>
      <Modal.Content image>
        <MiniPalette modal palette={palette} />
        <Modal.Description>
          <Header>You can edit your Palettes later on!</Header>
          <p>The Name should be Unique</p>
          <Form onSubmit={onClick}>
            <Input onChange={onChange} name='newPaletteName' value={state.newPaletteName} fluid placeholder='Enter Palette Name' />
            <Button color='youtube' type='submit' disabled={!state.newPaletteName} fluid>
              {btnText()}
            </Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default MyModal;
