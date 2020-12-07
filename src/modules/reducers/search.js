import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";

/*
    유치원 검색 필드 입력
*/
const SET_SEARCH = "search/SET_SEARCH";

/*
    유치원 검색
*/
const GET_SEARCH = "search/GET_SEARCH";
const GET_SEARCH_SUCCESS = "search/GET_SEARCH_SUCCESS";
const GET_SEARCH_FAILURE = "search/GET_SEARCH_FAILURE";

export const setSearch = createAction(SET_SEARCH, (data) => data);

export const getSearch = (type, value, page) => async (dispatch) => {
  dispatch({ type: GET_SEARCH });
  try {
    const response = await api.searchKindergartens(type, value, page);

    if (response.success) {
      dispatch({
        type: GET_SEARCH_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: GET_SEARCH_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({ type: GET_SEARCH_FAILURE, payload: e, error: true });
  }
};

const search = handleActions(
  {
    [SET_SEARCH]: (state, action) => {
      const name = action.payload.name;
      const value = action.payload.value;

      return produce(state, (draft) => {
        draft.search[name] = value;
      });
    },

    [GET_SEARCH]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_SEARCH = true;
      }),
    [GET_SEARCH_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_SEARCH = false;
        draft.search.contents = action.payload.response.data.kinderGartens;
        draft.search.page.current = action.payload.response.data.currentpage;
        draft.search.page.total = action.payload.response.data.totalPage;
      }),
    [GET_SEARCH_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_SEARCH = false;
      }),
  },
  initState
);

export default search;
