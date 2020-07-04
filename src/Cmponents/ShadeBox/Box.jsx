import React from 'react';
import './_styled.scss';
import { isDarkcolor } from '../../Helpers/ColorHelpers';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Box = ({ shade, color, onCopy }) => {
  const styled = {
    backgroundColor: shade,
    color: isDarkcolor(shade) ? '#999' : '#333',
  };

  return (
    <CopyToClipboard onCopy={() => onCopy(shade)} text={shade}>
      <div className='shadeBox' style={styled}>
        <span>{shade.slice(1, shade.length)}</span>
      </div>
    </CopyToClipboard>
  );
};

export default Box;
