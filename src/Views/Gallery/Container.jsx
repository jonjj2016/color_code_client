import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Modules/Pallete/actions';
// import { paletteGenerator } from '../../Helpers/ColorHelpers';
// import Palette from '../../Cmponents/Palette/Palette';
import Component from './Gallery';
import Spinner from '../../Cmponents/Spinner/Spinner';

const Container = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.find_start());
  }, []);
  const { palettes, loading } = useSelector((state) => state.paletteReducer);

  const renderer = () => {
    if (loading || palettes.length === 0) {
      return <Spinner />;
    } else {
      return <Component palettes={palettes} loading={loading} />;
    }
  };

  return <Fragment>{renderer()}</Fragment>;
};

export default Container;
