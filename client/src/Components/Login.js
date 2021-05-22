import React, { useEffect } from "react";
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
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAuthUser, userInfo } from "../redux/slices/userSlice";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  },
  paper: {
    padding: "20px 40px",
    boxShadow: "5px 5px 50px lightgray",
    borderRadius: "15px",
  },
}));

const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const { success } = useSelector(userInfo);
  const history = useHistory();

  useEffect(() => {
    if (success) {
      history.push("/home");
    }
  }, [history, success]);

  const onSubmit = (data, e) => {
    dispatch(loginAuthUser(data));
    e.target.reset();
  };

  const classes = useStyles();
  return (
    <Container className={clsx(classes.root)}>
      <Grid item container justify="center" md={8} lg={8} sm={12}>
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
                <Link to="/register">
                  <Typography variant="subtitle1">Sign Up?</Typography>
                </Link>
              </Box>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Login;
