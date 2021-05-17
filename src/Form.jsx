import React from 'react';
import * as PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@material-ui/core';
import generateUniqueID from './utils/utils';
import { taskState, filterByOrder } from './constants/constants';

function Form(props) {
  const {
    text,
    tasks,
    ids,
    order,
    select,
    filteredIds,
    onUpdateIds,
    onUpdateTasks,
    onUpdateText,
    onUpdateFilteredIds,
  } = props;

  const handleChangeText = (e) => {
    onUpdateText(e.target.value);
  };

  const handleAddTask = () => {
    const id = generateUniqueID();

    if (select !== taskState.FINISHED) {
      onUpdateFilteredIds([id, ...filteredIds]);
    }

    if (order === filterByOrder.NEW) {
      onUpdateIds([id, ...ids]);
      onUpdateTasks({
        [id]: {
          id,
          text,
          state: taskState.ACTIVE,
          date: new Date(),
        },
        ...tasks,
      });
    } else {
      onUpdateIds([...ids, id]);
      onUpdateTasks({
        ...tasks,
        [id]: {
          id,
          text,
          state: taskState.ACTIVE,
          date: new Date(),
        },
      });
    }

    onUpdateText('');
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          size="small"
          onChange={handleChangeText}
          value={text}
        />
      </Grid>
      <Grid item>
        <Button onClick={handleAddTask} variant="contained" color="primary">
          Add
        </Button>
      </Grid>
    </Grid>
  );
}

Form.propTypes = {
  text: PropTypes.string.isRequired,
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  tasks: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  filteredIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  select: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onUpdateIds: PropTypes.func.isRequired,
  onUpdateTasks: PropTypes.func.isRequired,
  onUpdateText: PropTypes.func.isRequired,
  onUpdateFilteredIds: PropTypes.func.isRequired,
};

export default Form;
