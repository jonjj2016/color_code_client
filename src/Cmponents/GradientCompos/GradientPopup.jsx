import React from 'react';
import { Popup, PopupHeader, PopupContent, Segment, Button, Grid, Form } from 'semantic-ui-react';
import './__gradient.scss';
import chroma from 'chroma-js';
import { text_Color } from '../../Helpers/ColorHelpers';

const GradientPopup = (props) => {
  const { generateRandomColor, value, colors, name, onInputClick, onChange, colorPicker, onSetGradientColor } = props;

  const popupStyle = {
    borderRadius: 0,
    opacity: 0.9,
    padding: '.3em',
  };

  return (
    <Popup
      style={popupStyle}
      trigger={
        <Form>
          <Form.Field>
            <input value={value.slice(1, value.length)} style={{ backgroundColor: value, textAlign: 'center', color: text_Color(value) }} onClick={onInputClick} onChange={onChange} name={name} placeholder={`${name} color`}></input>
          </Form.Field>
        </Form>
      }
      on='click'
      position='bottom right'>
      <PopupHeader>Pick Color</PopupHeader>

      <PopupContent>
        <Button fluid style={{ backgroundColor: value, color: text_Color(value) }} onClick={generateRandomColor}>
          Random Color
        </Button>
        <Segment>{colorPicker()}</Segment>
      </PopupContent>
      <PopupContent>
        <Segment id='MminiColorWrapper'>
          {colors.map((color, index) => (
            <Segment onClick={() => onSetGradientColor(color.color)} key={index} id='miniColor' style={{ backgroundColor: color.color }}></Segment>
          ))}
        </Segment>
      </PopupContent>
    </Popup>
  );
};

export default GradientPopup;
