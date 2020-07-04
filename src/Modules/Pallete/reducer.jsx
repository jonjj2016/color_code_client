import { types, ADD_PALETTE_MODE } from './actions';

const initState = {
  palettes: [],
  loading: false,
  error: '',
  palette: null,
  current: '',
  seedColors: [],
  mode: null,
};
export const paletteReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case types.FIND_SUCCESS:
      return { ...state, palettes: payload, loading: false };
    case types.GET_SUCCESS:
      return { ...state, palette: payload, palette: payload, loading: false };
    case types.SET_CURRENT:
      return { ...state, current: payload };
    case types.CREATE_SUCCESS:
      return { ...state, loading: false, palettes: [...state.palettes, payload] };
    case types.PATCH_SUCCESS:
      return { ...state, loading: false, palette: payload, error: false };
    case types.REMOVE_SUCCESS:
      return { ...state, loading: false, error: null };
    case types.LOADING:
      return { ...state, loading: true, palette: null, current: null };
    case ADD_PALETTE_MODE:
      return { ...state, mode: payload };
    case types.FIND_FAILED:
    case types.GET_FAILED:
    case types.PATCH_FAILED:
    case types.CREATE_FAILED:
    case types.REMOVE_FAILED:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
