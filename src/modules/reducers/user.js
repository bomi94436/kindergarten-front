import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../../modules/initState";
import * as api from "../../utils/api";
import { validateRegister } from "../../utils/validation";

/* 
  회원가입 필드 입력
*/
const SET_REGISTER = "user/SET_REGISTER";

const SET_REGISTER_SEARCH = "user/SET_REGISTER_SEARCH";

/* 
  회원가입 버튼 클릭
*/
const POST_REGISTER = "user/POST_REGISTER";
const POST_REGISTER_SUCCESS = "user/POST_REGISTER_SUCCESS";
const POST_REGISTER_FAILURE = "user/POST_REGISTER_FAILURE";

/* 
  회원가입 아이디 중복 확인
*/
const GET_EXISTID = "user/GET_EXISTID";
const GET_EXISTID_SUCCESS = "user/GET_EXISTID_SUCCESS";
const GET_EXISTID_FAILURE = "user/GET_EXISTID_FAILURE";

/* 
  회원가입 유치원 검색
*/
const GET_REGISTER_SEARCH = "user/GET_REGISTER_SEARCH";
const GET_REGISTER_SEARCH_SUCCESS = "user/GET_REGISTER_SEARCH_SUCCESS";
const GET_REGISTER_SEARCH_FAILURE = "user/GET_REGISTER_SEARCH_FAILURE";

export const setRegister = createAction(SET_REGISTER, (data) => data);
export const setRegisterSearch = createAction(
  SET_REGISTER_SEARCH,
  (data) => data
);

export const postRegister = (dataToSubmit, path) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  try {
    const response = await api.register(dataToSubmit, path);

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
  }
};

export const getExistId = (id) => async (dispatch) => {
  dispatch({ type: GET_EXISTID });
  try {
    const response = await api.existid(id);

    if (response.success) {
      dispatch({
        type: GET_EXISTID_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: GET_EXISTID_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({ type: GET_EXISTID_FAILURE, payload: e, error: true });
  }
};

export const getRegisterSearch = (type, value, page) => async (dispatch) => {
  dispatch({ type: GET_REGISTER_SEARCH });
  try {
    const response = await api.searchKindergarten(type, value, page);

    if (response.success) {
      dispatch({
        type: GET_REGISTER_SEARCH_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: GET_REGISTER_SEARCH_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({ type: GET_REGISTER_SEARCH_FAILURE, payload: e, error: true });
  }
};

const user = handleActions(
  {
    [SET_REGISTER]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.register.value[name] = value;

        let stateValue = draft.register.value;
        let stateValid = draft.register.valid;

        if (name === "emailList") {
          stateValue.lastEmail = value;
          if (value === "직접 입력") {
            stateValue.lastEmail = "";
          }
        }
        if (name === "rePassword") {
          stateValid[name] = validateRegister(name, value, stateValue.password);
        } else if (name === "emailList") {
          stateValid.lastEmail = validateRegister(name, stateValue.lastEmail);
        } else if (
          name === "userid" &&
          stateValid.checkDuplication.checked &&
          value !== stateValid.checkDuplication.id
        ) {
          stateValid.checkDuplication.checked = false;
        } else {
          stateValid[name] = validateRegister(name, value);
        }
      });
    },

    [SET_REGISTER_SEARCH]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.register.search[name] = value;
        if (name === "selected") {
          draft.register.search.opened = false;
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

    [GET_EXISTID]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_EXISTID = true;
      }),
    [GET_EXISTID_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_EXISTID = false;
        draft.register.valid.checkDuplication.checked = true;
        draft.register.valid.checkDuplication.id = draft.register.value.userid;
      }),
    [GET_EXISTID_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_EXISTID = false;
        draft.register.valid.checkDuplication.checked = false;
      }),

    [GET_REGISTER_SEARCH]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_REGISTER_SEARCH = true;
      }),
    [GET_REGISTER_SEARCH_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_REGISTER_SEARCH = false;
        draft.register.search.contents =
          action.payload.response.data.kinderGartens;
        draft.register.search.page.current =
          action.payload.response.data.currentpage;
        draft.register.search.page.total =
          action.payload.response.data.totalPage;
      }),
    [GET_REGISTER_SEARCH_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_REGISTER_SEARCH = false;
      }),
  },
  initState
);

export default user;
