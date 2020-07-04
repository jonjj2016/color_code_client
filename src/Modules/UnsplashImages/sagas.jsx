import { takeLatest, put, call, all } from 'redux-saga/effects';
import { types, actions } from './actions';
import axios from 'axios';

const apiRoot = 'https://api.unsplash.com';
const key = 'RMmuCIYQ-BDOXlsbq3P_cCaIhBSPJOsSsX4A8FzrMCo';
function* on_patch_image({ payload }) {
  try {
    yield put(actions.loading());
  } catch (err) {
    yield put(actions.patch_failed(err));
  }
}

function* patch_image() {
  yield takeLatest(types.PATCH_START, on_patch_image);
}
////////////////////////////////////////////////Create ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_create_image({ payload }) {
  try {
    yield put(actions.loading());
  } catch (err) {
    yield put(actions.create_failed(err));
  }
}

function* create_image() {
  yield takeLatest(types.CREATE_START, on_create_image);
}

////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_get_image({ payload }) {
  try {
    yield put(actions.loading());
  } catch (err) {
    yield put(actions.get_failed(err));
  }
}

function* get_image() {
  yield takeLatest(types.GET_START, on_get_image);
}
////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_find_images() {
  const accessKey = process.env.REACT_APP_ACCESSKEY;
  try {
    yield put(actions.loading());
    const res = yield axios.get(`${apiRoot}search/photos?page=1&query=${''}&client_id=RMmuCIYQ-BDOXlsbq3P_cCaIhBSPJOsSsX4A8FzrMCo&count=12`);
    // const res = yield axios.get(`${apiRoot}/photos/random?client_id=RMmuCIYQ-BDOXlsbq3P_cCaIhBSPJOsSsX4A8FzrMCo&count=12`);
    console.log(res);
    //const res = yield axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=12`);

    yield put(actions.find_success(res.data));
  } catch (err) {
    yield put(actions.find_failed(err));
    console.log(err);
  }
}

function* find_images() {
  yield takeLatest(types.FIND_START, on_find_images);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function* on_remove_image({ payload }) {
  try {
    yield put(actions.loading());
  } catch (err) {
    yield put(actions.remove_failed(err));
  }
}

function* remove_image() {
  yield takeLatest(types.REMOVE_START, on_remove_image);
}

export default function* () {
  yield all([call(find_images), call(get_image), call(create_image), call(patch_image), call(remove_image)]);
}