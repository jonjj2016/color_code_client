import React, { useState, useEffect, useRef } from 'react';
import { Icon } from 'semantic-ui-react';
import ImageModal from './ImageModal';

const ImageDropzone = () => {
  const [state, setState] = useState({ image: '', isOpen: false });
  const styles = { position: 'relative', cursor: 'pointer', height: '30vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' };
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const inputRef = useRef();
  useEffect(() => {}, []);
  const onSubmit = () => {};
  const onFileLoad = (e) => {
    e.preventDefault();
    console.log(e.currentTarget.files[0]);

    let file = e.currentTarget.files[0];

    let reader = new FileReader();

    if (e.target.files.length === 0) {
      return;
    }
    // reader.onload = (e) => console.log('onload', e);
    // reader.onprogress = (e) => console.log('onprogress', e.loaded);

    reader.onloadend = (e) => {
      setState({ ...state, image: reader.result, isOpen: true });
    };
    reader.readAsDataURL(file);
  };
  const setUnmount = () => {
    setState({ image: '', isOpen: false });
  };
  return (
    <div style={styles}>
      <ImageModal setUnmount={setUnmount} open={state.isOpen} currentImage={state.image} />
      <input style={{ height: '100%', width: '100%', position: 'absolute', zIndex: 2, top: 0, left: 0, cursor: 'pointer', opacity: 0 }} ref={inputRef} type='file' name='file-browser-input' onDragOver={onDragOver} onDrop={onFileLoad} onChange={onFileLoad} />
      <Icon name='image outline' size='massive' />
      <p style={{ marginBottom: '5rem' }}>Drag 'n' drop image files here, or click to select files</p>
    </div>
  );
};

export default ImageDropzone;
