import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";
import { validateLogin } from "src/utils/validation";

/* 
    로그인 필드 입력
*/
const SET_LOGIN = "login/SET_LOGIN";

/* 
    로그인 버튼 클릭
*/
const POST_LOGIN = "login/POST_LOGIN";
const POST_LOGIN_SUCCESS = "login/POST_LOGIN_SUCCESS";
const POST_LOGIN_FAILURE = "login/POST_LOGIN_FAILURE";

export const setLogin = createAction(SET_LOGIN, (data) => data);

export const postLogin = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: POST_LOGIN });
  try {
    const response = await api.login(dataToSubmit);

    if (response.success) {
      dispatch({
        type: POST_LOGIN_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: POST_LOGIN_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({ type: POST_LOGIN_FAILURE, payload: e, error: true });
  }
};

const login = handleActions(
  {
    [SET_LOGIN]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.login.value[name] = value;
        draft.login.valid[name] = validateLogin(name, value);
      });
    },

    [POST_LOGIN]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_LOGIN = true;
      }),
    [POST_LOGIN_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.POST_LOGIN = false;
        console.log(action.payload.response);
        draft.login = initState.login;
      }),
    [POST_LOGIN_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_LOGIN = false;
      }),
  },
  initState
);

export default login;
