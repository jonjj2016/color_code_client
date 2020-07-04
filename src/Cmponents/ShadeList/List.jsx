import React from 'react';
import ShadeBox from '../ShadeBox/Box';
import { generateShades } from '../../Helpers/ColorHelpers';
import { useState, useEffect } from 'react';
import './_styled.scss';

const List = ({ color, isOpen, onCopy }) => {
  const [shades, setShades] = useState('');
  useEffect(() => {
    const list = generateShades(color, 26);
    setShades(list);
  }, []);

  return (
    <div className='shadeList'>
      <div className='return'></div>
      {shades ? (
        shades.map((shade, index) => {
          return <ShadeBox onCopy={onCopy} key={index} shade={shade} color={color} />;
        })
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default List;
