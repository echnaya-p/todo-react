import React from 'react';
import * as PropTypes from 'prop-types';
import { Button, TextField, Grid } from '@material-ui/core';
import generateUniqueID from './utils/utils';
import { taskStatus } from './constants/constants';

function Form(props) {
  const { text, onUpdateText, onClearText, onAddTask } = props;

  const handleChangeText = (e) => {
    onUpdateText(e.target.value);
  };

  const handleAddTask = () => {
    const id = generateUniqueID();

    onAddTask({
      id,
      text,
      status: taskStatus.ACTIVE,
      date: Date.now(),
    });
    onClearText();
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
  onUpdateText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
};

export default Form;
