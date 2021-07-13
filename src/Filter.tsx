import React from 'react';
import { Select, MenuItem, Grid } from '@material-ui/core';
import { EFilterByOrder, EFilterByStatus } from './enums/enums';

interface IProps {
  select: EFilterByStatus;
  order: EFilterByOrder;
  onUpdateSelect: (e: React.ChangeEvent<{ value: unknown }>) => void;
  onUpdateOrder: (e: React.ChangeEvent<{ value: unknown }>) => void;
}

function Filter(props: IProps) {
  const { order, select, onUpdateSelect, onUpdateOrder } = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Select value={select} onChange={onUpdateSelect}>
          <MenuItem value={EFilterByStatus.ALL}>All tasks</MenuItem>
          <MenuItem value={EFilterByStatus.ACTIVE}>Active tasks</MenuItem>
          <MenuItem value={EFilterByStatus.FINISHED}>Finished tasks</MenuItem>
        </Select>
      </Grid>
      <Grid item>
        <Select value={order} onChange={onUpdateOrder}>
          <MenuItem value={EFilterByOrder.NEW}>New first</MenuItem>
          <MenuItem value={EFilterByOrder.OLD}>Old first</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
}

export default Filter;
