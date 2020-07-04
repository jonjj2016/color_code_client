import { all, call } from 'redux-saga/effects';
import paletteSaga from './Pallete/sagas';
import unsplashSagas from './UnsplashImages/sagas';
import authSaagas from './Auth/sagas';

export default function* () {
  yield all([call(paletteSaga), call(unsplashSagas), call(authSaagas)]);
}
