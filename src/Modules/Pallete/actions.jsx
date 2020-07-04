import { autoTypeGen } from '../../Hooks/myTypes';
export const [types, actions] = autoTypeGen('palette');
export const ADD_PALETTE_MODE = 'ADD_PALETTE_MODE';
export const add_palette_mode = (payload) => {
  return { type: ADD_PALETTE_MODE, payload: payload };
};
// export const [types, actions] = autoTypeGen('palette', 'REGISTER', 'LOGIN', true);
