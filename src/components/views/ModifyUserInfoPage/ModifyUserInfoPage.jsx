import React, { useState, useCallback } from "react";
import "../../../utils/styles.css";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { StyeldModifyUser, StyledConfirmPassword, Wrapper } from "./styles";
import { Link } from "react-router-dom";

const ModifyUserInfoPage = () => {
  const [access, setAccess] = useState(false); // 비밀번호를 통한 1차 인증
  const [field, setField] = useState({
    password: "",
    newPassword: "",
    phone: "",
    firstEmail: "",
    lastEmail: "",
    emailList: "직접 입력",
  });

  const updateField = useCallback((name, value) => {
    setField((old) => ({
      ...old,
      [name]: value,
    }));
  }, []);

  return (
    <Wrapper className="container">
      <h1>회원정보 수정</h1>

      {!access ? (
        <StyledConfirmPassword>
          {/* 비밀번호를 통해 접근 가능한지 확인 */}

          <p>계속하려면 먼저 본인임을 인증하세요.</p>
          <TextField
            className="password"
            label="비밀번호 입력"
            variant="outlined"
            type="password"
          />
          <Button className="button" color="primary" variant="contained">
            확인
          </Button>
          <Link to="modify-password" className="modify-password">
            <span>비밀번호 변경하기</span>
          </Link>
        </StyledConfirmPassword>
      ) : (
        <StyeldModifyUser>
          {/* 회원정보 수정 */}
          <TextField
            className="input"
            label="아이디"
            variant="outlined"
            disabled
          />

          <TextField
            className="input"
            label="이름"
            variant="outlined"
            disabled
          />

          <TextField className="input" label="휴대폰 번호" variant="outlined" />

          <div className="email">
            <TextField className="input" label="이메일" variant="outlined" />
            <span>@</span>
            <TextField className="input" variant="outlined" />
            <FormControl className="select" variant="outlined">
              <InputLabel id="dropdown">주소</InputLabel>
              <Select
                labelId="dropdown"
                onChange={(event) =>
                  updateField("emailList", event.target.value)
                }
                value={field.emailList}
                label="주소"
              >
                <MenuItem value="직접 입력">직접 입력</MenuItem>
                <MenuItem value="naver.com">naver.com</MenuItem>
                <MenuItem value="daum.net">daum.net</MenuItem>
                <MenuItem value="gmail.com">gmail.com</MenuItem>
              </Select>
            </FormControl>
          </div>

          <Button className="button" color="primary" variant="contained">
            변경하기
          </Button>
        </StyeldModifyUser>
      )}
    </Wrapper>
  );
};

export default ModifyUserInfoPage;
