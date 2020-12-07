import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import { StyeldModifyPassword, Wrapper } from "./styles";

const ModifyPasswordPage = ({ history, handlePutUser }) => {
  const [field, setField] = useState({
    password: "",
    newpassword: "",
    confirmNewpassword: "",
  });

  const updateField = useCallback((name, value) => {
    setField((old) => ({
      ...old,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handlePutUser(field.password, field.newpassword).then((res) => {
        console.log(res);
        if (res.success) {
          alert("비밀번호가 변경되었습니다.");
          history.push("/");
        } else {
          alert(res.data.msg);
        }
      });
    },
    [field.newpassword, field.password, handlePutUser, history]
  );

  return (
    <Wrapper className="container">
      <h1>비밀번호 변경</h1>

      <form onSubmit={handleSubmit}>
        <StyeldModifyPassword>
          <TextField
            className="password"
            label="비밀번호 입력"
            variant="outlined"
            type="password"
            value={field.password}
            onChange={(e) => updateField("password", e.target.value)}
          />

          <TextField
            className="password"
            label="새로운 비밀번호 입력"
            variant="outlined"
            type="password"
            error={field.newpassword.length > 0 && field.newpassword < 8}
            helperText={
              field.newpassword.length > 0 && field.newpassword < 8
                ? "비밀번호는 최소 8자 이상 입력해주세요."
                : ""
            }
            value={field.newpassword}
            onChange={(e) => updateField("newpassword", e.target.value)}
          />

          <TextField
            className="password"
            label="새로운 비밀번호 확인"
            variant="outlined"
            type="password"
            error={field.newpassword !== field.confirmNewpassword}
            helperText={
              field.newpassword !== field.confirmNewpassword &&
              "비밀번호가 일치하지 않습니다."
            }
            value={field.confirmNewpassword}
            onChange={(e) => updateField("confirmNewpassword", e.target.value)}
          />
          <Button
            className="button"
            type="submit"
            color="primary"
            variant="contained"
          >
            변경하기
          </Button>
        </StyeldModifyPassword>
      </form>
    </Wrapper>
  );
};

export default ModifyPasswordPage;
