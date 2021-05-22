import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

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
  return (
    <Container className={clsx(classes.root)}>
      <Grid item container justify="center" md={8} lg={8} sm={12}>
        <Paper className={clsx(classes.paper)}>
          <Typography variant="h4">Welcome Home</Typography>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Home;
