import React from 'react';
import { generateUniqueID } from './utils/utils';
import { taskState, filterByOrder } from "./constants/constants";
import * as PropTypes from 'prop-types';
import { Button, TextField } from "@material-ui/core";

function Form(props) {
    const { text, tasks, ids, order, onUpdateIds, onUpdateTasks, onUpdateText, select, filteredIds, onUpdateFilteredIds } = props;

    const handleChangeText = (e) => {
        onUpdateText(e.target.value);
    };

    const handleAddTask = () => {
        const id = generateUniqueID();

        if (select !== taskState.FINISHED) {
            onUpdateFilteredIds([id, ...filteredIds]);
        }

        if (order === filterByOrder.NEW) {
            onUpdateIds([ id, ...ids ]);
            onUpdateTasks({ [id]: { id, text, state: taskState.ACTIVE, date: new Date() }, ...tasks });
        } else {
            onUpdateIds([ ...ids, id ]);
            onUpdateTasks({ ...tasks, [id]: { id, text, state: taskState.ACTIVE, date: new Date() } });
        }

        onUpdateText('');
    };

    return (
        <div>
            <TextField id="outlined-basic" variant="outlined" type="text" size="small" onChange={handleChangeText} value={text}/>
            <Button onClick={handleAddTask} variant="contained" color="primary">Add</Button>
        </div>
    );
}

Form.propTypes = {
    text: PropTypes.string,
    ids: PropTypes.array,
    tasks: PropTypes.object,
    filteredIds: PropTypes.array,
    select: PropTypes.string,
    onUpdateIds: PropTypes.func,
    onUpdateTasks: PropTypes.func,
    onUpdateText: PropTypes.func,
    onUpdateFilteredIds: PropTypes.func,
};

export default Form;
