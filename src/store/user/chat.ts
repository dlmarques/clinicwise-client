import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { ChatState } from '../../models/State';

const initialState: ChatState = {
  selectedChat: null,
} as ChatState;

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectChat: (state, action: PayloadAction<string>) => {
      state.selectedChat = action.payload;
    },
    deselectChat: (state: ChatState) => {
      state.selectedChat = null;
    },
  },
});

export const chatActions = chatSlice.actions;

export const selectChatState = (state: RootState) => state.user;
