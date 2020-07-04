import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Input, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { actions } from '../../Modules/UnsplashImages/actions';
import ImageModal from './ImageModal';

const ImageURL = () => {
  const dispatch = useDispatch();
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  const [state, setState] = useState({ inputUrl: '', loading: false, image: '', isOpen: false });

  const { inputUrl, image } = state;

  const onSubmit = (e) => {
    setState({ ...state, image: state.inputUrl, inputUrl: '', isOpen: true });
  };
  const onChange = (e) => {
    setState({ ...state, inputUrl: e.target.value });
  };
  const setUnmount = () => {
    setState({ ...state, isOpen: false });
  };
  return (
    <Form style={{}} onSubmit={onSubmit}>
      <ImageModal setUnmount={setUnmount} open={state.isOpen} currentImage={state.image} />

      <Form.Field>
        <Label pointing='below'>IMAGE URL</Label>
        <Input ref={ref} value={inputUrl} onChange={onChange} style={{ height: '4rem', fontSize: '1.3rem', padding: '0 1rem' }} placeholder='https://' fluid focus={true} />
      </Form.Field>
      <Form.Field>
        <Button style={{ borderRadius: 0, height: '4rem', marginTop: '2rem' }} disabled={!inputUrl} secondary content='Next' icon='right arrow' labelPosition='right' fluid type='submit'></Button>
      </Form.Field>
    </Form>
  );
};

export default ImageURL;
