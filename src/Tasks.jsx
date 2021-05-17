import React from 'react';
import * as PropTypes from 'prop-types';
import { List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Item from './components/Item';
import { filterByOrder } from './constants/constants';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '40vw',
    margin: '0 auto',
  },
});

function Tasks(props) {
  const { filteredIds, tasks, order, onChangeState, onDeleteTask } = props;
  const classes = useStyles();

  const renderList = () =>
    filteredIds
      .sort((a, b) => (order === filterByOrder.NEW ? b - a : a - b))
      .map((id, index) => (
        <Item
          task={tasks[id]}
          onChangeState={onChangeState}
          onDeleteTask={onDeleteTask}
          key={`${id}${tasks[id].text}`}
          number={index + 1}
        />
      ));

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
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
  order: PropTypes.string.isRequired,
  filteredIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChangeState: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Tasks;
