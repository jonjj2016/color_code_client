import React, { useEffect, useState } from 'react';
import Component from './NewPalette';
import { useDispatch, useSelector } from 'react-redux';
import { Segment, Icon } from 'semantic-ui-react';
import { actions } from '../../Modules/Pallete/actions';
import { actions as modalAction } from '../../Modules/AuxModals/actions';
import MyModal from '../../Cmponents/Modal/Modal';
import { useParams } from 'react-router-dom';
import Draggable from 'react-draggable';
import chroma from 'chroma-js';

const Container = () => {
  const [state, setState] = useState({
    color: 'red',
    open: false,
    colors: [],
    newColorName: '',
    newPaletteName: '',
    disabled: false,
    maxItemInNewPalette: 8,
    paletteModalOpen: false,
    editMode: false,
    saveModal: false,
    activeColor: '',
    addColorMode: false,
  });

  const { paletteId } = useParams();
  const dispatch = useDispatch();
  const { palettes, palette, current, loading, mode } = useSelector((state) => state.paletteReducer);
  const { authenticated } = useSelector((state) => state.logs);
  console.log(authenticated);

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
    }
  }, [palettes]);

  useEffect(() => {
    if (palette) {
      setState({ colors: palette.colors, newPaletteName: mode === 'edit' ? palette.paletteName : '', editMode: true });
    }
  }, [palette]);

  useEffect(() => {
    if (palettes.length && !paletteId) {
      const random = Math.floor(Math.random() * palettes.length);
      setState({ ...state, colors: palettes[random].colors });
    }
  }, [palettes.length, paletteId]);

  const addRandomColor = () => {
    console.log(state.colors.length, state.maxItemInNewPalette);

    if (state.colors.length >= 8) return;
    const color = chroma.random().hex();
    setState({ ...state, colors: [...state.colors, { color }], color, addColorMode: true });
  };
  const setAddColorMode = () => setState({ ...state, addColorMode: true });

  const onChange = (e) => {
    e.stopPropagation();
    const { value, name } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSavePalette = () => {
    const palette = { paletteName: state.newPaletteName, colors: state.colors };

    dispatch(actions.create_start(palette));
    dispatch(modalAction.save_palette_modal_close());
  };

  const openSaveModal = () => {
    if (state.colors.length < 3) return;
    dispatch(modalAction.save_palette_modal_open());
  };

  const handleColorChange = (color) => {
    const colors = [...state.colors];
    const current_color = colors[state.colors.length - 1];
    current_color.color = color;
    setState({ ...state, color: color, colors });
  };
  const onEdit = () => {
    const palette = { paletteName: state.newPaletteName, colors: state.colors };
    dispatch(actions.patch_start({ _id: paletteId, palette }));
  };

  const renderer = () => {
    return (
      <div style={{ position: 'relative' }}>
        <MyModal onEdit={onEdit} onChange={onChange} state={state} colors={state.colors} onSavePalette={onSavePalette} palettes={palettes} />
        {authenticated && (
          <Draggable axis='y'>
            <Segment onClick={openSaveModal} style={{ position: 'absolute', bottom: '45%', right: '0', zIndex: 100, cursor: 'pointer', borderRadius: '20px 0  0 20px' }}>
              <Icon name={state.colors.length === 0 ? 'save outline' : 'save'} size='big' />
            </Segment>
          </Draggable>
        )}
        <Draggable defaultPosition={{ x: 0, y: 100 }} axis='y'>
          <Segment onClick={addRandomColor} style={{ position: 'absolute', bottom: '45%', right: '0', zIndex: 100, cursor: 'pointer', borderRadius: '20px 0  0 20px' }}>
            <Icon name={state.colors.length < state.maxItemInNewPalette ? 'plus square outline' : 'plus square'} size='big' />
          </Segment>
        </Draggable>

        <Component handleColorChange={handleColorChange} setState={setState} state={state} colors={state.colors} />
      </div>
    );
  };

  return (
    <React.Fragment>
      <React.Fragment>{renderer()}</React.Fragment>
    </React.Fragment>
  );
};

export default Container;
