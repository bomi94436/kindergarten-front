import { handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";

const GET_KINDERGARTEN_DETAIL = "kindergarten/GET_KINDERGARTEN_DETAIL";
const GET_KINDERGARTEN_DETAIL_SUCCESS =
  "kindergarten/GET_KINDERGARTEN_DETAIL_SUCCESS";
const GET_KINDERGARTEN_DETAIL_FAILURE =
  "kindergarten/GET_KINDERGARTEN_DETAIL_FAILURE";

const GET_KINDERGARTEN_REVIEW = "kindergarten/GET_KINDERGARTEN_REVIEW";
const GET_KINDERGARTEN_REVIEW_SUCCESS =
  "kindergarten/GET_KINDERGARTEN_REVIEW_SUCCESS";
const GET_KINDERGARTEN_REVIEW_FAILURE =
  "kindergarten/GET_KINDERGARTEN_REVIEW_FAILURE";

export const getKindergartenDetail = (id) => async (dispatch) => {
  dispatch({ type: GET_KINDERGARTEN_DETAIL });
  try {
    const response = await api.kindergartenDetail(id);

    if (response.success) {
      dispatch({
        type: GET_KINDERGARTEN_DETAIL_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: GET_KINDERGARTEN_DETAIL_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({
      type: GET_KINDERGARTEN_DETAIL_FAILURE,
      payload: e,
      error: true,
    });
  }
};

export const getKindergartenReview = (id) => async (dispatch) => {
  dispatch({ type: GET_KINDERGARTEN_REVIEW });
  try {
    const response = await api.kindergartenReview(id);

    if (response.success) {
      dispatch({
        type: GET_KINDERGARTEN_REVIEW_SUCCESS,
        payload: {
          response,
        },
      });
    } else {
      dispatch({
        type: GET_KINDERGARTEN_REVIEW_FAILURE,
        payload: {
          response,
        },
      });
    }

    return response;
  } catch (e) {
    dispatch({
      type: GET_KINDERGARTEN_REVIEW_FAILURE,
      payload: e,
      error: true,
    });
  }
};

const kindergarten = handleActions(
  {
    [GET_KINDERGARTEN_DETAIL]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_DETAIL = true;
      }),
    [GET_KINDERGARTEN_DETAIL_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_DETAIL = false;
      }),
    [GET_KINDERGARTEN_DETAIL_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_DETAIL = false;
      }),

    [GET_KINDERGARTEN_REVIEW]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_REVIEW = true;
      }),
    [GET_KINDERGARTEN_REVIEW_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_REVIEW = false;
      }),
    [GET_KINDERGARTEN_REVIEW_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_KINDERGARTEN_REVIEW = false;
      }),
  },
  initState
);

export default kindergarten;
