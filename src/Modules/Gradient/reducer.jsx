import { types, ADD_PALETTE_MODE } from './actions';

const initState = {
  gradients: [],
  loading: false,
  error: '',
  gradient: null,
  current: '',
  mode: null,
};
export const paletteReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.FIND_SUCCESS:
      return { ...state, gradients: payload, loading: false };
    case types.GET_SUCCESS:
      return { ...state, gradient: payload, loading: false };
    case types.SET_CURRENT:
      return { ...state, current: payload };
    case types.CREATE_SUCCESS:
      return { ...state, loading: false, gradients: [...state.gradient, payload] };
    case types.PATCH_SUCCESS:
      return { ...state, loading: false, gradient: payload, error: false };
    case types.REMOVE_SUCCESS:
      return { ...state, loading: false, error: null };
    case types.LOADING:
      return { ...state, loading: true, gradient: null, current: null };
    case ADD_PALETTE_MODE:
      return { ...state, mode: payload };
    default:
      return state;
  }
};
