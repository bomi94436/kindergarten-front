import React, { useEffect, useState } from "react";
import SearchKindergarten from "./SearchKindergarten";
import { contents } from "./registerConents";

const Input = ({ element, br, setRegister, state }) => (
  <>
    <label htmlFor={element.id}>{element.title}</label>
    <input
      id={element.id}
      type={element.type}
      placeholder={element.placeholder}
      onChange={(event) =>
        setRegister({ name: element.id, value: event.target.value })
      }
      value={state.value[element.id]}
    />
    {br}
  </>
);

const Button = ({ element, br }) => (
  <>
    <button id={element.id}>{element.title}</button>
    {br}
  </>
);

const Dropdown = ({ element, br, setRegister }) => (
  <>
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
    {br}
  </>
);

const RegisterForm = ({ history, state, setRegister, postRegister }) => {
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
  }, []);

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
    <>
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
            if (element.id === "firstEmail") {
              br = <span>@</span>;
            } else if (element.id === "userid" || element.id === "lastEmail") {
              br = null;
            }
            return (
              <Input
                key={element.id}
                element={element}
                setRegister={setRegister}
                state={state}
                br={br}
              />
            );
          } else if (element.html === "button") {
            return <Button key={element.id} element={element} br={br} />;
          } else if (element.html === "dropdown") {
            return (
              <Dropdown
                key={element.id}
                element={element}
                br={br}
                setRegister={setRegister}
              />
            );
          }

          return content;
        })}

        {title === "선생님" || title === "원장님" ? (
          <SearchKindergarten />
        ) : null}

        <button type="submit">회원가입</button>
      </form>
    </>
  );
};

export default RegisterForm;
