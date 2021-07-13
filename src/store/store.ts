import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import textReducer from '../slices/textSlice';
import tasksReducer from '../slices/tasksSlice';
import filterReducer from '../slices/filterSlice';

const store = configureStore({
  reducer: {
    text: textReducer,
    tasks: tasksReducer,
    filter: filterReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
