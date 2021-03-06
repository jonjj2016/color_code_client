import { takeLatest, put, call, all } from 'redux-saga/effects';
import { types, actions } from './actions';
import history from '../../Utils/History';
import { userService as client, myClient } from '../Feathers';
import { actions as modal } from '../AuthModal/actions';
import localStorage from 'redux-persist/es/storage';

function* on_patch_user({ payload }) {
  const { id, data } = payload;
  console.log(payload);
  try {
    yield put(actions.loading());
    const res = yield client.patch(id, { liked_palettes: data });

    yield put(actions.patch_success(payload));
  } catch (err) {
    yield put(actions.patch_failed(err));
  }
}

function* patch_user() {
  yield takeLatest(types.PATCH_START, on_patch_user);
}
////////////////////////////////////////////////Create ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_logout() {
  try {
    yield put(actions.loading());
    yield localStorage.removeItem('feathers-jwt');
    yield put(actions.logout_success());
  } catch (err) {
    yield put(actions.logout_failed(err));
  }
}

function* logout() {
  yield takeLatest(types.LOGOUT_START, on_logout);
}
////////////////////////////////////////////////FIND ///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function* on_login({ payload }) {
  try {
    yield put(actions.loading());

    const res = yield myClient.authenticate({
      strategy: 'local',
      ...payload,
    });
    yield put(actions.login_success(res.user));
    yield put(modal.close_start());
  } catch (err) {
    yield put(actions.login_failed(err));
  }
}

function* login() {
  yield takeLatest(types.LOGIN_START, on_login);
}

function* on_reauthenticate() {
  try {
    yield put(actions.loading());

    const res = yield myClient.reAuthenticate();
    yield put(actions.reauthenticate_success(res.user));
    yield put(modal.close_start());
  } catch (err) {
    yield put(actions.reauthenticate_failed(err));
  }
}
function* reauthenticate() {
  yield takeLatest(types.REAUTHENTICATE_START, on_reauthenticate);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function* on_register({ payload }) {
  try {
    yield put(actions.loading());
    const res = yield client.create(payload);
    yield put(actions.register_success(res));
    yield put(modal.close_start());
  } catch (err) {
    yield put(actions.register_failed(err));
  }
}

function* register() {
  yield takeLatest(types.REGISTER_START, on_register);
}

export default function* () {
  yield all([call(register), call(login), call(reauthenticate), call(logout), call(patch_user)]);
}
