import React, { useState } from 'react';
import './_Gallery.scss';
import { Card } from 'semantic-ui-react';
import NewMiniPalette from '../../Cmponents/NewMiniPalette/Containter';
import { useWindowSize } from '../../Hooks/windowSize';

const Gallery = ({ palettes }) => {
  const size = useWindowSize();

  const [state, setState] = useState({
    pickerDirection: 'vertical',
    form: ['square', 'circle', 'horizontal', 'vertical'],
  });
  const changeSize = () => {
    if (size.width > 900 && size.width <= 1100) return 2;
    if (size.width <= 900) return 1;
    return 3;
  };
  const renderer = () => {
    return (
      <Card.Group itemsPerRow={changeSize()}>
        {palettes.map((palette, index) => {
          return <NewMiniPalette direction={state.pickerDirection} palette={palette} key={index} />;
        })}
      </Card.Group>
    );
  };

  return <div className='miniPlette'>{renderer()}</div>;
};

export default Gallery;
