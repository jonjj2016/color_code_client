import React, { useState } from 'react';
import './_Gallery.scss';
// import { Link } from 'react-router-dom';
// import Slider from '../../Cmponents/Sider/Slider.Container';
// import MiniPalett from '../../Cmponents/MiniPalette/MiniPalette';
import { Card } from 'semantic-ui-react';
// import MySideBar from '../../Cmponents/Sidebar/SlideBar.Containrer';
// import MyMenu from '../../Cmponents/Menu/Menu.Container';
import NewMiniPalette from '../../Cmponents/NewMiniPalette/Containter';
// import Controller from '../../Cmponents/Controller/Container';
// import { MiniPaletteGallery } from '../../Cmponents/NewMiniPalette/styled';
import { useWindowSize } from '../../Hooks/windowSize';

const Gallery = ({ palettes }) => {
  const size = useWindowSize();
  const [state, setState] = useState({
    pickerDirection: 'vertical',
    form: ['square', 'circle', 'horizontal', 'vertical'],
  });

  const renderer = () => {
    return (
      <Card.Group itemsPerRow={4}>
        {palettes.map((palette, index) => {
          return <NewMiniPalette direction={state.pickerDirection} palette={palette} key={index} />;
        })}
      </Card.Group>
    );
  };

  return <div className='miniPlette'>{renderer()}</div>;
};

export default Gallery;
