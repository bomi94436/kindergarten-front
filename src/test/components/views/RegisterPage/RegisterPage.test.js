import React from "react";
import { Router } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import RegisterPage from "components/views/RegisterPage/RegisterPage";

describe("<RegisterPage />에서", () => {
  const history = createMemoryHistory();

  const setup = () => {
    history.push("/register");
    return render(
      <Router history={history}>
        <RegisterPage />
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

  describe("회원가입 버튼 중에서, ", () => {
    it("학부모(일반회원)로 회원가입 버튼을 클릭했을 때, 잘 이동된다", () => {
      const component = setup();
      fireEvent.click(component.getByText("학부모(일반회원)로 회원가입"));
      expect(history.location.pathname).toBe("/register/parent");
    });

    it("선생님으로 회원가입 버튼을 클릭했을 때, 잘 이동된다", () => {
      const component = setup();
      fireEvent.click(component.getByText("선생님으로 회원가입"));
      expect(history.location.pathname).toBe("/register/teacher");
    });

    it("원장님으로 회원가입 버튼을 클릭했을 때, 잘 이동된다", () => {
      const component = setup();
      fireEvent.click(component.getByText("원장님으로 회원가입"));
      expect(history.location.pathname).toBe("/register/director");
    });
  });
});
