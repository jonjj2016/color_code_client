import React from 'react';
import { Icon } from 'semantic-ui-react';
import './__gradient.scss';

const Directions = ({ onsetDir, dir }) => {
  return (
    <span id='gradient_buttons'>
      <Icon onClick={(e) => onsetDir(e, 'to right top')} color='teal' style={{ transform: 'rotate(135deg)' }} name='arrow alternate circle left outline' />
      <Icon onClick={(e) => onsetDir(e, 'to right')} color='teal' name='arrow alternate circle right outline' />
      <Icon onClick={(e) => onsetDir(e, 'to right bottom')} color='teal' style={{ transform: 'rotate(45deg)' }} name='arrow alternate circle right outline' />
      <Icon onClick={(e) => onsetDir(e, 'to bottom')} color='teal' style={{ transform: 'rotate(90deg)' }} name='arrow alternate circle right outline' />
      <Icon onClick={(e) => onsetDir(e, 'to left bottom')} color='teal' style={{ transform: 'rotate(-45deg)' }} name='arrow alternate circle left outline' />
      <Icon onClick={(e) => onsetDir(e, 'to left')} color='teal' name='arrow alternate circle left outline' />
      <Icon onClick={(e) => onsetDir(e, 'to left top')} color='teal' style={{ transform: 'rotate(45deg)' }} name='arrow alternate circle left outline' />
      <Icon onClick={(e) => onsetDir(e, 'to top')} color='teal' style={{ transform: 'rotate(90deg)' }} name='arrow alternate circle left outline' />
      <Icon onClick={(e) => onsetDir(e, 'circle')} color='teal' style={{ tranform: 'rotate()' }} name='circle outline' />
    </span>
  );
};

export default Directions;
