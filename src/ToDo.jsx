import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Form from './Form';
import Tasks from './Tasks';
import Filter from './Filter';
import { filterByOrder, filterByState, taskState } from './constants/constants';

export default function ToDo() {
  const [text, setText] = useState('');
  const [ids, setIds] = useState([]);
  const [tasks, setTasks] = useState({});
  const [filteredIds, setFilteredIds] = useState(ids);
  const [select, setSelect] = useState(filterByState.ALL);
  const [order, setOrder] = useState(filterByOrder.NEW);

  const handleUpdateText = (newText) => setText(newText);
  const handleUpdateIds = (newIds) => setIds(newIds);
  const handleUpdateTasks = (newTasks) => setTasks(newTasks);
  const handleUpdateFilteredIds = (newIds) => setFilteredIds(newIds);
  const handleUpdateSelect = (newSelect) => setSelect(newSelect);
  const handleUpdateOrder = (newOrder) => setOrder(newOrder);

  const handleChangeState = (id) => () => {
    setTasks({
      ...tasks,
      [id]: {
        ...tasks[id],
        state:
          tasks[id].state === taskState.ACTIVE
            ? taskState.FINISHED
            : taskState.ACTIVE,
      },
    });
  };

  const handleDeleteTask = (id) => () => {
    const filteredTasks = { ...tasks };

    setIds(ids.filter((tasksId) => tasksId !== id));
    setFilteredIds(filteredIds.filter((tasksId) => tasksId !== id));
    delete filteredTasks[id];
    setTasks(filteredTasks);
  };

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
          ids={ids}
          tasks={tasks}
          select={select}
          filteredIds={filteredIds}
          order={order}
          onUpdateText={handleUpdateText}
          onUpdateIds={handleUpdateIds}
          onUpdateTasks={handleUpdateTasks}
          onUpdateFilteredIds={handleUpdateFilteredIds}
        />
      </Grid>
      <Grid item>
        <Filter
          ids={ids}
          tasks={tasks}
          select={select}
          order={order}
          onUpdateFilteredIds={handleUpdateFilteredIds}
          onUpdateSelect={handleUpdateSelect}
          onUpdateOrder={handleUpdateOrder}
        />
      </Grid>
      {ids.length > 0 && (
        <Grid item>
          <Tasks
            filteredIds={filteredIds}
            tasks={tasks}
            order={order}
            onChangeState={handleChangeState}
            onDeleteTask={handleDeleteTask}
          />
        </Grid>
      )}
    </Grid>
  );
}
