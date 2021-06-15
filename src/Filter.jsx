import React from 'react';
import * as PropTypes from 'prop-types';
import { Select, MenuItem, Grid } from '@material-ui/core';
import { filterByOrder, filterByStatus } from './constants/constants';

function Filter(props) {
  const { order, select, onUpdateSelect, onUpdateOrder } = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Select value={select} onChange={onUpdateSelect}>
          <MenuItem value={filterByStatus.ALL}>All tasks</MenuItem>
          <MenuItem value={filterByStatus.ACTIVE}>Active tasks</MenuItem>
          <MenuItem value={filterByStatus.FINISHED}>Finished tasks</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Select value={order} onChange={onUpdateOrder}>
          <MenuItem value={filterByOrder.NEW}>New first</MenuItem>
          <MenuItem value={filterByOrder.OLD}>Old first</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
}

Filter.propTypes = {
  select: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  onUpdateOrder: PropTypes.func.isRequired,
  onUpdateSelect: PropTypes.func.isRequired,
};

export default Filter;
