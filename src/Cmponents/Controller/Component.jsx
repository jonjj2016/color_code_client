import React from 'react';
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react';

const Component = ({ children }) => {
  return (
    <Modal
      //   size='fullscreen'
      trigger={
        <Button style={{ boxShadow: '12px 2px 2px rgba(0,0,0,0.1' }} size='massive' color='teal' icon circular>
          <Icon name='setting' />
        </Button>
      }>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        {/* <Image wrapped size='medium' src='https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' /> */}
        {/* <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description> */}
      </Modal.Content>
      {children}
    </Modal>
  );
};

export default Component;
