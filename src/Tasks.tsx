import React from 'react';
import { List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Task from './components/Task';
import { EFilterByOrder, EFilterByStatus } from './enums/enums';
import { ITasks } from './interfaces/tasks';

interface IProps {
  ids: number[];
  select: EFilterByStatus;
  tasks: ITasks;
  order: EFilterByOrder;
  onChangeStatus: (id: number) => () => void;
  onDeleteTask: (id: number) => (e: React.MouseEvent) => void;
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '40vw',
    margin: '0 auto',
  },
});

function Tasks(props: IProps) {
  const { ids, select, tasks, order, onChangeStatus, onDeleteTask } = props;
  const classes = useStyles();

  const renderList = () => {
    const copyIds = [...ids];

    return copyIds
      .filter((id) => {
        if (select === EFilterByStatus.ALL) {
          return true;
        }

        if (tasks[id].status === select) {
          return true;
        }

        return false;
      })
      .sort((a, b) => (order === EFilterByOrder.NEW ? b - a : a - b))
      .map((id, index) => (
        <Task
          task={tasks[id]}
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
          key={`${id}${tasks[id].text}`}
          number={index + 1}
        />
      ));
  };

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <List>{renderList()}</List>
      </Grid>
    </Grid>
  );
}

export default Tasks;
