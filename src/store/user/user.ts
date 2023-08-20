import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { UserState } from '../../models/State';

const initialState: UserState = {
  lang: 'pt',
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
