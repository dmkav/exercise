import React from "react";
import Paper from '@material-ui/core/Paper';

const Wrapper = ({children, ...someProps}) => <Paper style={{margin: 20, padding: 10}} {...someProps}>{children}</Paper>;

export {Wrapper};
