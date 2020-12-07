import React, { useState, useCallback, useEffect } from "react";
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

const ModifyUserInfoPage = ({
  history,
  userInfo,
  userStudent,
  handlePostPasswordValid,
  handlePutUserInfo,
}) => {
  const [access, setAccess] = useState(false); // 비밀번호를 통한 1차 인증
  const [field, setField] = useState({
    userid: "",
    name: "",
    phone: "",
    firstEmail: "",
    lastEmail: "",
    emailList: "직접 입력",
  });
  const [password, setPassword] = useState("");

  const updateField = useCallback((name, value) => {
    setField((old) => ({
      ...old,
      [name]: value,
    }));
  }, []);

  useEffect(() => {
    if (userInfo.data) {
      updateField("userid", userInfo.data.userid);
      updateField("name", userInfo.data.name);
      updateField("phone", userInfo.data.phone);
      updateField("firstEmail", userInfo.data.email.split("@")[0]);
      updateField("lastEmail", userInfo.data.email.split("@")[1]);
    }
  }, [updateField, userInfo]);

  const handleAccessSubmit = useCallback(
    (e) => {
      e.preventDefault();
      handlePostPasswordValid(password).then((res) => {
        if (res.data) setAccess(true);
        else {
          alert("비밀번호가 틀렸습니다. 다시 확인해주세요");
          setPassword("");
        }
      });
    },
    [handlePostPasswordValid, password]
  );

  const handleUserInfo = useCallback(() => {
    handlePutUserInfo(field).then((res) => {
      if (res.success) {
        alert("변경되었습니다.");
        history.push("/");
      } else {
        alert("오류가 발생하였습니다. 다시 시도해 주세요.");
      }
    });
  }, [field, handlePutUserInfo, history]);

  return (
    <Wrapper className="container">
      <h1>회원정보 수정</h1>

      {!access ? (
        <StyledConfirmPassword onSubmit={handleAccessSubmit}>
          {/* 비밀번호를 통해 접근 가능한지 확인 */}

          <p>계속하려면 먼저 본인임을 인증하세요.</p>
          <TextField
            className="password"
            label="비밀번호 입력"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="button"
            color="primary"
            variant="contained"
            htmltype="submit"
          >
            확인
          </Button>

          <Link to="modify-password" className="modify-password">
            <span>비밀번호 변경하기</span>
          </Link>
        </StyledConfirmPassword>
      ) : (
        userInfo.data && (
          <StyeldModifyUser>
            {/* 회원정보 수정 */}
            <TextField
              className="input"
              label="아이디"
              variant="outlined"
              value={field.userid}
              disabled
            />

            <TextField
              className="input"
              label="이름"
              variant="outlined"
              value={field.name}
              disabled
            />

            <TextField
              className="input"
              label="휴대폰 번호"
              variant="outlined"
              value={field.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />

            <div className="email">
              <TextField
                className="input"
                label="이메일"
                variant="outlined"
                value={field.firstEmail}
                onChange={(e) => updateField("firstEmail", e.target.value)}
              />
              <span>@</span>
              <TextField
                className="input"
                variant="outlined"
                value={field.lastEmail}
                onChange={(e) => updateField("lastEmail", e.target.value)}
              />
              <FormControl className="select" variant="outlined">
                <InputLabel id="dropdown">주소</InputLabel>
                <Select
                  labelId="dropdown"
                  onChange={(event) => {
                    updateField("emailList", event.target.value);
                    updateField("lastEmail", event.target.value);
                  }}
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

            <Button
              className="button"
              color="primary"
              variant="contained"
              onClick={handleUserInfo}
            >
              변경하기
            </Button>
          </StyeldModifyUser>
        )
      )}
    </Wrapper>
  );
};

export default ModifyUserInfoPage;
