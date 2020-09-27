import React, { useEffect, useState } from "react";
import SearchKindergarten from "./SearchKindergarten";
import { contents } from "./registerConents";
import {
  inputClassNameByValid,
  isEveryFieldValid,
} from "../../../utils/validation";
import styled from "styled-components";

const FormTitle = styled.label`
  font-size: 1rem;
`;

const FormInput = styled.input`
  font-size: 1rem;

  width: ${(props) =>
    props.id === "firstEmail" || props.id === "lastEmail" ? "10rem" : "15rem"};
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
  padding: 0.7rem 0.3rem;

  :focus {
    outline: none;
  }
  border-bottom: 2px solid
    ${(props) => {
      switch (props.className) {
        case "is-valid":
          return "green";
        case "is-invalid":
          return "red";
        default:
          return "black";
      }
    }};
`;

const FormButton = styled.button`
  margin-bottom: 1rem;
`;

const FormDropDown = styled.div`
  margin-bottom: 1rem;
`;

const FormCover = styled.div`
  max-width: 60%;
  margin: 50px auto 0;
  padding: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  h1 {
  }
`;

const Input = ({ element, setRegister, state }) => (
  <FormInput
    id={element.id}
    type={element.type}
    placeholder={element.placeholder}
    className={`${inputClassNameByValid(state.valid[element.id])}`}
    onChange={(event) =>
      setRegister({ name: element.id, value: event.target.value })
    }
    value={state.value[element.id]}
  />
);

const Button = ({ element, getExistId, id }) => (
  <FormButton id={element.id} onClick={(event) => getExistId(id)}>
    {element.title}
  </FormButton>
);

const Dropdown = ({ element, setRegister }) => (
  <FormDropDown>
    <select
      id={element.id}
      onChange={(event) =>
        setRegister({
          name: element.id,
          value: event.target.value,
        })
      }
    >
      {element.list.map((e, index) => (
        <option key={index} value={e}>
          {e}
        </option>
      ))}
    </select>
  </FormDropDown>
);

const RegisterForm = ({
  history,
  state,
  setRegister,
  postRegister,
  getExistId,
}) => {
  const [title, setTitle] = useState("");

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
        <h1>{title} 회원가입</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <FormTitle htmlFor={contents.userid.title}>
            {contents.userid.title}
          </FormTitle>
          <br />
          <div style={{ display: "flex" }}>
            <Input
              element={contents.userid}
              setRegister={setRegister}
              state={state}
            />

            <Button
              element={contents.checkDuplication}
              getExistId={getExistId}
              id={state.value.userid}
            />
          </div>

          <FormTitle htmlFor={contents.password.title}>
            {contents.password.title}
          </FormTitle>
          <br />
          <Input
            element={contents.password}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormTitle htmlFor={contents.rePassword.title}>
            {contents.rePassword.title}
          </FormTitle>
          <br />
          <Input
            element={contents.rePassword}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormTitle htmlFor={contents.name.title}>
            {contents.name.title}
          </FormTitle>
          <br />
          <Input
            element={contents.name}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormTitle htmlFor={contents.phone.title}>
            {contents.phone.title}
          </FormTitle>
          <br />
          <Input
            element={contents.phone}
            setRegister={setRegister}
            state={state}
          />
          <br />

          <FormTitle htmlFor={contents.firstEmail.title}>
            {contents.firstEmail.title}
          </FormTitle>
          <br />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Input
              element={contents.firstEmail}
              setRegister={setRegister}
              state={state}
            />
            <span>@</span>
            <Input
              element={contents.lastEmail}
              setRegister={setRegister}
              state={state}
            />
            <Dropdown element={contents.emailList} setRegister={setRegister} />
          </div>
          {title === "선생님" || title === "원장님" ? (
            <SearchKindergarten />
          ) : null}

          {isEveryFieldValid(state.valid) ? (
            <button type="submit" className="btn btn-primary btn-block">
              회원가입
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled
            >
              회원가입
            </button>
          )}
        </form>
      </FormCover>
    </div>
  );
};

export default RegisterForm;
