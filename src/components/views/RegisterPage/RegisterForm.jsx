import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import SearchKindergarten from "../../../containers/RegisterPage/SearchKindergartenContainer";
import { contents } from "./registerConents";
import { isEveryFieldValid } from "../../../utils/validation";
import { FormInput, FormButton, FormDropdown } from "./RegisterFormComp";
import AddStudent from "../../../containers/RegisterPage/AddStudentContainer";
import "../../../utils/styles.css";

const FormCover = styled.div`
  max-width: 50%;
  margin: 1rem auto 0;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  height: 4rem;
  flex-grow: 1;
  font-size: 1.2rem;
  border-radius: 30px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
      display: "flex",
    },
  },
}));

const RegisterForm = ({
  history,
  state,
  setRegister,
  setRegisterValid,
  postRegister,
  getExistId,
}) => {
  const [title, setTitle] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const path = history.location.pathname.split("/")[2];
    if (path === "user") {
      setTitle("학부모(일반회원)");
      setRegisterValid({ actor: "user", act: "set" });
    } else if (path === "teacher") {
      setTitle("선생님");
      setRegisterValid({ actor: "teacher", act: "set" });
    } else if (path === "director") {
      setTitle("원장님");
      setRegisterValid({ actor: "director", act: "set" });
    }
  }, [history.location.pathname, setRegisterValid]);

  const handleSubmit = (e) => {
    const path = history.location.pathname.split("/")[2];
    e.preventDefault();

    const dataToSubmit = {
      userid: state.value.userid,
      password: state.value.password,
      name: state.value.name,
      phone: state.value.phone,
      email: `${state.value.firstEmail}@${state.value.lastEmail}`,
      role: path.toUpperCase(),
    };

    if (path === "teacher" || path === "director") {
      dataToSubmit.kindergarten_id = state.search.selected.id;
    } else if (path === "user" && state.students) {
      dataToSubmit.student = [];
      state.students.forEach((student) => {
        let studentData = {
          kindergarten_id: student.value.kindergarten_id,
          name: student.value.name,
          year: student.value.date.getFullYear().toString(),
          month: (student.value.date.getMonth() + 1).toString(),
          day: student.value.date.getDate().toString(),
        };
        dataToSubmit.student.push(studentData);
      });
    }

    postRegister(dataToSubmit).then((res) => {
      alert(res.msg);
      if (res.success) {
        history.push("/");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="container"
    >
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
                marginLeft: "1rem",
              }}
            >
              <FormButton
                element={contents.checkDuplication}
                getExistId={getExistId}
                id={state.value.userid}
                isUseridValid={state.valid.userid}
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
            <span style={{ margin: "0.5rem" }}>@</span>
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
          ) : (
            <AddStudent />
          )}

          <div style={{ marginTop: "3rem" }}>
            {isEveryFieldValid(state.valid, state.students) ? (
              <StyledButton type="submit" variant="contained" color="primary">
                회원가입
              </StyledButton>
            ) : (
              <StyledButton
                type="submit"
                variant="contained"
                color="primary"
                disabled
              >
                회원가입
              </StyledButton>
            )}
          </div>
        </form>
      </FormCover>
    </div>
  );
};

export default RegisterForm;
