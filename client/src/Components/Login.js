import React from "react";
import { Container, Typography, Grid, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    padding: "40px",
    fontFamily: '"Poppins", sans-serif',
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <Container className={clsx(classes.root)}>
      <Grid container justify="center">
        <Typography variant="h4">Welcome to Login</Typography>
      </Grid>
    </Container>
  );
};

export default Login;
