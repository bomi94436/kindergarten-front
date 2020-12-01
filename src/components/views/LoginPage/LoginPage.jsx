import React, { useState } from "react";
import "../../../utils/styles.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isEveryFieldValid, validateLogin } from "src/utils/validation";

const Cover = styled.div`
  width: 40%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 60%;
`;

const StyledInput = styled(TextField)`
  flex-grow: 1;
`;

const StyledButton = styled(Button)`
  flex-grow: 1;
  height: 3rem;
  font-size: 1.2rem;
  border-radius: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 1.2rem 0.1rem;
`;

const LoginPage = ({ role, history, postLogin }) => {
  const [field, setField] = useState({
    userid: "",
    password: "",
  });

  const [valid, setValid] = useState({
    userid: null,
    password: null,
  });

  const updateField = (name, value) => {
    setField({
      ...field,
      [name]: value,
    });
    setValid({
      ...valid,
      [name]: validateLogin(name, value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      userid: field.userid,
      password: field.password,
    };

    postLogin([dataToSubmit])
      .then((res) => {
        if (res.success) {
          localStorage.setItem("X-AUTH-TOKEN", res.data.token);
          history.push("/");
        } else {
          alert(res.msg);
        }
      })
      .catch((res) => {
        alert(res.msg);
      });
  };

  return (
    <Cover className="container" style={{ minHeight: "500px" }}>
      <Typography style={{ fontSize: "2rem" }}>로그인</Typography>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          label="아이디"
          variant="outlined"
          value={field.userid}
          onChange={(event) => updateField("userid", event.target.value)}
        />
        <br />
        <StyledInput
          type="password"
          label="비밀번호"
          variant="outlined"
          value={field.password}
          onChange={(event) => updateField("password", event.target.value)}
        />
        <br />
        <>
          {isEveryFieldValid(valid) ? (
            <StyledButton type="submit" variant="contained" color="primary">
              로그인
            </StyledButton>
          ) : (
            <StyledButton
              type="submit"
              variant="contained"
              color="primary"
              disabled
            >
              로그인
            </StyledButton>
          )}
        </>
        <p>
          아직 회원이 아니신가요?
          <StyledLink to="/register">회원가입</StyledLink>
        </p>
      </StyledForm>
    </Cover>
  );
};

export default LoginPage;
