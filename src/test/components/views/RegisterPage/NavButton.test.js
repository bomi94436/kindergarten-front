import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import NavButton from "../../../../components/views/RegisterPage/NavButton";

describe("<NavButton /> 에서", () => {
  const history = createMemoryHistory();

  const setup = () => {
    history.push("/register");
    return render(
      <Router history={history}>
        <NavButton />
      </Router>
    );
  };

  it("잘 렌더링된다", () => {
    const component = setup();
  });

  it("스냅샷이 일치한다", () => {
    const component = setup();
    expect(component.container).toMatchSnapshot();
  });

  it("3개의 회원가입 버튼들과 로그인 링크가 있다", () => {
    const component = setup();
    component.getByText("학부모(일반회원)로 회원가입");
    component.getByText("선생님으로 회원가입");
    component.getByText("원장님으로 회원가입");
    component.getByText("로그인");
  });
});
