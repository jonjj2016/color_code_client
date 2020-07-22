import { types } from './actions';

const initState = {
  extractor_modal_open: false,
  add_color_modal_open: false,
  save_palette_modal_open: false,
  copy_modal_open: false,
  user_palette_open: { isOpen: false, data: null },
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case types.USER_PALETTE_OPEN:
      return { ...state, user_palette_open: { data: payload, isOpen: true } };
    case types.USER_PALETTE_CLOSE:
      return { ...state, user_palette_open: { isOpen: false, data: null } };

    case types.EXTRACTOR_MODAL_OPEN:
      return { ...state, extractor_modal_open: true };
    case types.EXTRACTOR_MODAL_CLOSE:
      return { ...state, extractor_modal_open: false };
    case types.SAVE_PALETTE_MODAL_OPEN:
      return { ...state, save_palette_modal_open: true };
    case types.SAVE_PALETTE_MODAL_CLOSE:
      return { ...state, save_palette_modal_open: false };
    case types.ADD_COLOR_MODAL_OPEN:
      return { ...state, add_color_modal_open: true };
    case types.ADD_COLOR_MODAL_CLOSE:
      return { ...state, add_color_modal_open: false };
    case types.COPY_MODAL_OPEN:
      return { ...state, copy_modal_open: payload };
    case types.COPY_MODAL_CLOSE:
      return { ...state, copy_modal_open: false };
    default:
      return state;
  }
};
