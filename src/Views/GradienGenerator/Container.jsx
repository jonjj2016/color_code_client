import React, { useEffect, useState } from 'react';
import Component from './GradientGenerator';
import { useDispatch, useSelector } from 'react-redux';
import MyGradientSaveModal from '../../Cmponents/GradientSaveModal/modal';
// import MyMenu from '../../Cmponents/Menu/Menu.Container';
// import Slider from '../../Cmponents/Sider/Slider.Container';
// import { Sidebar, Segment, MenuItem, Icon, Popup, Menu, Grid, PopupContent, PopupHeader } from 'semantic-ui-react';
import { actions } from '../../Modules/Pallete/actions';
// import MyModal from '../../Cmponents/Modal/Modal';
// import { Button } from 'semantic-ui-react';
import './__gradient.scss';
// import Directions from '../../Cmponents/GradientCompos/Directions';
import { useHistory, useParams } from 'react-router-dom';

const Container = () => {
  const [state, setState] = useState({
    name: '',
    open: false,
    direction: 'to right',
    gradient_css: '',
    colors: [],
    gradientColors: ['#051937', '#A8EB12'],
    mode: 2,
    first: '#051937',
    second: '#A8EB12',
    third: '#10c2bb',
    activeField: '',
    directions: ['right top', 'right', ' right bottom', 'bottom', 'left bottom', 'left', 'left top', 'top', 'circle'],
  });
  const { goBack } = useHistory();
  const { paletteId } = useParams();

  const dispatch = useDispatch();
  const { palettes, palette, loading } = useSelector((state) => state.paletteReducer);

  useEffect(() => {
    if (paletteId) {
      dispatch(actions.get_start(paletteId));
    } else {
      dispatch(actions.find_start());
    }
  }, []);

  useEffect(() => {
    if (!palettes.length) {
      dispatch(actions.find_start());
      setState({ ...state, gradientColors: ['#e93d30', '#b63326', '#10c2bb'] });
    } else {
      setState({ ...state, gradientColors: ['#e93d30', '#b63326', '#10c2bb'] });
    }
  }, [palettes]);

  useEffect(() => {
    if (palette) {
      setState({ ...state, first: palette.colors[0].color, second: palette.colors[1].color, third: palette.colors[2].color, colors: palette.colors, gradientColors: palette.colors.filter((color, index) => index < 3 && color) });
    }
  }, [palette]);

  useEffect(() => {
    if (palettes.length && !paletteId) {
      const random = Math.floor(Math.random() * palettes.length);
      setState({ ...state, colors: palettes[random].colors });
    }
  }, [palettes.length, paletteId]);

  const addRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    const random = Math.floor(Math.random() * allColors.length);
    const color = allColors[random];

    setState({ ...state, color: color.color, [state.activeField]: color.color });
  };

  const onsetDir = (e, dir) => {
    e.stopPropagation();
    setState({ ...state, direction: dir });
  };

  const onModeChange = () => {
    if (state.mode === 2) {
      setState({ ...state, mode: 3 });
    } else {
      setState({ ...state, mode: 2 });
    }
  };
  const renderer = () => {
    return <React.Fragment>{state.colors && <Component onModeChange={onModeChange} onsetDir={onsetDir} generateRandomColor={addRandomColor} setState={setState} state={state} gradientColors={state.gradientColors} colors={state.colors} />}</React.Fragment>;
  };

  return (
    <React.Fragment>
      <MyGradientSaveModal gradient={{ colors: [state.first, state.second, state.third] }} />
      <React.Fragment>{renderer()}</React.Fragment>
    </React.Fragment>
  );
};

export default Container;
