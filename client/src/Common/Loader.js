import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    height: "100vh",
    padding: "40px",
    justifyContent: "center",
  },
}));

export default function Loader() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress color="secondary" />
    </Box>
  );
}
