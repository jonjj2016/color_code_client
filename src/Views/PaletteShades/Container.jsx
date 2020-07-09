import React, { useEffect } from 'react';
import Component from './PaletteShades';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/Pallete/actions';
import { gatherShades } from '../../Helpers/ColorHelpers';
import { paletteGenerator } from '../../Helpers/ColorHelpers';
import Spinner from '../../Cmponents/Spinner/Spinner';

const Container = () => {
  const { paletteId, colorId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.get_start(paletteId));
  }, []);
  const { palette, loading } = useSelector((state) => state.paletteReducer);
  let shade = [];
  if (palette && !loading) {
    shade = gatherShades(colorId, paletteGenerator(palette));
  }
  const renderer = () => {
    if (palette && !loading) {
      return <Component palette={shade} color={colorId} />;
    } else {
      return <Spinner />;
    }
  };
  return <React.Fragment>{renderer()}</React.Fragment>;
};

export default Container;
