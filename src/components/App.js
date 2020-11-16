import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Auth from "../components/hoc/Auth";
import NavBar from "../components/views/common/NavBar/NavBar";
import LandingPage from "./views/LandingPage/LandingPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import NotFound from "./views/NotFound/NotFound";
import LoginPage from "../containers/LoginPage/LoginPageContainer";
import SearchPage from "../containers/SearchPage/SearchPageContainer";
import KindergartenPage from "../containers/KindergartenPage/KindergartenPageContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Auth(NavBar, null)} />
        <div style={{ height: "64px" }}></div>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={Auth(LoginPage, false)} />
          <Route path="/search" component={SearchPage} />
          <Route path="/kindergarten/:id" component={KindergartenPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
