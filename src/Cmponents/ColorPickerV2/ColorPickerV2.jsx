import React, { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import Draggable from 'react-draggable';
import { actions } from '../../Modules/AuxModals/actions';
import { useDispatch, useSelector } from 'react-redux';
import { ChromePicker } from 'react-color';
import { Segment, Menu, Icon, Modal, Button, Portal, TransitionablePortal, Header } from 'semantic-ui-react';
import HSL from './HSL';
import NavMenu from './Menu';
import './_styled.scss';
import { hsl } from 'chroma-js';
import { isDarkcolor } from '../../Helpers/ColorHelpers';

const ColorPickerV2 = ({ state: mainState, setState: mainSetState, handleColorChange }) => {
  const [state, setState] = useState({ dragable: true, animation: 'fade down', duration: 500, colors: [], current: 'SketchPicker', currentColor: mainState.color, activeItem: 'home', mode: 'menu' });

  const { colors, current, currentColor, activeItem, mode, animation, duration } = state;

  const dispatch = useDispatch();

  const onColorChange = (color) => {
    const renderedColor = chroma(color.hex).alpha(color.rgb.a).hex();
    handleColorChange(renderedColor);
  };

  const renderer = () => {
    return <ChromePicker id='.color-picker-palette' color={mainState.color} onSwatchHover={onColorChange} onChangeComplete={onColorChange} onChange={onColorChange}></ChromePicker>;
  };

  const onModeToggle = () => {
    if (mode === 'menu') {
      setState({ ...state, mode: 'content', dragable: true });
    } else {
      setState({ ...state, mode: 'menu', dragable: true });
    }
  };
  const setDragable = (e) => {
    e.stopPropagation();
    setState({ ...state, dragable: false });
  };
  const setDragableStop = (e) => {
    e.stopPropagation();
    setState({ ...state, dragable: true });
  };
  const onCloseModal = () => {
    mainSetState({ ...mainState, addColorMode: false });
    dispatch(actions.add_color_modal_close());
  };
  const renderPortal = () => {
    return (
      <TransitionablePortal transition={{ animation, duration }} onClose={onCloseModal} open={mainState.addColorMode}>
        <Segment id='colorPicker_container' style={{ left: '5%', position: 'fixed', top: '10%', zIndex: 1000 }}>
          <span onClick={onCloseModal} className='ui  right corner label' style={{ cursor: 'pointer', color: '#000' }} onMouseLeave={setDragableStop} onMouseEnter={setDragable}>
            <Icon size='small' style={{ cursor: 'pointer' }} name='minus' />
          </span>

          {/* <span className='ui right bottom corner label' style={{ cursor: 'grab' }} onMouseLeave={setDragableStop} onMouseEnter={setDragable}>
            <Icon size='small' style={{ cursor: 'grab' }} name='hand rock outline' />
          </span> */}
          {renderer()}

          <Segment className='picker_controller'>
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <Button fluid style={{ height: '100%', backgroundColor: mainState.color, color: isDarkcolor(mainState.color) ? '#eee' : '#333' }}>
                Random Color
              </Button>
            </div>
          </Segment>
        </Segment>
      </TransitionablePortal>
    );
  };
  return <React.Fragment>{renderPortal()}</React.Fragment>;
};

export default ColorPickerV2;
