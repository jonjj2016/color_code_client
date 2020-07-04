import React, { useState, useEffect } from 'react';
import './_SinglePalette.scss';
import ImageDropzone from '../../Cmponents/imageExtractorComponents/ImageDropzone';
import ImageUrl from '../../Cmponents/imageExtractorComponents/ImageURL';
import SearchBar from '../../Cmponents/imageExtractorComponents/SearchBar';
import ExtractorModal from '../../Cmponents/imageExtractorComponents/Menu';
import List from '../../Cmponents/Drag_List/List';
import chroma from 'chroma-js';
import { Button, Icon } from 'semantic-ui-react';
import SaveModal from '../../Cmponents/Modal/Modal';
import { actions } from '../../Modules/AuxModals/actions';
import { useDispatch } from 'react-redux';
import { actions as paletteActions } from '../../Modules/Pallete/actions';

const myPalette = {
  paletteName: 'Flat UI Colors Aussie14',
  id: 'flat-ui-colors-aussie14',
  emoji: '🇦🇺',
  colors: [
    {
      name: 'TomatoRed',
      color: '#eb2f06',
    },
    {
      name: 'YueGuangBlue',
      color: '#1e3799',
    },
    {
      name: 'GoodSamaritan',
      color: '#3c6382',
    },
    {
      name: 'Spray',
      color: '#82ccdd',
    },
    {
      name: 'ParadiseGreen',
      color: '#b8e994',
    },
    {
      name: 'SquashBlossom',
      color: '#f6b93b',
    },
  ],
};

const SinglePalette = ({ palette, onOpenExtractorModal }) => {
  const [state, setState] = useState({ activeItem: 'upload image', colors: myPalette.colors, paletteName: '', newPaletteName: '' });

  const dispatch = useDispatch();

  const { activeItem } = state;

  useEffect(() => {
    if (palette) {
      const newColors = [...palette.map((item) => ({ name: chroma(item).name(), color: item }))];
      setState({ ...state, colors: newColors });
    }
  }, [palette]);

  const handleItemClick = (e, { name }) => setState({ ...state, activeItem: name });

  const onSavePalette = (palette) => {
    dispatch(paletteActions.create_start(palette));
  };

  const onChange = (e) => {
    setState({ ...state, newPaletteName: e.target.value });
  };

  const onModalOpen = () => {
    dispatch(actions.save_palette_modal_open());
  };
  const render = () => (
    <div>
      <Button icon secondary onClick={onModalOpen} style={{ position: 'absolute', zIndex: 5, right: '-3px', top: '20%', borderRadius: '5px 0 0 5px' }}>
        <Icon name='save' size='big' />
      </Button>
      <Button onClick={onOpenExtractorModal} secondary icon style={{ position: 'absolute', right: '-3px', top: '50%', zIndex: 20, borderRadius: '5px 0 0 5px' }}>
        <Icon name='retro camera' size='big' />
      </Button>
      <SaveModal onSavePalette={onSavePalette} state={state} onChange={onChange} />
      <ExtractorModal activeItem={activeItem} handleItemClick={handleItemClick}>
        {activeItem === 'upload image' && <ImageDropzone />}
        {activeItem === 'URL' && <ImageUrl />}
        {activeItem === 'search' && <SearchBar />}
      </ExtractorModal>
      <div>
        <List state={state} setState={setState} colors={state.colors}></List>
      </div>
    </div>
  );
  return <React.Fragment>{render()}</React.Fragment>;
};

export default SinglePalette;
