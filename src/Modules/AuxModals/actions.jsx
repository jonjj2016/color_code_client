export const types = {
  ADD_COLOR_MODAL_OPEN: 'ADD_COLOR_MODAL_OPEN',
  ADD_COLOR_MODAL_CLOSE: 'ADD_COLOR_MODAL_CLOSE',
  EXTRACTOR_MODAL_OPEN: 'EXTRACTOR_MODAL_OPEN',
  EXTRACTOR_MODAL_CLOSE: 'EXTRACTOR_MODAL_CLOSE',
  SAVE_PALETTE_MODAL_OPEN: 'SAVE_PALETTE_MODAL_OPEN',
  SAVE_PALETTE_MODAL_CLOSE: 'SAVE_PALETTE_MODAL_CLOSE',
  COPY_MODAL_OPEN: 'COPY_MODAL_OPEN',
  COPY_MODAL_CLOSE: 'COPY_MODAL_CLOSE',
  USER_PALETTE_OPEN: 'USER_PALETTE_OPEN',
  USER_PALETTE_CLOSE: 'USER_PALETTE_CLOSE',
};
export const actions = {
  add_color_modal_open: () => ({ type: types.ADD_COLOR_MODAL_OPEN }),
  add_color_modal_close: () => ({ type: types.ADD_COLOR_MODAL_CLOSE }),
  extractor_modal_open: () => ({ type: types.EXTRACTOR_MODAL_OPEN }),
  extractor_modal_close: () => ({ type: types.EXTRACTOR_MODAL_CLOSE }),
  save_palette_modal_open: () => ({ type: types.SAVE_PALETTE_MODAL_OPEN }),
  save_palette_modal_close: () => ({ type: types.SAVE_PALETTE_MODAL_CLOSE }),
  copy_modal_open: (val) => ({ type: types.COPY_MODAL_OPEN, payload: val }),
  copy_modal_close: () => ({ type: types.COPY_MODAL_CLOSE }),
  userPalett_modal_open: (data) => ({ type: types.USER_PALETTE_OPEN, payload: data }),
  userPalett_modal_close: () => ({ type: types.USER_PALETTE_CLOSE }),
};
