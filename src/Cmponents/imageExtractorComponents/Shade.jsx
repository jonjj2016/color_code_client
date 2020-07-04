import React, { useEffect, useState } from 'react';
import './_styles.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { isDarkcolor } from '../../Helpers/ColorHelpers';

const Sade = ({ shade }) => {
  const onClick = () => {};
  return (
    <CopyToClipboard onCopy={onClick} text={shade}>
      <div className='shade_box' style={{ margin: 0, padding: 0 }}>
        {/* <div className='copy_content'></div> */}
        <div style={{ backgroundColor: shade, height: '100%', with: '3rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: isDarkcolor(shade) ? '#999' : '#333' }}> {shade.toUpperCase()}</span>
        </div>
      </div>
    </CopyToClipboard>
  );
};

export default Sade;
