import React, { useState } from 'react';
import { Modal, Card, Segment } from 'semantic-ui-react';
import { ColorExtractor } from 'react-color-extractor';
import ColorList from './ColorList';
import { actions } from '../../Modules/UnsplashImages/actions';
import { actions as modalActions } from '../../Modules/AuxModals/actions';
import { useDispatch } from 'react-redux';

function App({ children, height, currentImage, open, setUnmount }) {
  const [colors, setColors] = useState('');

  const dispath = useDispatch();

  const getColors = (colors) => {
    if (colors) {
      setColors(colors);
    }
    dispath(actions.set_colors_start(colors));
  };

  const clearColors = () => {
    setColors([]);
    // dispath(modalActions.extractor_modal_close());
    setUnmount();
  };

  return (
    <Modal open={open} onClose={clearColors} style={{ padding: 0 }} size='tiny' trigger={<div style={{ width: '100%', margin: '2rem auto', height: height, overflowY: 'scroll' }}>{children}</div>} centered={false}>
      <div style={{}}>
        {currentImage ? <ColorExtractor src={currentImage} getColors={getColors}></ColorExtractor> : null}
        <Modal.Content>
          <Card style={{ width: '100%' }} color='red'>
            {currentImage ? <Segment style={{ height: '50vh', width: '100%', backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${currentImage})` }}></Segment> : <h1>Loading</h1>}
            {colors.length ? <div>{colors && <ColorList colors={colors} />}</div> : null}
          </Card>
        </Modal.Content>
      </div>
    </Modal>
  );
}
export default App;
