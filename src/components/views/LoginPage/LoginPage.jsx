import React from "react";
import "../../../utils/styles.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { isEveryFieldValid } from "src/utils/validation";
import * as api from "../../../utils/api";

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

const LoginPage = ({ history, login, setLogin, postLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSubmit = {
      userid: login.value.userid,
      password: login.value.password,
    };

    postLogin(dataToSubmit)
      .then((res) => {
        if (res.success) {
          window.localStorage.setItem("X-AUTH-TOKEN", res.data.token);
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
          value={login.value.userid}
          onChange={(event) =>
            setLogin({ name: "userid", value: event.target.value })
          }
        />
        <br />
        <StyledInput
          type="password"
          label="비밀번호"
          variant="outlined"
          value={login.value.password}
          onChange={(event) =>
            setLogin({ name: "password", value: event.target.value })
          }
        />
        <br />
        <>
          {isEveryFieldValid(login.valid) ? (
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

        {/* test */}
        <div>
          <Button
            variant="contained"
            color="primary"
            type="button"
            onClick={async () => {
              try {
                const response = await api.test();
                console.log(response);
              } catch (error) {
                console.log(error);
              }
            }}
          >
            test
          </Button>
        </div>
      </StyledForm>
    </Cover>
  );
};

export default LoginPage;
