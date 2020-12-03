import produce from "immer";
import * as api from "../../utils/api";
import {
  createPostPromiseThunk,
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "./utils";

const GET_STUDENT_LIST = "review/GET_STUDENT_LIST";
const GET_STUDENT_LIST_SUCCESS = "review/GET_STUDENT_LIST_SUCCESS";
const GET_STUDENT_LIST_FAILURE = "review/GET_STUDENT_LIST_FAILURE";

const GET_CHECK_WRITE_REVIEW = "review/GET_CHECK_WRITE_REVIEW";
const GET_CHECK_WRITE_REVIEW_SUCCESS = "review/GET_CHECK_WRITE_REVIEW_SUCCESS";
const GET_CHECK_WRITE_REVIEW_FAILURE = "review/GET_CHECK_WRITE_REVIEW_FAILURE";

const POST_REVIEWS = "review/POST_REVIEWS";
const POST_REVIEWS_SUCCESS = "review/POST_REVIEWS_SUCCESS";
const POST_REVIEWS_FAILURE = "review/POST_REVIEWS_FAILURE";

export const reviewState = {
  checkWriteReview: reducerUtils.initial(),
  studentList: reducerUtils.initial(),
  writeReviews: reducerUtils.initial(),
};

export const getStudentList = createPromiseThunk(
  GET_STUDENT_LIST,
  api.reviewStudentList
);

export const getCheckWriteReview = createPromiseThunk(
  GET_CHECK_WRITE_REVIEW,
  api.checkWriteReview
);

export const postReviews = createPostPromiseThunk(
  POST_REVIEWS,
  api.postReviews
);

const review = (state = reviewState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDENT_LIST:
      case GET_STUDENT_LIST_SUCCESS:
      case GET_STUDENT_LIST_FAILURE:
        handleAsyncActions(GET_STUDENT_LIST, "studentList")(
          draft.reviewState,
          action
        );
        break;

      case GET_CHECK_WRITE_REVIEW:
      case GET_CHECK_WRITE_REVIEW_SUCCESS:
      case GET_CHECK_WRITE_REVIEW_FAILURE:
        handleAsyncActions(GET_CHECK_WRITE_REVIEW, "checkWriteReview")(
          draft.reviewState,
          action
        );
        break;

      case POST_REVIEWS:
      case POST_REVIEWS_SUCCESS:
      case POST_REVIEWS_FAILURE:
        handleAsyncActions(POST_REVIEWS, "writeReviews")(
          draft.reviewState,
          action
        );
        break;

      default:
        break;
    }
  });
};

export default review;
