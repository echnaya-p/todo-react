import React from 'react';
import {filterByOrder, filterByState} from "./constants/constants";
import * as PropTypes from 'prop-types';

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
        <div>
            <select value={select} onChange={handleFilterTaskByState}>
                <option value={filterByState.ALL}>All tasks</option>
                <option value={filterByState.ACTIVE}>Active tasks</option>
                <option value={filterByState.FINISHED}>Fished tasks</option>
            </select>
            <select value={order} onChange={handleFilterTaskByDate}>
                <option value={filterByOrder.NEW}>New first</option>
                <option value={filterByOrder.OLD}>Old first</option>
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
