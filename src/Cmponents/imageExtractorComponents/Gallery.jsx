import React, { useState, useEffect } from 'react';
import Gallery from 'react-photo-gallery';
import { images } from '../../images';
import ImageModal from './ImageModal';

function App() {
  const [currentImage, setCurrentImage] = useState({ src: '' });
  const [unsplashImages, setUnsplash] = useState([]);
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (unsplashImages.length) return;
    const new_images = images.map((file) => {
      const url = file.urls.small.split('tropy')[0];
      return { src: url, width: file.width, height: file.height };
    });
    setUnsplash(new_images);
  }, []);
  const onClick = (e) => {
    const image = e.target.src.replace(/400/g, '1080');

    setCurrentImage({ src: image, height: e.target.height, width: e.target.width });
  };
  useEffect(() => {
    if (currentImage.src === '') {
      return setOpen(false);
    }
    setOpen(true);
  }, [currentImage]);

  const setUnmount = () => {
    setCurrentImage({ src: '' });
    setOpen(false);
  };
  return (
    <div style={{}}>
      <ImageModal setUnmount={setUnmount} open={isOpen} height={'50vh'} currentImage={currentImage.src ? currentImage.src : currentImage}>
        <Gallery photos={unsplashImages} onClick={(e) => onClick(e, false)} />
      </ImageModal>
    </div>
  );
}
export default App;
