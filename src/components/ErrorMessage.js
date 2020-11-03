import * as React from 'react';
import {useContext} from "react";
import {store} from "../store/store";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    paper: {
        margin: 20,
        padding: '1px 20px',
        background: 'red',
        color: 'white'
    }

}));


const ErrorMessage = () => {
    const styles = useStyles();
    const {state: {error}} = useContext(store);

    return error ? (
        <Paper className={styles.paper} elevation={5}>
            <h4>Please check your code. It has error :(</h4>
        </Paper>
    ) : null;

};

export { ErrorMessage };
