import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Box = ({ isDark, info, onCopy }) => {
  return (
    <CopyToClipboard onCopy={() => onCopy(info.content)} text={info.content}>
      <div style={{ border: `1px solid ${isDark ? '#eee' : '#333'}` }} className='color_info_box'>
        {info.content}
      </div>
    </CopyToClipboard>
  );
};

export default Box;
