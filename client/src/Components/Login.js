import React from "react";
import {
  Container,
  Typography,
  Grid,
  makeStyles,
  TextField,
  Button,
  Paper,
  Box,
} from "@material-ui/core";
import clsx from "clsx";
import { useForm } from "react-hook-form";

const useStyles = makeStyles(() => ({
  root: {
    padding: "40px",
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },
  paper: {
    padding: "40px",
  },
}));

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  const classes = useStyles();
  return (
    <Container className={clsx(classes.root)}>
      <Grid container justify="center" md={8} lg={8} sm={12}>
        <Paper className={clsx(classes.paper)}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Login
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column">
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                style={{ margin: "10px 0" }}
                inputProps={{ ...register("email") }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                style={{ margin: "10px 0" }}
                inputProps={{ ...register("password") }}
              />
              <Button variant="contained" type="submit" color="primary">
                Submit
              </Button>
              <Box mt={1}>
                <Typography variant="subtitle1">Sign Up?</Typography>
              </Box>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
