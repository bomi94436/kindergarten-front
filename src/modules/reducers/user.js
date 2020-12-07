import produce from "immer";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions, reducerUtils } from "./utils";

const GET_USER = "review/GET_USER";
const GET_USER_SUCCESS = "review/GET_USER_SUCCESS";
const GET_USER_FAILURE = "review/GET_USER_FAILURE";

const GET_STUDENT = "review/GET_STUDENT";
const GET_STUDENT_SUCCESS = "review/GET_STUDENT_SUCCESS";
const GET_STUDENT_FAILURE = "review/GET_STUDENT_FAILURE";

const POST_PASSWORD_VALID = "review/POST_PASSWORD_VALID";
const POST_PASSWORD_VALID_SUCCESS = "review/POST_PASSWORD_VALID_SUCCESS";
const POST_PASSWORD_VALID_FAILURE = "review/POST_PASSWORD_VALID_FAILURE";

const PUT_USER = "review/PUT_USER";
const PUT_USER_SUCCESS = "review/PUT_USER_SUCCESS";
const PUT_USER_FAILURE = "review/PUT_USER_FAILURE";

export const userState = {
  userInfo: reducerUtils.initial(),
  userStudent: reducerUtils.initial(),
  checkPasswordValid: reducerUtils.initial(),
  modifyUserInfo: reducerUtils.initial(),
};

export const getUser = createPromiseThunk(GET_USER, api.getUser);

export const getStudent = createPromiseThunk(GET_STUDENT, api.getStudent);

export const postPasswordValid = createPromiseThunk(
  POST_PASSWORD_VALID,
  api.postPasswordValid
);

export const putUser = createPromiseThunk(PUT_USER, api.putUser);

const user = (state = userState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_USER:
      case GET_USER_SUCCESS:
      case GET_USER_FAILURE:
        handleAsyncActions(GET_USER, "userInfo")(draft.userState, action);
        break;

      case GET_STUDENT:
      case GET_STUDENT_SUCCESS:
      case GET_STUDENT_FAILURE:
        handleAsyncActions(GET_STUDENT, "userStudent")(draft.userState, action);
        break;

      case POST_PASSWORD_VALID:
      case POST_PASSWORD_VALID_SUCCESS:
      case POST_PASSWORD_VALID_FAILURE:
        handleAsyncActions(POST_PASSWORD_VALID, "checkPasswordValid")(
          draft.userState,
          action
        );
        break;

      case PUT_USER:
      case PUT_USER_SUCCESS:
      case PUT_USER_FAILURE:
        handleAsyncActions(PUT_USER, "modifyUserInfo")(draft.userState, action);
        break;

      default:
        break;
    }
  });

export default user;
