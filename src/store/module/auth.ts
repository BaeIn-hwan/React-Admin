import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
  name: 'auth',
  initialState: {
    userKey: '',
  },
  reducers: {
    setUserKey(state, { payload }) {
      state.userKey = payload;
    },
  },
});

export const { setUserKey } = auth.actions;

export { auth };
