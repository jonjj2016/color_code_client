import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Component from './App2';
import { actions } from '../../Modules/Pallete/actions';
import { actions as modalActions } from '../../Modules/AuxModals/actions';

const Container = () => {
  const dispatch = useDispatch();
  const { palette, loading, palettes } = useSelector((state) => state.paletteReducer);
  const { authenticated } = useSelector((state) => state.logs);
  const { colors } = useSelector((state) => state.unsplashImages);

  useEffect(() => {
    dispatch(actions.get_start('ui-colors_4'));
    if (!palettes.length) {
      dispatch(actions.find_start());
    }
  }, []);
  const onOpenExtractorModal = () => {
    dispatch(modalActions.extractor_modal_open());
  };
  return <Component authenticated={authenticated} onOpenExtractorModal={onOpenExtractorModal} palette={colors} />;
};

export default Container;
