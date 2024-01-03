import { Reducer } from '@reduxjs/toolkit';

export interface GlobalState {
  user: Reducer<UserState>;
  chat: Reducer<ChatState>;
}

export interface UserState {
  lang: string;
  theme: string;
}

export interface ChatState {
  selectedChat: string | null;
}
