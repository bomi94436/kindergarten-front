import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStudent,
  getUser,
  postPasswordValid,
  putUser,
} from "src/modules/reducers/user";
import ModifyUserInfoPage from "../../components/views/ModifyUserInfoPage/ModifyUserInfoPage";

const ModifyUserInfoPageContainer = ({ history }) => {
  const { userInfo, userStudent } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser([]));
    dispatch(getStudent([])); //TODO:
  }, [dispatch]);

  const handlePostPasswordValid = useCallback(
    (password) => {
      const body = {
        password,
      };
      return dispatch(postPasswordValid([body]));
    },
    [dispatch]
  );

  const handlePutUserInfo = useCallback(
    (field) => {
      const body = {
        email: field.firstEmail + "@" + field.lastEmail,
        phone: field.phone,
        newpassword: "",
        password: "",
      };
      return dispatch(putUser([body]));
    },
    [dispatch]
  );

  return (
    <ModifyUserInfoPage
      history={history}
      userInfo={userInfo}
      userStudent={userStudent}
      handlePostPasswordValid={handlePostPasswordValid}
      handlePutUserInfo={handlePutUserInfo}
    />
  );
};

export default ModifyUserInfoPageContainer;
