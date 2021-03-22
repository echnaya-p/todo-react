import React  from 'react';
import {taskState} from "./constants/constants";
import * as PropTypes from "prop-types";

function Tasks(props) {
    const { ids, filteredIds, tasks, order, onUpdateIds, onUpdateTasks, onUpdateFilteredIds } = props;

    const handleChangeState = (id) => () => {
        onUpdateTasks({
            ...tasks,
            [id]: {
                ...tasks[id],
                state: tasks[id].state === taskState.ACTIVE ? taskState.FINISHED : taskState.ACTIVE
            }
        });
    };

    const handleDeleteTask = (id) => () => {
        const filteredTasks = { ...tasks };

        onUpdateIds(ids.filter((tasksId) => tasksId !== id));
        onUpdateFilteredIds(filteredIds.filter((tasksId) => tasksId !== id));
        delete filteredTasks[id];
        onUpdateTasks(filteredTasks);
    };

    const compare = (a, b) => {
        if (order === "new" ) {
        return b - a;
        }

        return a - b;
    };

    const renderList = () => (
        filteredIds.sort(compare).map((id) => (
            <li key={`${id}${tasks[id].text}`}>
                <div role="button" onClick={handleChangeState(id)}>
                    <span>{tasks[id].date.toLocaleString()}</span>
                    <span>
                        {tasks[id].state === taskState.FINISHED ? <s>{tasks[id].text}</s> : tasks[id].text}
                    </span>
                    <button onClick={handleDeleteTask(id)}>x</button>
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
