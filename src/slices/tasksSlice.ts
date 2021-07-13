import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITask, ITasksState } from '../interfaces/tasks';
import { ETaskStatus } from '../enums/enums';

const initialState: ITasksState = {
  tasks: {},
  ids: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const { id, text, status, date } = action.payload;

      state.tasks[id] = { id, text, status, date };
      state.ids.push(id);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.ids = state.ids.filter((tasksId) => tasksId !== id);
      delete state.tasks[id];
    },
    changeTaskStatus: (state, action: PayloadAction<number>) => {
      const id = action.payload;

      state.tasks[id].status =
        state.tasks[id].status === ETaskStatus.ACTIVE
          ? ETaskStatus.FINISHED
          : ETaskStatus.ACTIVE;
    },
  },
});

export const { addTask, deleteTask, changeTaskStatus } = tasksSlice.actions;

export default tasksSlice.reducer;
