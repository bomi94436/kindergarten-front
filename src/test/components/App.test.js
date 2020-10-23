import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/App";

describe("<App /> 에서", () => {
  it("잘 렌더링된다", () => {
    const component = render(<App />);
  });

  it("스냅샷이 일치한다", () => {
    const component = render(<App />);
    expect(component.container).toMatchSnapshot();
  });
});
