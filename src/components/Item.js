import React from 'react';
import {taskState} from "../constants/constants";
import * as PropTypes from "prop-types";
import { ListItem, Paper, Grid, Typography, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core";
import classNames from 'classnames';

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
    item: {
        cursor: 'pointer',
        "&:hover": {
            backgroundColor: '#AEF3A5',
        },
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
                className={classNames({
                    [classes.item]: true,
                    [classes.colorGreen]: task.state === taskState.FINISHED,
                    [classes.colorWhite]: task.state === taskState.ACTIVE,
                })}
            >
                <Grid container direction="row" wrap="nowrap" spacing={2} className={classes.grid} justify="space-between" alignItems="center">
                    <Grid item>
                        <Typography variant="subtitle1" gutterBottom>
                            {number}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" gutterBottom>
                            {task.date.toLocaleString()}
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
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
