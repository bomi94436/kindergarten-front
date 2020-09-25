import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import RegisterForm from "components/views/RegisterPage/RegisterForm";

describe("<RegisterForm /> 에서", () => {
  const history = createMemoryHistory();
  const paths = ["parent", "teacher", "director"];
  const title = [
    "학부모(일반회원)회원가입",
    "선생님회원가입",
    "원장님회원가입",
  ];

  const setup = (path) => {
    history.push(`/register/${path}`);
    return render(<RegisterForm history={history} />);
  };

  it("3개의 회원가입 페이지들이 잘 렌더링된다", () => {
    let component = null;
    paths.forEach((path) => {
      component = setup(path);
    });
  });

  it("스냅샷이 일치한다", () => {
    const component = setup("parent");
    expect(component.container).toMatchSnapshot();
  });

  paths.forEach((path, index) => {
    describe(`/${path} 에서`, () => {
      it(`타이틀 및 폼이 정상적으로 보여진다`, () => {
        const component = setup(path);
        component.getByText(title[index]);
        component.getByText("아이디");
        component.getByText("중복 확인");
        component.getByText("비밀번호");
        component.getByText("비밀번호 확인");
        component.getByText("이름");
        component.getByText("휴대폰 번호");
        component.getByText("이메일");
      });
    });
  });
});
