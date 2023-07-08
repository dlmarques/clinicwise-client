import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

interface UserState {
  lang: string;
}

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

export const { changeLang } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
