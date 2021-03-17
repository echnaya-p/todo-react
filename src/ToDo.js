import React, {useState} from 'react';
import Form from './Form.js';
import Tasks from './Tasks.js';
import Filter from "./Filter";

export default function ToDo() {
    const [ text, setText ] = useState('');
    const [ ids, setIds ] = useState([]);
    const [ tasks, setTasks ] = useState({});
    const [ filteredIds, setFilteredIds ] = useState(ids);
    const [ select, setSelect ] = useState('all');

    const handleUpdateText = (text) => setText(text);
    const handleUpdateIds = (ids) => setIds(ids);
    const handleUpdateTasks = (tasks) => setTasks(tasks);
    const handleUpdateFilteredIds = (ids) => setFilteredIds(ids);
    const handleUpdateSelect = (select) => setSelect(select);

    return (
        <div>
            <Form
                text={text}
                ids={ids}
                tasks={tasks}
                select={select}
                filteredIds={filteredIds}
                onUpdateText={handleUpdateText}
                onUpdateIds={handleUpdateIds}
                onUpdateTasks={handleUpdateTasks}
                onUpdateFilteredIds={handleUpdateFilteredIds}
            />
            <Filter
                ids={ids}
                tasks={tasks}
                select={select}
                onUpdateFilteredIds={handleUpdateFilteredIds}
                onUpdateSelect={handleUpdateSelect}
            />
            {ids.length > 0 &&
                <Tasks
                    ids={ids}
                    filteredIds={filteredIds}
                    onUpdateIds={handleUpdateIds}
                    tasks={tasks}
                    onUpdateTasks={handleUpdateTasks}
                    onUpdateFilteredIds={handleUpdateFilteredIds}
                />
            }
        </div>
    );
}
