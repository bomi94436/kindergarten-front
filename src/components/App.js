import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./views/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NotFound from "./views/NotFound/NotFound";
import LoginPage from "../containers/LoginPage/LoginPageContainer";
import SearchPage from "./views/SearchPage/SearchPage";
import ReviewPage from "./views/ReviewPage/ReviewPage";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div style={{ height: "64px" }}></div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/review" component={ReviewPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
