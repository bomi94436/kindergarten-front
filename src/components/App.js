import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          render={({ history }) => (
            <React.Fragment>
              <NavBar history={history} />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/register" component={RegisterPage} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          )}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
