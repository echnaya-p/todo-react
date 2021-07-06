import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../slices/textSlice';
import tasksReducer from '../slices/tasksSlice';
import filterReducer from '../slices/filterSlice';

export default configureStore({
  reducer: {
    text: textReducer,
    tasks: tasksReducer,
    filter: filterReducer,
  },
  devTools: true,
});
