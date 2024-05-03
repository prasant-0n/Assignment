// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import formReducer from '../features/formSlice';

export const Store = configureStore({
  reducer: {
    form: formReducer
  }
});

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>;
