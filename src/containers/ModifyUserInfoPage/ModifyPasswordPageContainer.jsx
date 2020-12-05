import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModifyPasswordPage from "../../components/views/ModifyUserInfoPage/ModifyPasswordPage";

const ModifyPasswordPageContainer = ({ history, match }) => {
  return <ModifyPasswordPage />;
};

export default ModifyPasswordPageContainer;
