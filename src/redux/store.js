import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rockets from './rocketsSlice';

const store = configureStore({
  reducer: {
    rockets,
  },
  middleware: [thunk, logger],
});

export default store;
