import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilterState } from '../interfaces/filter';
import { EFilterByOrder, EFilterByStatus } from '../enums/enums';

const initialState: IFilterState = {
  order: EFilterByOrder.NEW,
  select: EFilterByStatus.ALL,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateOrder: (state, action: PayloadAction<EFilterByOrder>) => {
      state.order = action.payload;
    },
    updateSelect: (state, action: PayloadAction<EFilterByStatus>) => {
      state.select = action.payload;
    },
  },
});

export const { updateOrder, updateSelect } = filterSlice.actions;

export default filterSlice.reducer;
