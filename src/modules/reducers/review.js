import { handleActions, createAction } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions } from "./utils";

const SET_REVIEW = "review/SET_REVIEW";

const GET_STUDENT_LIST = "review/GET_STUDENT_LIST";
const GET_STUDENT_LIST_SUCCESS = "review/GET_STUDENT_LIST_SUCCESS";
const GET_STUDENT_LIST_FAILURE = "review/GET_STUDENT_LIST_FAILURE";

const GET_CHECK_WRITE_REVIEW = "review/GET_CHECK_WRITE_REVIEW";
const GET_CHECK_WRITE_REVIEW_SUCCESS = "review/GET_CHECK_WRITE_REVIEW_SUCCESS";
const GET_CHECK_WRITE_REVIEW_FAILURE = "review/GET_CHECK_WRITE_REVIEW_FAILURE";

export const setReview = createAction(SET_REVIEW, (data) => data);

export const getStudentList = createPromiseThunk(
  GET_STUDENT_LIST,
  api.reviewStudentList
);

export const getCheckWriteReview = createPromiseThunk(
  GET_CHECK_WRITE_REVIEW,
  api.checkWriteReview
);

// export const getCheckWriteReview = (kindergarten_id, student_id) => async (
//   dispatch
// ) => {
//   dispatch({ type: GET_CHECK_WRITE_REVIEW });
//   try {
//     const response = await api.checkWriteReview(kindergarten_id, student_id);

//     if (response.success) {
//       dispatch({
//         type: GET_CHECK_WRITE_REVIEW_SUCCESS,
//         payload: {
//           response,
//         },
//       });
//     } else {
//       dispatch({
//         type: GET_CHECK_WRITE_REVIEW_FAILURE,
//         payload: {
//           response,
//         },
//       });
//     }

//     return response;
//   } catch (e) {
//     dispatch({
//       type: GET_CHECK_WRITE_REVIEW_FAILURE,
//       payload: e,
//       error: true,
//     });
//   }
// };

const review = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDENT_LIST:
      case GET_STUDENT_LIST_SUCCESS:
      case GET_STUDENT_LIST_FAILURE:
        handleAsyncActions(GET_STUDENT_LIST, "studentList")(draft, action);
        break;

      case GET_CHECK_WRITE_REVIEW:
      case GET_CHECK_WRITE_REVIEW_SUCCESS:
      case GET_CHECK_WRITE_REVIEW_FAILURE:
        handleAsyncActions(GET_CHECK_WRITE_REVIEW, "checkWriteReview")(
          draft,
          action
        );
        break;

      default:
        break;
    }
  });
};

// const review = handleActions(
//   {
//     [SET_REVIEW]: (state, action) => {
//       const target = action.payload.target;
//       const name = action.payload.name;
//       const value = action.payload.value;

//       return produce(state, (draft) => {
//         draft.review[target][name] = value;
//       });
//     },

//     [GET_STUDENT_LIST]: (state) =>
//       produce(state, (draft) => {
//         draft.loading.GET_STUDENT_LIST = true;
//       }),
//     [GET_STUDENT_LIST_SUCCESS]: (state, action) =>
//       produce(state, (draft) => {
//         draft.loading.GET_STUDENT_LIST = false;
//       }),
//     [GET_STUDENT_LIST_FAILURE]: (state) =>
//       produce(state, (draft) => {
//         draft.loading.GET_STUDENT_LIST = false;
//       }),

//     [GET_CHECK_WRITE_REVIEW]: (state) =>
//       produce(state, (draft) => {
//         draft.loading.GET_CHECK_WRITE_REVIEW = true;
//       }),
//     [GET_CHECK_WRITE_REVIEW_SUCCESS]: (state, action) =>
//       produce(state, (draft) => {
//         draft.loading.GET_CHECK_WRITE_REVIEW = false;
//       }),
//     [GET_CHECK_WRITE_REVIEW_FAILURE]: (state) =>
//       produce(state, (draft) => {
//         draft.loading.GET_CHECK_WRITE_REVIEW = false;
//       }),
//   },
//   initState
// );

export default review;
