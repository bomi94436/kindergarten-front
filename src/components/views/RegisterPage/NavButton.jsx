import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import "../../../utils/styles.css";

const Cover = styled.div`
  max-width: 50%;
  margin: 1rem auto 0;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 4rem;
  width: 17rem;
  flex-grow: 1;
  font-size: 1.1rem;
  border-radius: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1.2rem 0.1rem;
`;

const NavButton = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "80vh",
      }}
      className="container"
    >
      <Cover>
        <StyledLink to="/register/user">
          <StyledButton variant="contained" color="primary">
            학부모(일반회원)로 회원가입
          </StyledButton>
        </StyledLink>
        <br />
        <StyledLink to="/register/teacher">
          <StyledButton variant="contained" color="primary">
            선생님으로 회원가입
          </StyledButton>
        </StyledLink>
        <br />
        <StyledLink to="/register/director">
          <StyledButton variant="contained" color="primary">
            원장님으로 회원가입
          </StyledButton>
        </StyledLink>
        <br />
        <p>
          이미 계정이 있으신가요? <StyledLink to="/login">로그인</StyledLink>
        </p>
      </Cover>
    </div>
  );
};

export default NavButton;
