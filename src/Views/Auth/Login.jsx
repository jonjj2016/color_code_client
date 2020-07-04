import React, { useState, useRef, useEffect } from 'react';
import { Modal, Checkbox, Header, Button, Segment, Form, Input, Image, Message } from 'semantic-ui-react';
import './_styled.scss';

const Login = ({ handleRoute, onSubmitForm }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    agree: false,
  });

  const ref = useRef();

  useEffect(() => {
    ref.current.focus();
  }, []);
  const onConfirm = (e) => {
    e.preventDefault();

    onSubmitForm({ email, password });
    setState({
      email: '',
      password: '',
      agree: false,
    });
  };
  const { email, password, agree } = state;
  const onChange = (e) => {
    const { name, value, clicked } = e.target;

    if (name === 'agree') {
      setState({ ...state, [name]: clicked });
    }
    setState({ ...state, [name]: value });
  };
  const onClick = () => {
    setState({ ...state, agree: !state.agree });
  };
  return (
    <div className='login'>
      <Segment className='myForm'>
        <Header as='h1'>login</Header>
        <p>Sign into your account here.</p>
        <Image src={'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png'} circular size='small' />
        <Form onSubmit={onConfirm}>
          <Form.Field>
            <label>Your Email</label>
            <Input ref={ref} icon='user' type='email' iconPosition='left' value={state.email} name='email' onChange={onChange} fluid placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Your Password</label>
            <Input icon='lock' type='password' iconPosition='left' value={state.password} name='password' onChange={onChange} fluid placeholder='Password' />
          </Form.Field>
          <Form.Field>
            <Checkbox name='agree' checked={state.agree} onClick={onClick} label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Form.Field>
            <Button disabled={!agree || !email || !password} secondary loading={false} type='submit' fluid>
              Sign In
            </Button>
          </Form.Field>
          <Message>
            Don't have an account <span onClick={() => handleRoute('register')}>Sign Up</span>
          </Message>
        </Form>
      </Segment>
    </div>
  );
};

export default Login;
