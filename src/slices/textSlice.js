import { createSlice } from '@reduxjs/toolkit';

export const textSlice = createSlice({
  name: 'text',
  initialState: '',
  reducers: {
    updateText: (state, action) => action.payload,
    clearText: () => '',
  },
});

export const { updateText, clearText } = textSlice.actions;
export default textSlice.reducer;
