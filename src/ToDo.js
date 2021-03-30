import React, {useState} from 'react';
import Form from './Form.js';
import Tasks from './Tasks.js';
import Filter from "./Filter.js";
import {filterByOrder, filterByState} from "./constants/constants";

export default function ToDo() {
    const [ text, setText ] = useState('');
    const [ ids, setIds ] = useState([]);
    const [ tasks, setTasks ] = useState({});
    const [ filteredIds, setFilteredIds ] = useState(ids);
    const [ select, setSelect ] = useState(filterByState.ALL);
    const [ order, setOrder ] = useState(filterByOrder.NEW);

    const handleUpdateText = (text) => setText(text);
    const handleUpdateIds = (ids) => setIds(ids);
    const handleUpdateTasks = (tasks) => setTasks(tasks);
    const handleUpdateFilteredIds = (ids) => setFilteredIds(ids);
    const handleUpdateSelect = (select) => setSelect(select);
    const handleUpdateOrder = (order) => setOrder(order);

    const handleChangeState = (id) => () => {
        setTasks({
            ...tasks,
            [id]: {
                ...tasks[id],
                state: tasks[id].state === taskState.ACTIVE ? taskState.FINISHED : taskState.ACTIVE
            }
        });
    };

    const handleDeleteTask = (id) => () => {
        const filteredTasks = { ...tasks };

        setIds(ids.filter((tasksId) => tasksId !== id));
        setFilteredIds(filteredIds.filter((tasksId) => tasksId !== id));
        delete filteredTasks[id];
        setTasks(filteredTasks);
    };

    return (
        <div>
            <Form
                text={text}
                ids={ids}
                tasks={tasks}
                select={select}
                filteredIds={filteredIds}
                order={order}
                onUpdateText={handleUpdateText}
                onUpdateIds={handleUpdateIds}
                onUpdateTasks={handleUpdateTasks}
                onChangeState={handleChangeState}
                onDeleteTask={handleDeleteTask}
                onUpdateFilteredIds={handleUpdateFilteredIds}
            />
            <Filter
                ids={ids}
                tasks={tasks}
                select={select}
                order={order}
                onUpdateFilteredIds={handleUpdateFilteredIds}
                onUpdateSelect={handleUpdateSelect}
                onUpdateOrder={handleUpdateOrder}
            />
            {ids.length > 0 &&
                <Tasks
                    filteredIds={filteredIds}
                    tasks={tasks}
                    order={order}
                    onChangeState={handleChangeState}
                    onDeleteTask={handleDeleteTask}
                />
            }
        </div>
    );
}
