import React from "react";
import "../../../utils/styles.css";

const LandingPage = ({ loggedInfo }) => {
  return <div className="container">LandingPage {loggedInfo.role}</div>;
};

export default LandingPage;
