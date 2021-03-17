import React  from 'react';
import {taskState} from "./constants/constants";
import * as PropTypes from "prop-types";

function Tasks(props) {
    const { ids, filteredIds, tasks, onUpdateIds, onUpdateTasks, onUpdateFilteredIds } = props;

    const handleChangeState = (id) => () => {
        onUpdateTasks({
            ...tasks,
            [id]: {
                ...tasks[id],
                state: tasks[id].state === taskState.ACTIVE ? taskState.FINISHED : taskState.ACTIVE
            }
        });
    };

    const handleDelete = (id) => () => {
        onUpdateIds(ids.filter((tasksId) => tasksId !== id));
        onUpdateFilteredIds(filteredIds.filter((tasksId) => tasksId !== id));
        const filteredTasks = { ...tasks };
        delete filteredTasks[id];
        onUpdateTasks(filteredTasks);
    };

    const renderList = () => (
        filteredIds.map((id) => (
            <li key={`${id}${tasks[id].text}`}>
                <div role="button" onClick={handleChangeState(id)}>
                    {tasks[id].state === taskState.FINISHED ? <s>{tasks[id].text}</s> : tasks[id].text}
                    <button onClick={handleDelete(id)}>x</button>
                </div>
            </li>
        ))
    );

    return (
        <ul>
            {renderList()}
        </ul>
    );
}

Tasks.propTypes = {
    ids: PropTypes.array,
    tasks: PropTypes.object,
    filteredIds: PropTypes.array,
    onUpdateIds: PropTypes.func,
    onUpdateTasks: PropTypes.func,
    onUpdateFilteredIds: PropTypes.func,
};

export default Tasks;
