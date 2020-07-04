import { types } from './actions';
import { images } from '../../images';

const initState = {
  images: [],
  current: null,
  loading: false,
  error: null,
  colors: null,
};
export const unsplashImages = (state = initState, { payload, type }) => {
  switch (type) {
    case types.GET_SUCCESS:
      return { ...state, current: payload, loading: false, error: null };
    case types.FIND_SUCCESS:
      console.log(payload);
      return { ...state, loading: false, error: null, images: payload };
    case types.LOADING:
      return { ...state, loading: true };
    case types.FIND_FALED:
      console.log(payload);
      return { ...state, loading: false, error: payload };
    case types.SET_CURRENT:
      return { ...state, current: state.images.find((image) => image.id === payload) };
    case types.SET_COLORS_START:
      return { ...state, loading: false, colors: payload };

    default:
      return state;
  }
};
