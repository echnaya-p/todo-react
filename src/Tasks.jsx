import React from 'react';
import * as PropTypes from 'prop-types';
import { List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Task from './components/Task';
import { filterByOrder, filterByStatus } from './constants/constants';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '40vw',
    margin: '0 auto',
  },
});

function Tasks(props) {
  const { ids, select, tasks, order, onChangeStatus, onDeleteTask } = props;
  const classes = useStyles();

  const renderList = () => {
    const copyIds = [...ids];

    return copyIds
      .filter((id) => {
        if (select === filterByStatus.ALL) {
          return true;
        }

        if (tasks[id].status === select) {
          return true;
        }

        return false;
      })
      .sort((a, b) => (order === filterByOrder.NEW ? b - a : a - b))
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

Tasks.propTypes = {
  tasks: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    status: PropTypes.string,
    date: PropTypes.number,
  }).isRequired,
  order: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  ids: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChangeStatus: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Tasks;
