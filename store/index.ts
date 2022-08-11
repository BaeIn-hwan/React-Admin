import { configureStore, createSlice } from '@reduxjs/toolkit';

import { auth } from '@/store/module/auth';
import { alert } from '@/store/module/common';

const login = createSlice({
  name: 'login',
  initialState: {
    userName: '',
    userKey: '',
  },
  reducers: {
    setLoginInfo(state, action) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setLoginInfo } = login.actions;

export default configureStore({
  reducer: {
    login: login.reducer,
    alert: alert.reducer,
    auth: auth.reducer,
  },
});
