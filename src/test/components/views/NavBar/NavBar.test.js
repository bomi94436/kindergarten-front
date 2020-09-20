import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "../../../../components/views/NavBar/NavBar";

describe("<NavBar />", () => {
  const history = createMemoryHistory();

  const setup = () => {
    const component = render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
    return component;
  };

  it("renders correctly", () => {
    const component = setup();
  });

  it("contains buttons", () => {
    const component = setup();
    component.getByText("엄마, 나 요기 갈래");
    component.getByText("회원가입");
  });

  it("go to url correctly", () => {
    const component = setup();
    fireEvent.click(component.getByText("엄마, 나 요기 갈래"));
    expect(history.location.pathname).toBe("/");
    fireEvent.click(component.getByText("회원가입"));
    expect(history.location.pathname).toBe("/register");
  });
});
