import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Form from './Form';
import Tasks from './Tasks';
import Filter from './Filter';
import { updateSelect, updateOrder } from './slices/filterSlice';
import { addTask, deleteTask, changeTaskStatus } from './slices/tasksSlice';
import { updateText, clearText } from './slices/textSlice';

function ToDo() {
  const text = useSelector((state) => state.text);
  const ids = useSelector((state) => state.tasks.ids);
  const tasks = useSelector((state) => state.tasks.tasks);
  const select = useSelector((state) => state.filter.select);
  const order = useSelector((state) => state.filter.order);
  const dispatch = useDispatch();

  const handleUpdateText = (newText) => dispatch(updateText(newText));
  const handleClearText = () => dispatch(clearText());
  const handleAddTask = (newTask) => dispatch(addTask(newTask));
  const handleDeleteTask = (id) => (e) => {
    e.stopPropagation();
    dispatch(deleteTask(id));
  };
  const handleChangeStatus = (id) => () => {
    dispatch(changeTaskStatus(id));
  };
  const handleUpdateSelect = (e) => dispatch(updateSelect(e.target.value));
  const handleUpdateOrder = (e) => dispatch(updateOrder(e.target.value));

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
          ids={ids}
          tasks={tasks}
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
