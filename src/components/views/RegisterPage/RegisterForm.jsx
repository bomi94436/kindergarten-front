import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SearchKindergarten from "./SearchKindergarten";
import { contents } from "./registerConents";
import { isEveryFieldValid } from "../../../utils/validation";
import { FormInput, FormButton, FormDropdown } from "./RegisterFormComponent";

const FormCover = styled.div`
  max-width: 50%;
  margin: 1rem auto 0;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const ButtonCover = styled(Button)`
  height: 4rem;
  flex-grow: 1;
  font-size: 1.2rem;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
    },
  },
}));

const RegisterForm = ({
  history,
  state,
  setRegister,
  postRegister,
  getExistId,
}) => {
  const [title, setTitle] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const path = history.location.pathname.split("/")[2];
    if (path === "parent") {
      setTitle("학부모(일반회원)");
    } else if (path === "teacher") {
      setTitle("선생님");
    } else if (path === "director") {
      setTitle("원장님");
    }
  }, [history.location.pathname]);

  const handleSubmit = (e) => {
    const path = history.location.pathname.split("/")[2];
    e.preventDefault();

    const dataToSubmit = {
      userid: state.value.userid,
      password: state.value.password,
      name: state.value.name,
      phone: state.value.phone,
      email: `${state.value.firstEmail}@${state.value.lastEmail}`,
    };

    if (path === "선생님" || path === "원장님") {
      // 선택한 소속 유치원을 dataToSubmit에 추가
    }

    postRegister(dataToSubmit, path).then((res) => {
      alert(res.data.msg);
      if (res.data.success) {
        history.push("/");
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FormCover>
        <p style={{ fontSize: "2rem", fontWeight: 500 }}>{title} 회원가입</p>

        <form onSubmit={(e) => handleSubmit(e)} className={classes.root}>
          <div style={{ marginBottom: "2rem" }}>
            <FormInput
              element={contents.userid}
              setRegister={setRegister}
              state={state}
            />

            <div
              style={{
                display: "flex",
                alignSelf: "stretch",
                marginLeft: "1rem",
              }}
            >
              <FormButton
                element={contents.checkDuplication}
                getExistId={getExistId}
                id={state.value.userid}
              />
            </div>
          </div>

          <FormInput
            element={contents.password}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormInput
            element={contents.rePassword}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormInput
            element={contents.name}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormInput
            element={contents.phone}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <FormInput
              element={contents.firstEmail}
              setRegister={setRegister}
              state={state}
            />
            <span style={{ margin: "1rem" }}>@</span>
            <FormInput
              element={contents.lastEmail}
              setRegister={setRegister}
              state={state}
            />
            <FormDropdown
              element={contents.emailList}
              setRegister={setRegister}
              state={state}
            />
          </div>

          {title === "선생님" || title === "원장님" ? (
            <SearchKindergarten />
          ) : null}

          <div style={{ marginTop: "3rem" }}>
            {isEveryFieldValid(state.valid) ? (
              <ButtonCover type="submit" variant="contained" color="primary">
                회원가입
              </ButtonCover>
            ) : (
              <ButtonCover
                type="submit"
                variant="contained"
                color="primary"
                disabled
              >
                회원가입
              </ButtonCover>
            )}
          </div>
        </form>
      </FormCover>
    </div>
  );
};

export default RegisterForm;
