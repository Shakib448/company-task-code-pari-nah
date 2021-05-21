import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Login from "./Components/Login";

const useStyles = makeStyles(() => ({
  "@global": {
    ".MuiTypography-root": {
      fontFamily: '"Poppins", sans-serif',
    },
    ".MuiInputBase-root": {
      fontFamily: '"Poppins", sans-serif',
    },
    ".MuiFormLabel-root": {
      fontFamily: '"Poppins", sans-serif',
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <main className={clsx(classes.root)}>
      <Login />
    </main>
  );
}

export default App;
