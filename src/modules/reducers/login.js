import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions } from "./utils";

/* 
    로그인 버튼 클릭
*/
const POST_LOGIN = "login/POST_LOGIN";
const POST_LOGIN_SUCCESS = "login/POST_LOGIN_SUCCESS";
const POST_LOGIN_FAILURE = "login/POST_LOGIN_FAILURE";

export const postLogin = createPromiseThunk(POST_LOGIN, api.login);

const login = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case POST_LOGIN:
      case POST_LOGIN_SUCCESS:
      case POST_LOGIN_FAILURE:
        handleAsyncActions(POST_LOGIN, "login")(draft, action);
        break;

      default:
        break;
    }
  });
};

export default login;
