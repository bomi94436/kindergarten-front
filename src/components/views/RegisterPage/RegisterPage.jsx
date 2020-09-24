import React from "react";
import { Route, Switch } from "react-router-dom";
import NavButton from "./NavButton";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/register" component={NavButton} />
        <Route path="/register/parent" component={RegisterForm} />
        <Route path="/register/teacher" component={RegisterForm} />
        <Route path="/register/director" component={RegisterForm} />
      </Switch>
    </div>
  );
};

export default RegisterPage;
