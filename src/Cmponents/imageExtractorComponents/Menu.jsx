import React from 'react';
import { Menu, Icon, Modal } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/AuxModals/actions';

const ExtractorMenu = ({ activeItem, handleItemClick, children }) => {
  const dispatch = useDispatch();
  const { extractor_modal_open: isOpen } = useSelector((state) => state.auxModals);

  const closeModal = () => {
    dispatch(actions.extractor_modal_close());
  };

  return (
    <Modal open={isOpen} style={{ zIndex: 100, padding: 0 }} onClose={closeModal} centered={false} size='small'>
      <Modal.Header style={{ borderBottom: 'none', padding: '.4rem 0' }}>
        <Menu
          tabular
          //  style={{ padding: '0.4rem ' }}
        >
          <Menu.Item header>Extractor</Menu.Item>
          <Menu.Menu position='right' style={{ padding: '3px 3px 0 3px' }}>
            <Menu.Item name='upload image' active={activeItem === 'upload image'} onClick={handleItemClick} />
            <Menu.Item name='URL' active={activeItem === 'URL'} onClick={handleItemClick} />
            <Menu.Item name='search' active={activeItem === 'search'} onClick={handleItemClick} />
          </Menu.Menu>
          <Menu.Item
            header
            //  style={{ borderLeft: '1px solid #444' }}
          >
            <Icon size='big' style={{ cursor: 'pointer', fontWeight: 100 }} onClick={closeModal} name='times circle' /> {'  '}
          </Menu.Item>
        </Menu>
      </Modal.Header>
      <Modal.Content style={{ padding: '2rem 0 0 ' }}>{children}</Modal.Content>
    </Modal>
  );
};
export default ExtractorMenu;
