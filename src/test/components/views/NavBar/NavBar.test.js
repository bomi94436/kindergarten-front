import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import NavBar from "../../../../components/views/NavBar/NavBar";

describe("<NavBar /> 에서", () => {
  const history = createMemoryHistory();

  const setup = () => {
    const component = render(
      <Router history={history}>
        <NavBar />
      </Router>
    );
    return component;
  };

  it("잘 렌더링된다", () => {
    const component = setup();
  });

  it("스냅샷이 일치한다", () => {
    const component = setup();
    expect(component.container).toMatchSnapshot();
  });

  it("버튼들이 있다", () => {
    const component = setup();
    component.getByText("엄마, 나 요기 갈래");
    component.getByText("회원가입");
  });

  it("버튼들을 클릭했을 때, url이 잘 이동된다", () => {
    const component = setup();
    fireEvent.click(component.getByText("엄마, 나 요기 갈래"));
    expect(history.location.pathname).toBe("/");
    fireEvent.click(component.getByText("회원가입"));
    expect(history.location.pathname).toBe("/register");
  });
});
