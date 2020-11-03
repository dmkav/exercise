import React, {memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {EditorContainer} from "../containers/EditorContainer";
import {ViewContainer} from "../containers/ViewContainer";
import {ErrorMessage} from "../components/ErrorMessage";

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
        maxWidth: 1200,
        margin: '0 auto'
    },

    paper: {
        padding: 20
    }

}));

const Main = memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Main page</h1>
            <ErrorMessage />
            <Grid container spacing={5}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <EditorContainer />
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <ViewContainer />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
});


export {Main};
