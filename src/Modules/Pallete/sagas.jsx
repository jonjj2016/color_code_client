import { takeLatest, put, call, all } from 'redux-saga/effects';
import { types, actions } from './actions';
import history from '../../Utils/History';
import seedColors from '../../Utils/seedColors2';
import { paletteService as client } from '../Feathers';
import { actions as modalActions } from '../AuxModals/actions';

function* on_patch_palette({ payload }) {
  try {
    yield put(actions.loading());

    const res = yield client.patch(payload._id, payload.palette);
    // console.log(res);

    // yield put(actions.find_start());
    yield put(actions.patch_success(res));
    yield put(modalActions.save_palette_modal_close());
    history.goBack();
  } catch (err) {
    yield put(actions.patch_failed(err));
  }
}

function* patch_palette() {
  yield takeLatest(types.PATCH_START, on_patch_palette);
}
////////////////////////////////////////////////Create ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_create_palette({ payload }) {
  try {
    yield put(actions.loading());
    console.log(payload);

    const res = yield client.create(payload);
    yield put(modalActions.save_palette_modal_close());

    yield put(actions.create_success(res));
    history.push('/');
  } catch (err) {
    yield put(actions.create_failed(err));
  }
}

function* create_palette() {
  yield takeLatest(types.CREATE_START, on_create_palette);
}

////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_get_palette({ payload }) {
  try {
    yield put(actions.loading());
    const res = yield client.get(payload);
    yield put(actions.get_success(res));
  } catch (err) {
    yield put(actions.get_failed(err));
  }
}

function* get_palette() {
  yield takeLatest(types.GET_START, on_get_palette);
}
////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_find_palettes() {
  try {
    yield put(actions.loading());
    const res = yield client.find({
      query: {
        $limit: 70,
        $sort: {
          createdAt: -1,
        },
      },
    });

    // const palettes = yield JSON.parse(window.localStorage.getItem('palettes'));
    // if (!palettes || palettes.length === 0) {
    //   yield localStorage.setItem('palettes', JSON.stringify(seedColors));
    // } else {
    //   yield put(actions.find_success(seedColors));
    // }
    yield put(actions.find_success(res.data));
  } catch (err) {
    yield put(actions.find_failed(err));
  }
}

function* find_palettes() {
  yield takeLatest(types.FIND_START, on_find_palettes);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function* on_remove_palette({ payload }) {
  console.log(payload);
  try {
    yield put(actions.loading());
    yield client.remove(payload);
    yield client.find_palettes();
    history.push('/');
    yield put(actions.remove_success());
  } catch (err) {
    yield put(actions.remove_failed(err));
  }
}

function* remove_palette() {
  yield takeLatest(types.REMOVE_START, on_remove_palette);
}

export default function* () {
  yield all([call(find_palettes), call(get_palette), call(create_palette), call(patch_palette), call(remove_palette)]);
}
