import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Register";

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
    <Router>
      <main className={clsx(classes.root)}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
