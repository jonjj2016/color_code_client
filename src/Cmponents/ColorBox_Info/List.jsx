import React from 'react';
import Box from './Box';
import './_styled.scss';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { isDarkcolor } from '../../Helpers/ColorHelpers';

const List = ({ info, color, onCopy }) => {
  console.log(info);

  return (
    <div style={{ backgroundColor: color, color: isDarkcolor(color) ? '#eee' : '#333' }} className='color_info_list'>
      {info.map((item, index) => {
        return (
          //   <CopyToClipboard>
          <Box onCopy={onCopy} isDark={isDarkcolor(color)} info={item} key={index} />
          //   </CopyToClipboard>
        );
      })}
    </div>
  );
};

export default List;
