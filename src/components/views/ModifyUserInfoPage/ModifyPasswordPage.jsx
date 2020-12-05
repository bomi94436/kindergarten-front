import React, { useState, useCallback } from "react";
import { TextField, Button } from "@material-ui/core";
import { StyeldModifyPassword, Wrapper } from "./styles";

const ModifyPasswordPage = () => {
  const [field, setField] = useState({
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const updateField = useCallback((name, value) => {
    setField((old) => ({
      ...old,
      [name]: value,
    }));
  }, []);

  return (
    <Wrapper className="container">
      <h1>비밀번호 변경</h1>

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
          value={field.newPassword}
          onChange={(e) => updateField("newPassword", e.target.value)}
        />

        <TextField
          className="password"
          label="새로운 비밀번호 확인"
          variant="outlined"
          type="password"
          value={field.confirmNewPassword}
          onChange={(e) => updateField("confirmNewPassword", e.target.value)}
        />
        <Button className="button" color="primary" variant="contained">
          변경하기
        </Button>
      </StyeldModifyPassword>
    </Wrapper>
  );
};

export default ModifyPasswordPage;
