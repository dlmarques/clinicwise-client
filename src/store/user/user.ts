import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { UserState } from '../../models/State';

const initialState: UserState = {
  name: '',
  email: '',
  role: '',
  lang: 'pt',
  theme: window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light',
} as UserState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    //login user
    loginUser(state, action) {
      const { name, email } = action.payload;

      state.email = email;
      state.name = name;
    },

    //change lang
    changeLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },

    //change theme
    changeTheme(state) {
      if (state.theme === 'dark') {
        state.theme = 'light';
      } else {
        state.theme = 'dark';
      }
      localStorage.setItem('theme', state.theme);
      document.documentElement.setAttribute('data-theme', state.theme);
    },

    setTheme(state, action) {
      state.theme = action.payload;
      localStorage.setItem('theme', action.payload);
      document.documentElement.setAttribute('data-theme', action.payload);
    },
  },
});

export const userActions = userSlice.actions;

export const selectUser = (state: RootState) => state.user;
