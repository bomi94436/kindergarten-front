import React, { useEffect, useState } from "react";
import SearchKindergarten from "./SearchKindergarten";
import { contents } from "./reigsterContents";

const RegisterForm = ({ history }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const path = history.location.pathname;
    if (path.indexOf("parent") !== -1) {
      setTitle("학부모(일반회원)");
    } else if (path.indexOf("teacher") !== -1) {
      setTitle("선생님");
    } else if (path.indexOf("director") !== -1) {
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
        {contents.map((element) => {
          let content;
          let br = <br />;

          if (element.html === "input") {
            if (element.id === "email") {
              br = <span>@</span>;
            } else if (
              element.id === "userId" ||
              element.id === "emailDetail"
            ) {
              br = null;
            }

            content = (
              <React.Fragment key={element.id}>
                <label htmlFor={element.id}>{element.title}</label>
                <input
                  id={element.id}
                  type={element.type}
                  placeholder={element.placeholder}
                />
                {br}
              </React.Fragment>
            );
          } else if (element.html === "button") {
            content = (
              <React.Fragment key={element.id}>
                <button id={element.id}>{element.title}</button>
                {br}
              </React.Fragment>
            );
          } else if (element.html === "dropdown") {
            content = (
              <React.Fragment key={element.id}>
                <select id={element.id}>
                  {element.list.map((e, index) => (
                    <option key={index} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {br}
              </React.Fragment>
            );
          }

          return content;
        })}

        {title === "선생님" || title === "원장님" ? (
          <SearchKindergarten />
        ) : null}

        <button type="submit">회원가입</button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
