import React  from 'react';
import {filterByOrder} from "./constants/constants";
import * as PropTypes from "prop-types";
import { List, Grid } from "@material-ui/core";
import Item from './components/Item.js';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      width: '100%',
      maxWidth: '40vw',
      margin: '0 auto',
    },
});

function Tasks(props) {
    const { filteredIds, tasks, order, onChangeState, onDeleteTask  } = props;
    const classes = useStyles();

    const renderList = () => (
        filteredIds
            .sort((a,b) => order === filterByOrder.NEW ? b - a : a - b)
            .map((id, index) => (
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
        <Grid container className={classes.root}>
            <Grid item>
                <List>
                    {renderList()}
                </List>
            </Grid>
        </Grid>
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
