import { types } from './actions';
const initState = {
  animation: 'push',
  direction: 'left',
  dimmed: true,
  visible: false,
};

export const sideBar = (state = initState, { type, payload }) => {
  switch (type) {
    case types.SIDEBAR_OPEN:
      return { ...state, visible: true };
    case types.SIDEBAR_CLOSE:
      return { ...state, visible: false };
    default:
      return state;
  }
};
