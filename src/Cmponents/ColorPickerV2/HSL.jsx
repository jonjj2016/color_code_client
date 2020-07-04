import React from 'react';
import { HuePicker } from 'react-color';
import 'rc-slider/assets/index.css';
import './_styled.scss';
import { Segment, Label } from 'semantic-ui-react';
import Slider from 'rc-slider';
import chroma from 'chroma-js';

const HSL = ({ currentColor, onColorChange }) => {
  const onchange = (e) => {
    console.log(e);
  };
  console.log(chroma.temperature(30000).hex());
  console.log(chroma.temperature(15000).hex());
  console.log(chroma.temperature(1234).hex());
  console.log(chroma.temperature(45).hex());
  return (
    <div>
      <div className='huePickerSegment'>
        <div></div>

        <HuePicker color={currentColor} onSwatchHover={onColorChange} onChangeComplete={onColorChange} onChange={onColorChange} />
      </div>
      <div className='picker_Saturation'>
        <div>Saturation</div>

        <Slider onChange={onchange} name='saturation' />
      </div>
      <div className='picker_Saturation'>
        <div>Luminance</div>
        <Slider />
      </div>
      <div className='picker_Saturation'>
        <div>Brightness</div>
        <Slider />
      </div>
      <div className='picker_Saturation'>
        <div>Temperature</div>
        <Slider />
      </div>
    </div>
  );
};

export default HSL;
