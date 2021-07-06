import { createSlice } from '@reduxjs/toolkit';
import { filterByOrder, filterByStatus } from '../constants/constants';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    order: filterByOrder.NEW,
    select: filterByStatus.ALL,
  },
  reducers: {
    updateOrder: (state, action) => {
      state.order = action.payload;
    },
    updateSelect: (state, action) => {
      state.select = action.payload;
    },
  },
});

export const { updateOrder, updateSelect } = filterSlice.actions;

export default filterSlice.reducer;
