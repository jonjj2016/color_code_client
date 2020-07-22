import React, { useEffect, useState } from 'react';
import { Card } from 'semantic-ui-react';
import './_MiniPalette.scss';
import { Icon } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { actions } from '../../Modules/Auth/actions';
import { actions as modalActions } from '../../Modules/AuthModal/actions';
import { actions as copyModal } from '../../Modules/AuxModals/actions';
import { MiniPaletteWrapper, Info, Horizontal, Square, Circular, MiniColorBox } from './styled';
import { useDispatch, useSelector } from 'react-redux';

const MiniPalette = ({ modal, palette, direction, formodal, micro, onPickDirection }) => {
  const history = useHistory();
  const [state, setState] = useState({
    user: null,
  });

  const { authenticated, user } = useSelector((state) => state.logs);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setState({ ...state, user: user });
  // }, [user.liked_palettes.length]);
  const onClick = () => {
    if (micro) {
      onPickDirection(direction);
    } else !modal && history.push(`/palette/${palette._id}`);
  };

  const renderer = () => {
    return (
      <React.Fragment>
        <Info>
          <div className='miniPaletteInfo'>{!micro && <div className='miniPlaetteTitle'>{palette.paletteName}</div>}</div>
        </Info>
        {palette.colors.map((color, index) => {
          return <MiniColorBox micro={micro} key={index} direction={direction} color={color.color}></MiniColorBox>;
        })}
      </React.Fragment>
    );
  };
  let width, height, display, margin;

  if (micro) {
    width = '140px';
    height = '100px';
    display = 'inline-block';
    margin = '1rem';
  }

  const directionRenderer = () => {
    if (direction === 'horizontal') {
      return (
        <Horizontal onClick={onClick} micro={micro}>
          {renderer()}{' '}
        </Horizontal>
      );
    } else if (direction === 'square') {
      return (
        <Square onClick={onClick} micro={micro}>
          {renderer()}
        </Square>
      );
    } else if (direction === 'circle') {
      return (
        <Circular onClick={onClick} micro={micro}>
          {renderer()}
        </Circular>
      );
    }
    return (
      <MiniPaletteWrapper direction={direction} onClick={onClick} micro={micro}>
        {renderer()}
      </MiniPaletteWrapper>
    );
  };
  const onCopyPalette = () => {
    if (authenticated) {
      dispatch(copyModal.copy_modal_open('Have been successfully added to your list'));
      dispatch(actions.patch_start({ id: user._id, data: [...state.user.liked_palettes, palette] }));
    } else {
      dispatch(modalActions.open_start());
    }
  };
  return (
    <Card id='mini_card' style={{ width, height, display, margin }} className='item' color='purple'>
      {directionRenderer()}
      {!micro && !formodal && (
        <Card.Content id='card_content' extra>
          <div className='extra'>
            {/* <span>
              <Icon name='eye' />
              {palette.downloads} Views
            </span> */}
            <span onClick={onCopyPalette} style={{ cursor: 'pointer' }}>
              <Icon name='clone outline' />
            </span>
          </div>
        </Card.Content>
      )}
    </Card>
  );
};

export default MiniPalette;
