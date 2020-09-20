import React, { useEffect, useState } from "react";
import SearchKindergarten from "./SearchKindergarten";
import { contents } from "./reigsterContents";

const RegisterForm = ({ history, location }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname.indexOf("parent") !== -1) {
      setTitle("학부모(일반회원)");
    } else if (location.pathname.indexOf("teacher") !== -1) {
      setTitle("선생님");
    } else if (location.pathname.indexOf("director") !== -1) {
      setTitle("원장님");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <h1>
        {title}
        <br />
        회원가입
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        {contents.map((element) => (
          <React.Fragment key={element.id}>
            <label htmlFor={element.id}>{element.title}</label>
            <input
              id={element.id}
              type={element.type}
              placeholder={element.placeholder}
            />
            <br />
          </React.Fragment>
        ))}

        {title === "선생님" || title === "원장님" ? (
          <SearchKindergarten />
        ) : null}

        <button type="submit">회원가입</button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
