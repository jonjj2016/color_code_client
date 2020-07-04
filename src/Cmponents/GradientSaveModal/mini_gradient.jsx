import React from 'react';
import { Button, Input, ButtonGroup, Header, Image, Form, Modal, Icon, MenuItem, Card } from 'semantic-ui-react';

const mini_gradient = ({ gradient }) => {
  return (
    <Card style={{ overflow: 'hidden' }} color='red'>
      <div style={{ height: '240px', minWidth: '380px', backgroundImage: `linear-gradient( to right ,#051937,#2e4e2e,#578225,#7fb71b,#a8eb12)` }}></div>
    </Card>
  );
};

export default mini_gradient;
//background-image :linear-gradient( to right ,#051937,#2e4e2e,#578225,#7fb71b,#a8eb12)
