import React, { useState, useEffect } from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import { isDarkcolor } from '../../Helpers/ColorHelpers';
import './_styled.scss';
import ShadeList from '../ShadeList/List';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useLocation } from 'react-router-dom';
import chroma from 'chroma-js';
import InfoList from '../ColorBox_Info/List';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/AuxModals/actions';

const Box = ({ onDelete, ...props }) => {
  const { color, setShadeOpen, shadeOpen, setActiveColor, index, globalState } = props;
  const { copy_modal_open: modalValue } = useSelector((state) => state.auxModals);
  const usableColor = () => {
    if (globalState.activeColor && globalState.activeColor === index) {
      return globalState.color;
    } else {
      return color;
    }
  };
  const dispatch = useDispatch();
  const [state, setState] = useState({
    shadesOpen: false,
    toolsOpen: false,
    options: ['hex', 'rgb', 'rgba', 'temperature', 'hsl', 'hsv', 'hsi', 'lab', 'ich', 'hcl'],
    info: [],
  });
  const location = useLocation();

  useEffect(() => {
    const info = state.options.map((item) => ({ name: item, content: chroma(usableColor()).css(item) }));
    setState({ ...state, info });
  }, [color, globalState.activeColor]);

  useEffect(() => {
    if ((!shadeOpen && state.shadesOpen) || (!shadeOpen && state.toolsOpen)) {
      setState({ ...state, shadesOpen: false, toolsOpen: false });
    }
  }, [shadeOpen]);

  const styled = {
    backgroundColor: usableColor(),
    borderRadius: 0,
    border: 'none',
    cursor: 'pointer',
    zIndex: 1,
  };

  const colorStyle = {
    color: isDarkcolor(usableColor()) ? '#eee' : '#333',
  };

  const onShade = () => {
    setState({ ...state, shadesOpen: true, toolsOpen: false });
    setShadeOpen();
  };

  const toggle = () => {
    setState({ ...state, shadesOpen: false, toolsOpen: false });
    setShadeOpen();
  };

  const onCopy = (copiedColor = color) => {
    if (modalValue) return;
    dispatch(actions.copy_modal_open(copiedColor));
  };

  const onInfoToggle = (e) => {
    e.stopPropagation();
    setState({ ...state, toolsOpen: true });
    setShadeOpen();
  };

  const openColorModal = () => {
    dispatch(actions.add_color_modal_open());
    setActiveColor(index);
  };

  const renderer = () => {
    if (state.toolsOpen) {
      return <InfoList onCopy={onCopy} color={usableColor()} info={state.info} />;
    }
    if (!state.shadesOpen) {
      return (
        <React.Fragment>
          <Segment className='dragable_box' style={styled}></Segment>
          {!shadeOpen ? (
            <React.Fragment>
              <div className='dragable_box_content'>
                <div className='content'>
                  {location.pathname.startsWith('/compose_palette') && <Icon onClick={() => onDelete(usableColor())} style={colorStyle} name='trash alternate outline' />}
                  {/* {location.pathname.startsWith('/compose_palette') && <Icon onClick={openColorModal} style={{ cursor: 'grab' }} style={colorStyle} name='settings' />} */}
                  <CopyToClipboard onCopy={onCopy} text={color}>
                    <Icon style={colorStyle} name='clone outline' />
                  </CopyToClipboard>
                  <Icon onClick={onInfoToggle} style={colorStyle} name='crosshairs' />
                  <Icon onClick={onShade} style={colorStyle} name='unordered list' />
                </div>
                <div onClick={() => console.log('ko')} style={{ color: isDarkcolor(usableColor()) ? '#eee' : '#333', outline: 'none' }} className='title'>
                  {color.slice(1, usableColor().length)}
                </div>
              </div>
            </React.Fragment>
          ) : (
            <div onMouseDown={toggle} style={{ height: '100%', width: '100%', zIndex: 3, top: 0, left: 0, position: 'absolute' }}></div>
          )}
        </React.Fragment>
      );
    }
    if (state.shadesOpen) {
      return <ShadeList onCopy={onCopy} color={color} isOpen={state.shadesOpen} />;
    }
  };
  return <div className='box'>{renderer()}</div>;
};

export default Box;
