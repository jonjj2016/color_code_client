import { types } from './actions';

const initState = {
  authenticated: false,
  user: null,
  loading: false,
  error: null,
};
export default (state = initState, { type, payload }) => {
  //console.log(types);
  switch (type) {
    case types.LOGOUT_SUCCESS:
      return { ...state, authenticated: false, user: null, loading: false, error: null };
    case types.PATCH_SUCCESS:
      console.log(payload.data);
      return { ...state, loading: false, user: { ...state.user, liked_palettes: payload.data } };
    case types.REAUTHENTICATE_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.REGISTER_SUCCESS:
      return { ...state, authenticated: true, user: payload, loading: false, error: null };
    case types.LOADING:
      return { ...state, loading: true };
    case types.REAUTHENTICATE_FAILED:
    case types.LOGIN_FAILED:
    case types.PATCH_FAILED:
    case types.REGISTER_FAILED:
      return { ...state, loading: true, error: payload };
    default:
      return state;
  }
};
