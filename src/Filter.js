import React from 'react';
import {taskState} from "./constants/constants";
import * as PropTypes from 'prop-types';

function Filter(props) {
    const { ids, tasks, order, onUpdateFilteredIds, select, onUpdateSelect, onUpdateOrder } = props;

    const handleFilterTask = (event) => {
        onUpdateSelect(event.target.value);

        if (event.target.value !== 'all') {
            onUpdateFilteredIds(ids.filter((id) => tasks[id].state === event.target.value));
        } else {
            onUpdateFilteredIds(ids);
        }
    };

    const handleFilterOrder = (event) => {
        onUpdateOrder(event.target.value);
    };

    return (
        <div>
            <select value={select} onChange={handleFilterTask}>
                <option value="all">All tasks</option>
                <option value={taskState.ACTIVE}>Active tasks</option>
                <option value={taskState.FINISHED}>Fished tasks</option>
            </select>
            <select value={order} onChange={handleFilterOrder}>
                <option value="new">New first</option>
                <option value="old">Old first</option>
            </select>
        </div>
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
