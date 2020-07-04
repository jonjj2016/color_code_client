import React from 'react';
import Component from './Component';

const Container = ({ children }) => {
  return (
    <div style={{ position: 'absolute', zIndex: 3, bottom: '20px', right: '20px' }}>
      <Component>{children}</Component>
    </div>
  );
};

export default Container;
