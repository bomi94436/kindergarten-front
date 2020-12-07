import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, putUser } from "src/modules/reducers/user";
import ModifyPasswordPage from "../../components/views/ModifyUserInfoPage/ModifyPasswordPage";

const ModifyPasswordPageContainer = ({ history, match }) => {
  const { userInfo } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser([]));
  }, [dispatch]);

  const handlePutUser = useCallback(
    (password, newpassword) => {
      const body = {
        email: userInfo.data?.email,
        phone: userInfo.data?.phone,
        password,
        newpassword,
      };
      return dispatch(putUser([body]));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch, userInfo.data?.email, userInfo.data?.phone]
  );

  return <ModifyPasswordPage history={history} handlePutUser={handlePutUser} />;
};

export default ModifyPasswordPageContainer;
