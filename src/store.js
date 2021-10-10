import { configureStore } from '@reduxjs/toolkit';
import settings from './slices/settings';
import modal from './slices/modal';


export const store = configureStore({
  reducer: {
    settings,
    modal,
  },
})