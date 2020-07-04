import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { sideBar } from './SideBar/Reducers';
import { paletteReducer } from './Pallete/reducer';
import { unsplashImages } from './UnsplashImages/reducers';
import authReducers from './Auth/reducer';
import authModal from './AuthModal/Reducers';
import { connectRouter } from 'connected-react-router';
import auxModals from './AuxModals/reducers';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['router'],
};
const rootReducer = (history) =>
  combineReducers({
    sideBar,
    paletteReducer,
    unsplashImages,
    logs: authReducers,
    authModal,
    auxModals,
    router: connectRouter(history),
  });
const persistedReducers = (history) => persistReducer(persistConfig, rootReducer(history));

export default persistedReducers;
