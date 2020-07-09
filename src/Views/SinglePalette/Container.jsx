import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Component from './SinglePalette';
import Spinner from '../../Cmponents/Spinner/Spinner';
import { actions, add_palette_mode } from '../../Modules/Pallete/actions';

const Container = () => {
  const history = useHistory();

  const { paletteId } = useParams();

  const dispatch = useDispatch();

  const { palette, loading } = useSelector((state) => state.paletteReducer);
  const { user, loading: userLoading } = useSelector((state) => state.logs);
  // console.log(user);
  let own_palettes, liked_palettes, role;
  if (user) {
    own_palettes = user.own_palettes;
    liked_palettes = user.liked_palettes;
    role = user.role;
  }
  //console.log(own_palettes, liked_palettes, role);
  useEffect(() => {
    dispatch(actions.get_start(paletteId));
  }, [paletteId]);

  const controllers = {
    onDelete: () => {
      dispatch(actions.remove_start(paletteId));
    },
    onModify: () => {
      dispatch(add_palette_mode('modify'));
      history.push(`/compose_palette/${paletteId}`);
    },
    onEdit: () => {
      dispatch(add_palette_mode('edit'));
      history.push(`/compose_palette/${paletteId}`);
    },
  };

  const renderer = () => {
    if (loading || !palette) {
      return <Spinner />;
    } else {
      return <Component own_palettes={own_palettes} role={role} liked_palettes={liked_palettes} controllers={controllers} palette={palette} />;
    }
  };
  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default Container;
