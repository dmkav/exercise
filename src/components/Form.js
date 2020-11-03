import React, {memo, useState} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = memo(({initValue, onSubmit}) => {
    const [value, setValue] = useState(initValue);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="filled-multiline-flexible"
                label="Multiline"
                multiline
                rows={25}
                value={value}
                onChange={handleChange}
                variant="filled"
            />

            <Button type="submit" variant="contained" color="primary">
                Submit
            </Button>
        </form>
    );
});


export {Form};
