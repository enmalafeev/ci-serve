import { createSlice } from '@reduxjs/toolkit';

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    settings: null,
  },
  reducers: {
    setSettings: (state, { payload }) => {
      state.settings = payload;
    },
  },
});

export const { actions } = settingsSlice;
export default settingsSlice.reducer;