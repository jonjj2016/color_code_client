import React from 'react';
import Component from './component';
import { ContainerWrapper } from './styled';
const my_palette = {
  paletteName: 'Flat UI Colors Aussie',
  id: 'flat-ui-colors-aussie',
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
const Containter = ({ formodal, direction, palette, micro, onPickDirection }) => {
  const renderer = () => {
    if (micro) {
      return <Component formodal={formodal} onPickDirection={onPickDirection} micro={micro} direction={direction} modal palette={my_palette} />;
    } else if (formodal) {
      return (
        <ContainerWrapper formodal={formodal}>
          <Component formodal={formodal} onPickDirection={onPickDirection} micro={micro} direction={direction} modal palette={my_palette} />
        </ContainerWrapper>
      );
    } else {
      return <Component onPickDirection={onPickDirection} direction={direction} palette={palette} />;
    }
  };
  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default Containter;
