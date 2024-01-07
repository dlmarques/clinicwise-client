import { Reducer } from '@reduxjs/toolkit';

export interface GlobalState {
  user: Reducer<UserState>;
  chat: Reducer<ChatState>;
}

export interface UserState {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  role: string;
  lang: string;
  theme: string;
}

export interface ChatState {
  selectedChat: string | null;
}
