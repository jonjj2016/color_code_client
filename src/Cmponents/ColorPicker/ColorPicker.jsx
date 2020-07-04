import React from 'react';
import { Button, Input } from 'semantic-ui-react';
import { ChromePicker } from 'react-color';
import './_ColorPicker.scss';

const ColorPicker = ({ onChangeComplete, color }) => {
  const onComplite = (e) => {
    e.stopPrapagation();
    console.log(e);
  };
  return (
    <div>
      <div className='picker'>
        <ChromePicker disableAlpha={false} color={color} onClick={onComplite} onChangeComplete={onChangeComplete} />
      </div>
    </div>
  );
};

export default ColorPicker;
