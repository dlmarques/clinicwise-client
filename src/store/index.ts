import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/user';
import { chatSlice } from './user/chat';
import { GlobalState } from '../models/State';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    chat: chatSlice.reducer,
  } as GlobalState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
