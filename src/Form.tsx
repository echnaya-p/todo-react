import React from 'react';
import { Button, TextField, Grid } from '@material-ui/core';
import { generateUniqueID } from './utils/utils';
import { ITask } from './interfaces/tasks';
import { ETaskStatus } from './enums/enums';

interface IProps {
  text: string;
  onUpdateText: (newText: string) => void;
  onClearText: () => void;
  onAddTask: (newTask: ITask) => void;
}

function Form(props: IProps) {
  const { text, onUpdateText, onClearText, onAddTask } = props;

  const handleChangeText = (e: React.ChangeEvent<{ value: unknown }>) => {
    onUpdateText(e.target.value as string);
  };

  const handleAddTask = () => {
    const id = generateUniqueID();

    onAddTask({
      id,
      text,
      status: ETaskStatus.ACTIVE,
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

export default Form;
