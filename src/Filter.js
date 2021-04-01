import React from 'react';
import {filterByOrder, filterByState} from "./constants/constants";
import * as PropTypes from 'prop-types';
import { Select, MenuItem, Grid } from "@material-ui/core";

function Filter(props) {
    const { ids, tasks, order, onUpdateFilteredIds, select, onUpdateSelect, onUpdateOrder } = props;

    const handleFilterTaskByState = (event) => {
        onUpdateSelect(event.target.value);

        if (event.target.value !== filterByState.ALL) {
            onUpdateFilteredIds(ids.filter((id) => tasks[id].state === event.target.value));
        } else {
            onUpdateFilteredIds(ids);
        }
    };

    const handleFilterTaskByDate = (event) => {
        onUpdateOrder(event.target.value);
    };

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Select value={select} onChange={handleFilterTaskByState}>
                    <MenuItem value={filterByState.ALL}>All tasks</MenuItem>
                    <MenuItem value={filterByState.ACTIVE}>Active tasks</MenuItem>
                    <MenuItem value={filterByState.FINISHED}>Fished tasks</MenuItem>
                </Select>
            </Grid>
            <Grid item>
                <Select value={order} onChange={handleFilterTaskByDate}>
                    <MenuItem value={filterByOrder.NEW}>New first</MenuItem>
                    <MenuItem value={filterByOrder.OLD}>Old first</MenuItem>
                </Select>
            </Grid>
        </Grid>
    );
}

Filter.propTypes = {
    ids: PropTypes.array,
    tasks: PropTypes.object,
    select: PropTypes.string,
    onUpdateFilteredIds: PropTypes.func,
    onUpdateSelect: PropTypes.func,
};

export default Filter;
