import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavButton from "./NavButton";
import RegisterForm from "./RegisterForm";
import NotFound from "../NotFound/NotFound";

const RegisterPage = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/register" component={NavButton} />
          <Route path="/register/parent" component={RegisterForm} />
          <Route path="/register/teacher" component={RegisterForm} />
          <Route path="/register/director" component={RegisterForm} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default RegisterPage;
