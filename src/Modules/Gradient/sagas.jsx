import { takeLatest, put, call, all } from 'redux-saga/effects';
import { types, actions } from './actions';
import history from '../../Utils/History';
import { gradientService as client } from '../Feathers';
import { actions as modalActions } from '../AuxModals/actions';

function* on_patch_gradient({ payload }) {
  try {
    yield put(actions.loading());
    console.log(payload);

    const res = yield client.patch(payload._id, payload.palette);

    yield put(actions.find_start());
    yield put(actions.patch_success(res));
    yield put(modalActions.save_palette_modal_close());
    history.goBack();
  } catch (err) {
    yield put(actions.patch_failed(err));
  }
}

function* patch_gradient() {
  yield takeLatest(types.PATCH_START, on_patch_gradient);
}
////////////////////////////////////////////////Create ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_create_gradient({ payload }) {
  try {
    // if (!window.localStorage.palettes) {
    //   on_find_gradients();
    // }
    yield put(actions.loading());
    const res = yield client.create(payload);
    yield put(modalActions.save_palette_modal_close());

    yield put(actions.create_success(res));
    history.push('/');
  } catch (err) {
    yield put(actions.create_failed(err));
  }
}

function* create_gradient() {
  yield takeLatest(types.CREATE_START, on_create_gradient);
}

////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_get_gradient({ payload }) {
  try {
    yield put(actions.loading());
    const res = yield client.get(payload);
    yield put(actions.get_success(res));
  } catch (err) {
    yield put(actions.get_failed(err));
  }
}

function* get_gradient() {
  yield takeLatest(types.GET_START, on_get_gradient);
}
////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_find_gradients() {
  try {
    const res = yield client.find({
      query: {
        $limit: 70,
        $sort: {
          createdAt: -1,
        },
      },
    });
    yield put(actions.loading());
    const palettes = yield JSON.parse(window.localStorage.getItem('palettes'));
    if (!palettes || palettes.length === 0) {
      yield localStorage.setItem('palettes', JSON.stringify(seedColors));
    } else {
      yield put(actions.find_success(seedColors));
      yield put(actions.find_success(res.data || palettes || seedColors));
    }
  } catch (err) {
    yield put(actions.find_failed(err));
  }
}

function* find_gradients() {
  yield takeLatest(types.FIND_START, on_find_gradients);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function* on_remove_gradient({ payload }) {
  try {
    yield put(actions.loading());
    yield client.remove(payload);
    history.push('/');
    yield put(actions.remove_success());
  } catch (err) {
    yield put(actions.remove_failed(err));
  }
}

function* remove_gradient() {
  yield takeLatest(types.REMOVE_START, on_remove_gradient);
}

export default function* () {
  yield all([call(find_gradients), call(get_gradient), call(create_gradient), call(patch_gradient), call(remove_gradient)]);
}