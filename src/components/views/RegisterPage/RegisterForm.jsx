import React, { useEffect, useState } from "react";
import SearchKindergarten from "./SearchKindergarten";

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
        <label htmlFor="userId">아이디</label>
        <input id="userId" type="text" placeholder="8자리 이상 입력" />
        <br />

        <label htmlFor="password">비밀번호</label>
        <input
          id="password"
          type="password"
          placeholder="숫자, 영어 조합하여 8자리 이상 입력"
        />
        <br />

        <label htmlFor="re_password">비밀번호 확인</label>
        <input id="re_password" type="password" />
        <br />

        <label htmlFor="name">이름</label>
        <input id="name" type="text" placeholder="2글자 이상 입력" />
        <br />

        <label htmlFor="phone">휴대폰 번호</label>
        <input id="phone" type="number" placeholder="숫자만 입력" />
        <br />

        <label htmlFor="email">이메일</label>
        <input id="email" type="email" />
        <br />

        {title === "선생님" || title === "원장님" ? (
          <SearchKindergarten />
        ) : null}

        <button type="submit">회원가입</button>
      </form>
    </React.Fragment>
  );
};

export default RegisterForm;
