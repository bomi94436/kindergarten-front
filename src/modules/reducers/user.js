import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../../modules/initState";
import * as api from "../../utils/api";

const SET_REGISTER = "user/SET_REGISTER";

const POST_REGISTER = "user/POST_REGISTER";
const POST_REGISTER_SUCCESS = "user/POST_REGISTER_SUCCESS";
const POST_REGISTER_FAILURE = "user/POST_REGISTER_FAILURE";

export const setRegister = createAction(SET_REGISTER, (data) => data);

export const postRegister = (dataToSubmit, path) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  try {
    const response = await api.register(dataToSubmit, path);
    console.log(response);
    if (response.success) {
      dispatch({
        type: POST_REGISTER_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: POST_REGISTER_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({ type: POST_REGISTER_FAILURE, payload: e, error: true });
    console.log(e);
  }
};

const user = handleActions(
  {
    [SET_REGISTER]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.register.value[name] = value;
        if (name === "emailList") {
          draft.register.value.lastEmail = value;
          if (value === "직접 입력") {
            draft.register.value.lastEmail = "";
          }
        }
      });
    },

    [POST_REGISTER]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = true;
      }),
    [POST_REGISTER_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = false;
      }),
    [POST_REGISTER_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.POST_REGISTER = false;
      }),
  },
  initState
);

export default user;
