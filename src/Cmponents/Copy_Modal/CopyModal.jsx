import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/AuxModals/actions';
import { Header, Segment, Portal, TransitionablePortal } from 'semantic-ui-react';

let timeout;

const CopyModal = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ animation: 'zoom', duration: 300 });
  const { animation, duration } = state;
  const { copy_modal_open: isOpen } = useSelector((state) => state.auxModals);

  const handleClose = () => {
    dispatch(actions.copy_modal_close());
  };

  useEffect(() => {
    if (isOpen) {
      console.log(isOpen);

      timeout = setTimeout(() => {
        handleClose();
      }, 1500);
    }
    return () => clearTimeout();
  }, [isOpen]);

  return (
    <TransitionablePortal transition={{ animation, duration }} onClose={handleClose} open={isOpen ? true : false}>
      <Segment
        wide
        inverted
        style={{
          width: '20rem',
          right: '1%',
          position: 'fixed',
          top: '5%',
          zIndex: 1000,
        }}>
        <Header as='h1' style={{ textTransform: 'uppercase', letterSpacing: '2px', padding: '0 1rem' }}>
          Copied !!!
        </Header>
        <Header color='grey' as='h5' style={{ textTransform: 'uppercase', letterSpacing: '1px', padding: '.3rem 2rem .3rem .5rem', overflow: 'hidden' }}>
          {isOpen && isOpen}
        </Header>

        {/* <Button content='Close Portal' negative onClick={handleClose} /> */}
      </Segment>
    </TransitionablePortal>
  );
};

export default CopyModal;
