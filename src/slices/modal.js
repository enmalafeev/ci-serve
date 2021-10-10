import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isVisible: false,
  },
  reducers: {
    changeVisibilty: (state, { payload }) => {
      state.isVisible = payload;
    },
  },
});

export const { actions } = modalSlice;
export default modalSlice.reducer;