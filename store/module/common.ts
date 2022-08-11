import { createSlice } from '@reduxjs/toolkit';

const alert = createSlice({
  name: 'alert',
  initialState: {
    isOpen: false,
    isBackground: true,
    isBackgroundClose: true,
    buttonName: '취소',
  },
  reducers: {
    setAlertClose(state, { payload }) {
      state.isOpen = payload;
    },
  },
});

export const { setAlertClose } = alert.actions;

export { alert };
