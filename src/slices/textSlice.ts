import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string = '';

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    updateText: (state, action: PayloadAction<string>) => action.payload,
    clearText: () => '',
  },
});

export const { updateText, clearText } = textSlice.actions;

export default textSlice.reducer;
