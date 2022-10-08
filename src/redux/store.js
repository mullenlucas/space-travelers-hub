import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './rocketsSlice';
import missions from './missionsSlice';

const reducer = combineReducers({
  rockets,
  missions,
});

const store = configureStore({
  reducer,
  middleware: [thunk, logger],
});

export default store;
