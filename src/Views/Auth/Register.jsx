import React, { useState, useEffect, useRef } from 'react';
import { Modal, Portal, Header, Button, Segment, Form, Input, Checkbox, Image, Message } from 'semantic-ui-react';
import './_styled.scss';

const Login = ({ handleClose, handleRoute, onSubmitForm }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    agree: false,
    password_error: false,
    name_error: false,
  });
  const { email, password, name, confirmPassword, agree, password_error, name_error } = state;

  const onConfirm = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setState({ ...state, password_error: true });
    }
    if (!name) {
      return setState({ ...state, name_error: true });
    }
    onSubmitForm({ email, name, password });
    setState({
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      agree: false,
      password_error: false,
      name_error: false,
    });
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const onClick = () => {
    if (!name || !email || !password || !confirmPassword) {
      return;
    }
    setState({ ...state, agree: !agree });
  };
  return (
    <div className='login'>
      <Segment className='myForm'>
        <Header as='h1'>Join Us</Header>
        <p>Sign up to collect your palettes.</p>
        <Image src={'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png'} circular size='small' />
        <Form onSubmit={onConfirm}>
          <Form.Field label='Your Name' control={Input} error={name_error} onChange={onChange} name='name' value={name} icon='user' iconPosition='left' fluid placeholder='Name' />
          <Form.Field label='Your Email' type='email' control={Input} onChange={onChange} name='email' value={email} icon='mail' iconPosition='left' fluid placeholder='Email' />
          <Form.Field label='Your Password' control={Input} error={password_error} error={password_error} type='password' onChange={onChange} name='password' value={password} icon='lock' iconPosition='left' fluid placeholder='Password' />
          <Form.Field label='Confirm Password' control={Input} error={password_error} type='password' onChange={onChange} name='confirmPassword' value={confirmPassword} icon='lock' iconPosition='left' fluid placeholder='Password' />
          <Form.Field>
            <Checkbox checked={agree} onClick={onClick} label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Form.Field>
            <Button disabled={!agree} secondary type='submit' fluid>
              Sign Up
            </Button>
          </Form.Field>
          <Message>
            Already Registered? <span onClick={() => handleRoute('login')}>Sign In</span>
          </Message>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;
