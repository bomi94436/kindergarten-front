import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ModifyUserInfoPage from "../../components/views/ModifyUserInfoPage/ModifyUserInfoPage";

const ModifyUserInfoPageContainer = ({ history, match }) => {
  return <ModifyUserInfoPage />;
};

export default ModifyUserInfoPageContainer;
