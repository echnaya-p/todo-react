import * as React from 'react';
import { Grid } from '@material-ui/core';
import Form from './Form';
import Tasks from './Tasks';
import Filter from './Filter';
import { updateSelect, updateOrder } from './slices/filterSlice';
import { addTask, deleteTask, changeTaskStatus } from './slices/tasksSlice';
import { updateText, clearText } from './slices/textSlice';
import { ITask } from './interfaces/tasks';
import { useAppDispatch, useAppSelector } from './store/store';
import { EFilterByOrder, EFilterByStatus } from './enums/enums';

function ToDo() {
  const text = useAppSelector((state) => state.text);
  const ids = useAppSelector((state) => state.tasks.ids);
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const select = useAppSelector((state) => state.filter.select);
  const order = useAppSelector((state) => state.filter.order);
  const dispatch = useAppDispatch();

  const handleUpdateText = (newText: string) => dispatch(updateText(newText));
  const handleClearText = () => dispatch(clearText());
  const handleAddTask = (newTask: ITask) => dispatch(addTask(newTask));
  const handleDeleteTask = (id: number) => (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteTask(id));
  };
  const handleChangeStatus = (id: number) => () => {
    dispatch(changeTaskStatus(id));
  };
  const handleUpdateSelect = (e: React.ChangeEvent<{ value: unknown }>) =>
    dispatch(updateSelect(e.target.value as EFilterByStatus));
  const handleUpdateOrder = (e: React.ChangeEvent<{ value: unknown }>) =>
    dispatch(updateOrder(e.target.value as EFilterByOrder));

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Form
          text={text}
          onUpdateText={handleUpdateText}
          onClearText={handleClearText}
          onAddTask={handleAddTask}
        />
      </Grid>
      <Grid item>
        <Filter
          select={select}
          order={order}
          onUpdateSelect={handleUpdateSelect}
          onUpdateOrder={handleUpdateOrder}
        />
      </Grid>
      {ids.length > 0 && (
        <Grid item>
          <Tasks
            ids={ids}
            select={select}
            tasks={tasks}
            order={order}
            onChangeStatus={handleChangeStatus}
            onDeleteTask={handleDeleteTask}
          />
        </Grid>
      )}
    </Grid>
  );
}

export default ToDo;
