import { createSlice } from '@reduxjs/toolkit';
import { taskStatus } from '../constants/constants';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: {},
    ids: [],
  },
  reducers: {
    addTask: (state, action) => {
      const { id, text, status, date } = action.payload;

      state.tasks[id] = { id, text, status, date };
      state.ids.push(id);
    },
    deleteTask: (state, action) => {
      const id = action.payload;

      state.ids = state.ids.filter((tasksId) => tasksId !== id);
      delete state.tasks[id];
    },
    changeTaskStatus: (state, action) => {
      const id = action.payload;

      state.tasks[id].status =
        state.tasks[id].status === taskStatus.ACTIVE
          ? taskStatus.FINISHED
          : taskStatus.ACTIVE;
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
