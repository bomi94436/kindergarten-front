import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState, { addStudent } from "../initState";
import * as api from "../../utils/api";
import { validateRegister } from "../../utils/validation";

/* 
  회원가입 필드 입력
*/
const SET_REGISTER = "register/SET_REGISTER";
const SET_REGISTER_SEARCH = "register/SET_REGISTER_SEARCH";

/* 
  회원 역할에 맞는 validation 설정
*/
const SET_REGISTER_VALID = "register/SET_REGISTER_VALID";

/* 
  회원가입 버튼 클릭
*/
const POST_REGISTER = "register/POST_REGISTER";
const POST_REGISTER_SUCCESS = "register/POST_REGISTER_SUCCESS";
const POST_REGISTER_FAILURE = "register/POST_REGISTER_FAILURE";

/* 
  회원가입 아이디 중복 확인
*/
const GET_EXISTID = "register/GET_EXISTID";
const GET_EXISTID_SUCCESS = "register/GET_EXISTID_SUCCESS";
const GET_EXISTID_FAILURE = "register/GET_EXISTID_FAILURE";

/* 
  회원가입 유치원 검색
*/
const GET_REGISTER_SEARCH = "register/GET_REGISTER_SEARCH";
const GET_REGISTER_SEARCH_SUCCESS = "register/GET_REGISTER_SEARCH_SUCCESS";
const GET_REGISTER_SEARCH_FAILURE = "register/GET_REGISTER_SEARCH_FAILURE";

export const setRegister = createAction(SET_REGISTER, (data) => data);

export const setRegisterSearch = createAction(
  SET_REGISTER_SEARCH,
  (data) => data
);

export const setRegisterValid = createAction(
  SET_REGISTER_VALID,
  (data) => data
);

export const postRegister = (dataToSubmit) => async (dispatch) => {
  dispatch({ type: POST_REGISTER });
  try {
    const response = await api.register(dataToSubmit);

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
    const response = await api.searchKindergartens(type, value, page);

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

const register = handleActions(
  {
    [SET_REGISTER]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const actor = action.payload.actor;
      const index = action.payload.index;

      return produce(state, (draft) => {
        if (actor === "student") {
          draft.register.students[index].value[name] = value;
          draft.register.students[index].valid[name] = validateRegister(
            name,
            value
          );
          return;
        }

        draft.register.value[name] = value;

        let stateValue = draft.register.value;
        let stateValid = draft.register.valid;

        switch (name) {
          case "emailList":
            stateValue.lastEmail = value;
            if (value === "직접 입력") {
              stateValue.lastEmail = "";
            }
            stateValid.lastEmail = validateRegister(
              "lastEmail",
              stateValue.lastEmail
            );
            break;

          case "rePassword":
            stateValid[name] = validateRegister(
              name,
              value,
              stateValue.password
            );
            break;

          default:
            if (
              name === "userid" &&
              stateValid.checkDuplication.checked &&
              value !== stateValid.checkDuplication.id
            ) {
              stateValid.checkDuplication.checked = false;
            }
            stateValid[name] = validateRegister(name, value);
            break;
        }
      });
    },

    [SET_REGISTER_VALID]: (state, action) => {
      const actor = action.payload.actor;
      const act = action.payload.act;
      const index = action.payload.index;

      return produce(state, (draft) => {
        let students = draft.register.students;

        if (act === "set") {
          switch (actor) {
            case "user":
              delete draft.register.valid.kindergarten_id;
              break;

            case "teacher":
            case "director":
              if (!draft.register.search.selected.id) {
                draft.register.valid.kindergarten_id = null;
              }
              draft.register.students = [];
              break;

            default:
              break;
          }
        } else if (act === "insert" && actor === "user") {
          students.push(addStudent());
        } else if (act === "delete" && actor === "user") {
          students.splice(index, 1);
        }
      });
    },

    [SET_REGISTER_SEARCH]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;
      const actor = action.payload.actor;
      const index = action.payload.index;

      return produce(state, (draft) => {
        draft.register.search[name] = value;

        switch (actor) {
          case "student":
            if (name === "selected") {
              draft.register.students[index].value.kindergarten_id = value.id;
              draft.register.students[index].kindergarten_selected = value;
              draft.register.students[index].valid.kindergarten_id = true;
              draft.register.search.opened = false;
            }
            break;

          default:
            if (name === "selected") {
              draft.register.valid.kindergarten_id = true;
              draft.register.search.opened = false;
            }
            break;
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
        draft.register = initState.register;
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
        let stateSearch = draft.register.search;

        draft.loading.GET_REGISTER_SEARCH = false;
        stateSearch.contents = action.payload.response.data.kinderGartens;
        stateSearch.page.current = action.payload.response.data.currentpage;
        stateSearch.page.total = action.payload.response.data.totalPage;
      }),
    [GET_REGISTER_SEARCH_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_REGISTER_SEARCH = false;
      }),
  },
  initState
);

export default register;
