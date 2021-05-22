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
import React from "react";
import { useForm } from "react-hook-form";

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

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

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
                inputProps={{ ...register("email") }}
              />
              <TextField
                id="outlined-basic"
                label="Result"
                variant="outlined"
                type="password"
                style={{ margin: "10px 0" }}
                inputProps={{ ...register("password") }}
              />
              <Button variant="contained" type="submit" color="primary">
                Khoj
              </Button>
              <Box mt={1}>
                <Typography variant="subtitle1">Result : </Typography>
              </Box>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
