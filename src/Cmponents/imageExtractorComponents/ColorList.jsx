import React, { useEffect, useState } from 'react';
import { Popup, Segment } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { generateShades, isDarkcolor } from '../../Helpers/ColorHelpers';
import './_styles.scss';
import Shade from './Shade';

const ColorList = ({ colors }) => {
  return (
    <Segment style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {colors.map((color, index) => {
        return (
          <Popup style={{ margin: 0, padding: ' .8rem', overflow: 'hidden', backgroundColor: color }} key={index} on='click' position='right center' pinned trigger={<div key={index} style={{ cursor: 'pointer', margin: '0 5px', backgroundColor: color, height: '5rem', width: '5rem' }}></div>}>
            <Popup.Content>
              <h1 style={{ letterSpacing: '3px', textAlign: 'center', color: isDarkcolor(color) ? '#999' : '#333' }}> {color.toUpperCase()}</h1>
              {generateShades(color, 25).map((shade, index) => (
                <Shade key={index} shade={shade} />
              ))}
            </Popup.Content>
          </Popup>
        );
      })}
    </Segment>
  );
};

export default ColorList;
