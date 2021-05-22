import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut, userInfo } from "../redux/slices/userSlice";

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
const Home = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [search, setSearch] = useState([]);
  const [result, setResult] = useState([]);

  const dispatch = useDispatch();
  const { success } = useSelector(userInfo);
  const history = useHistory();

  useEffect(() => {
    if (!success) {
      history.push("/");
    }
  }, [history, success]);

  const onSubmit = (data, e) => {
    setSearch(data.search);
    setResult(data.result);
    const sortToDb = Object.values(search).sort((a, b) => a - b);
    console.log(sortToDb);
  };

  const isResult = Object.values(search).filter((value) =>
    result.includes(value)
  );

  return (
    <Container className={clsx(classes.root)}>
      <Grid item container justify="center" md={8} lg={8} sm={12}>
        <Paper className={clsx(classes.paper)}>
          <Typography variant="h4">Welcome Khoj</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column">
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                style={{ margin: "10px 0" }}
                inputProps={{ ...register("search") }}
              />
              <TextField
                id="outlined-basic"
                label="Result"
                variant="outlined"
                style={{ margin: "10px 0" }}
                inputProps={{ ...register("result") }}
              />
              <Button variant="contained" type="submit" color="primary">
                Khoj
              </Button>
              <Box mt={1} mb={2}>
                <Typography variant="subtitle1" align="center">
                  Result : {isResult.length !== 0 ? "True" : "False"}
                </Typography>
              </Box>
            </Grid>
          </form>
          <Grid container justify="center">
            <Button
              color="primary"
              variant="contained"
              onClick={() => dispatch(logOut())}
            >
              Log Out
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
