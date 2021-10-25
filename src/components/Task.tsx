import React from 'react';
import {
  ListItem,
  Paper,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { ITask } from '../interfaces/tasks';
import { ETaskStatus } from '../enums/enums';

const useStyles = makeStyles({
  colorGreen: {
    backgroundColor: '#C8F4C2',
  },
  colorWhite: {
    backgroundColor: '#FFFFFF',
  },
  grid: {
    margin: '5px',
    width: '40vw',
  },
  item: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#AEF3A5',
    },
  },
});

interface IProps {
  task: ITask;
  number: number;
  onChangeStatus: (id: number) => () => void;
  onDeleteTask: (id: number) => (e: React.MouseEvent) => void;
}

function Task(props: IProps) {
  const { task, number, onChangeStatus, onDeleteTask } = props;
  const classes = useStyles();

  return (
    <ListItem>
      <Paper
        role="button"
        onClick={onChangeStatus(task.id)}
        className={classNames({
          [classes.item]: true,
          [classes.colorGreen]: task.status === ETaskStatus.FINISHED,
          [classes.colorWhite]: task.status === ETaskStatus.ACTIVE,
        })}
      >
        <Grid
          container
          direction="row"
          wrap="nowrap"
          spacing={2}
          className={classes.grid}
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              {number}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              {new Date(task.date).toLocaleString()}
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Typography variant="body1" gutterBottom>
              {task.text}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={onDeleteTask(task.id)} size="small">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </ListItem>
  );
}

export default Task;
