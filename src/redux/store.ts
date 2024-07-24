import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './slices/imagesSlice';

const store = configureStore({
  reducer: {
    allImages: imagesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
