import { types } from './actions';

const initState = {
  isOpen: false,
  loading: false,
  error: null,
};
export default (state = initState, { type, payload }) => {
  switch (type) {
    case types.OPEN_START:
      return { ...state, isOpen: true, error: null };
    case types.CLOSE_START:
      return { ...state, isOpen: false, error: null };
    case types.CLOSE_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
