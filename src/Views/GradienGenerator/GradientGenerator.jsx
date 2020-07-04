import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GradientPopUp from '../../Cmponents/GradientCompos/GradientPopup';
import { Grid, Button, Popup, Icon } from 'semantic-ui-react';
import Directions from '../../Cmponents/GradientCompos/Directions';
import chroma from 'chroma-js';
import { actions } from '../../Modules/AuxModals/actions';
import { useDispatch } from 'react-redux';
import './__gradient.scss';

const NewPalette = ({ colors, gradientColors, state, setState, generateRandomColor, onsetDir, onModeChange }) => {
  const [localState, setLocalState] = useState(['first', 'second', 'third']);
  const dispatch = useDispatch();
  useEffect(() => {
    if (state.mode === 2) {
      setLocalState(['first', 'second']);
    } else {
      setLocalState(['first', 'second', 'third']);
    }
  }, [state.mode]);
  const gradColors = () => {
    if (state.mode === 3) {
      return chroma.scale([state.first, state.second, state.third]).colors(11);
    } else {
      return chroma.scale([state.first, state.second]).colors(5);
    }
  };

  const onChangeComplete = (color) => {
    setState({ ...state, [state.activeField]: color.hex });
  };
  const colorPicker = () => {
    return <ChromePicker color={state[state.activeField]} disableAlpha onSwatchHover={onChangeComplete} onChange={onChangeComplete} onChangeComplete={onChangeComplete} />;
  };

  let backgroundStyle;
  if (state.direction === 'circle') {
    backgroundStyle = { backgroundImage: `radial-gradient(${state.direction} ,${[...gradColors()]})` };
  } else {
    backgroundStyle = { backgroundImage: `linear-gradient( ${state.direction} ,${[...gradColors()]})` };
  }
  useEffect(() => {
    setState({ ...state, gradient_css: backgroundStyle.backgroundImage });
  }, []);
  const onChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    //setState({ ...state, [state.activeField]: value });
  };

  const onInputClick = (e) => {
    setState({ ...state, activeField: e.target.name });
  };
  const onSetGradientColor = (color) => {
    setState({ ...state, [state.activeField]: color });
  };
  const onCopy = () => {
    dispatch(actions.copy_modal_open(backgroundStyle.backgroundImage));
    // setState({ ...state, gradient_css: backgroundStyle.backgroundImage });
  };
  const renderer = () => {
    if (gradientColors) {
      return (
        <React.Fragment>
          <Popup
            style={{ borderRadius: 0, opacity: 0.8, padding: '2em' }}
            inverted
            trigger={
              <Button secondary id='gradient_dir' color='teal' circular icon>
                <Icon name='setting' size='big' />
              </Button>
            }
            content={<Directions dir={state.direction} onsetDir={onsetDir} />}
            on='click'
            position='bottom left'
          />
          <div className='gradient_wrapper' style={backgroundStyle}>
            <Button secondary onClick={onModeChange} style={{ position: 'absolute', zIndex: 100, right: '30px', bottom: '10%' }} color='linkedin'>
              {state.mode === 2 ? '3 Color Gradient' : '2 Color Gradient'}
            </Button>
            <CopyToClipboard onCopy={onCopy} text={backgroundStyle.backgroundImage} id='copyButton'>
              <Button id='gradientGenerate' icon circular>
                <Icon name='code' />
              </Button>
            </CopyToClipboard>
            <Grid id='gradient_grid' columns={2}>
              {localState.map((item, index) => {
                return <GradientPopUp state={state} generateRandomColor={generateRandomColor} onSetGradientColor={onSetGradientColor} value={state[item]} colors={colors} key={index} onChange={onChange} gradColors={gradColors()} onInputClick={onInputClick} name={item} colorPicker={colorPicker} />;
              })}
            </Grid>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>Please add colors to be able to save your palette</h1>
        </React.Fragment>
      );
    }
  };

  return <div>{renderer()}</div>;
};

export default NewPalette;
