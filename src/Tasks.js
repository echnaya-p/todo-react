import React  from 'react';
import {filterByOrder, taskState} from "./constants/constants";
import * as PropTypes from "prop-types";
import { List } from "@material-ui/core";
import Item from './components/Item.js';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    root: {
      width: '100%',
      maxWidth: '40vw',
      margin: '0 auto',
    },
}));

function Tasks(props) {
    const { filteredIds, tasks, order, onChangeState, onDeleteTask  } = props;
    const classes = useStyles();

    // const renderList = () => (
    //     filteredIds
    //         .sort((a,b) => order === filterByOrder.NEW ? b - a : a - b)
    //         .map((id) => (
    //             <li key={`${id}${tasks[id].text}`}>
    //                 <div role="button" onClick={handleChangeState(id)}>
    //                     <span>{tasks[id].date.toLocaleString()}</span>
    //                     <span>
    //                         {tasks[id].state === taskState.FINISHED ? <s>{tasks[id].text}</s> : tasks[id].text}
    //                     </span>
    //                     <button onClick={handleDeleteTask(id)}>x</button>
    //                 </div>
    //             </li>
    //         ))
    // );

    const renderList = () => (
        filteredIds.map((id, index) => (
            <Item
                task={tasks[id]}
                onChangeState={onChangeState}
                onDeleteTask={onDeleteTask}
                key={`${id}${tasks[id].text}`}
                number={index + 1}
            />
        ))
    );

    return (
        <div className={classes.root}>
            <List>
                {renderList()}
            </List>
        </div>
    );
}

Tasks.propTypes = {
    tasks: PropTypes.object,
    order: PropTypes.string,
    filteredIds: PropTypes.array,
    onChangeState: PropTypes.func,
    onDeleteTask: PropTypes.func,
};

export default Tasks;
