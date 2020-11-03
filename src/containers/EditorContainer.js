import React, {useContext, useMemo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {store} from "../store/store";
import {Form} from "../components/Form";

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
}));

const EditorContainer = () => {
    const styles = useStyles();
    const {dispatch, state: {value}} = useContext(store);

    const initValue = useMemo(() => JSON.stringify(value), []);

    const submitHandler = (value) => {
        try {
            const parsedJSON = JSON.parse(value.replace(/\\n/g, "\\\n"));
            dispatch({ type: 'UPDATE', payload: parsedJSON });
        } catch {
            return dispatch({ type: 'SET_ERROR'});
        }
    };

    return (
        <div className={styles.root}>
            <h5>Please, edit page</h5>
            <Form initValue={initValue} onSubmit={submitHandler} />
        </div>
    );
};


export {EditorContainer};
