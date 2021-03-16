import React from 'react';
import {taskState} from "./constants/constants";

export default function Filter(props) {
    const { ids, tasks, onUpdateFilteredIds, select, onUpdateSelect } = props;

    const handleFilterTask = (event) => {
        onUpdateSelect(event.target.value);
        if (event.target.value !== 'all') {
            onUpdateFilteredIds(ids.filter((id) => tasks[id].state === event.target.value));
        } else {
            onUpdateFilteredIds(ids);
        }
    };

    return (
        <select value={select} onChange={handleFilterTask}>
            <option value="all">All tasks</option>
            <option value={taskState.ACTIVE}>Active tasks</option>
            <option value={taskState.FINISHED}>Fished tasks</option>
        </select>
    );
}