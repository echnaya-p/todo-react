import React from 'react';
import { generateUniqueID } from './utils/utils';
import {taskState} from "./constants/constants";

export default function Form(props) {
    const { text, tasks, ids, onUpdateIds, onUpdateTasks, onUpdateText, select, filteredIds, onUpdateFilteredIds } = props;

    const handleChange = (e) => {
        onUpdateText(e.target.value);
    };

    const handleAdd = () => {
        const id = generateUniqueID();
        onUpdateIds([ id, ...ids ]);
        if (select !== taskState.FINISHED) {
            onUpdateFilteredIds([id, ...filteredIds]);
        }
        onUpdateTasks({ [id]: { id, text, state: taskState.ACTIVE }, ...tasks });
        onUpdateText('');
    };

    return (
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}