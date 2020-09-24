import React from "react";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <div>
      <Link to="/register/parent">
        <button>학부모(일반회원)로 회원가입</button>
      </Link>
      <br />
      <Link to="/register/teacher">
        <button>선생님으로 회원가입</button>
      </Link>
      <br />
      <Link to="/register/director">
        <button>원장님으로 회원가입</button>
      </Link>
      <br />
      이미 계정이 있으신가요? <Link to="/login">로그인</Link>
    </div>
  );
};

export default NavButton;
