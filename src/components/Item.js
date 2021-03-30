import React from 'react';
import {taskState} from "../constants/constants";
import * as PropTypes from "prop-types";
import { ListItem, Paper, Grid, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    colorGreen: {
        backgroundColor: '#C8F4C2',
    },
    colorWhite: {
        backgroundColor: '#FFFFFF',
    },
    grid: {
        margin: "5px",
        width: "40vw",
    },
}));

function Item(props) {
    const { task, number, onChangeState, onDeleteTask } = props;
    const  classes = useStyles();

    return (
        <ListItem>
            <Paper
                role="button"
                onClick={onChangeState(task.id)}
                className={task.state === taskState.FINISHED ? classes.colorGreen : classes.colorWhite}
            >
                <Grid container wrap="nowrap" spacing={1} className={classes.grid} justify="space-between" alignItems="center">
                    <Grid item><Typography variant="subtitle1" gutterBottom>{number}.</Typography></Grid>
                    <Grid item>
                        <Typography variant="body1" gutterBottom>
                            {task.text}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={onDeleteTask(task.id)} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </ListItem>
    );
}

Item.propTypes = {
    task: PropTypes.object,
    number: PropTypes.number,
    onChangeState: PropTypes.func,
    onDeleteTask: PropTypes.func,
};

export default Item;
