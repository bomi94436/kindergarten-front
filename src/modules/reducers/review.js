import produce from "immer";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions, reducerUtils } from "./utils";

const GET_STUDENT_LIST = "review/GET_STUDENT_LIST";
const GET_STUDENT_LIST_SUCCESS = "review/GET_STUDENT_LIST_SUCCESS";
const GET_STUDENT_LIST_FAILURE = "review/GET_STUDENT_LIST_FAILURE";

const GET_CHECK_WRITE_REVIEW = "review/GET_CHECK_WRITE_REVIEW";
const GET_CHECK_WRITE_REVIEW_SUCCESS = "review/GET_CHECK_WRITE_REVIEW_SUCCESS";
const GET_CHECK_WRITE_REVIEW_FAILURE = "review/GET_CHECK_WRITE_REVIEW_FAILURE";

const GET_COMMENT = "review/GET_COMMENT";
const GET_COMMENT_SUCCESS = "review/GET_COMMENT_SUCCESS";
const GET_COMMENT_FAILURE = "review/GET_COMMENT_FAILURE";

const POST_REVIEWS = "review/POST_REVIEWS";
const POST_REVIEWS_SUCCESS = "review/POST_REVIEWS_SUCCESS";
const POST_REVIEWS_FAILURE = "review/POST_REVIEWS_FAILURE";

const POST_REVIEWS_COMMENTS = "review/POST_REVIEWS_COMMENTS";
const POST_REVIEWS_COMMENTS_SUCCESS = "review/POST_REVIEWS_COMMENTS_SUCCESS";
const POST_REVIEWS_COMMENTS_FAILURE = "review/POST_REVIEWS_COMMENTS_FAILURE";

const PUT_REVIEWS_COMMENTS = "review/PUT_REVIEWS_COMMENTS";
const PUT_REVIEWS_COMMENTS_SUCCESS = "review/PUT_REVIEWS_COMMENTS_SUCCESS";
const PUT_REVIEWS_COMMENTS_FAILURE = "review/PUT_REVIEWS_COMMENTS_FAILURE";

const DELETE_REVIEWS = "review/DELETE_REVIEWS";
const DELETE_REVIEWS_SUCCESS = "review/DELETE_REVIEWS_SUCCESS";
const DELETE_REVIEWS_FAILURE = "review/DELETE_REVIEWS_FAILURE";

const DELETE_REVIEWS_COMMENTS = "review/DELETE_REVIEWS_COMMENTS";
const DELETE_REVIEWS_COMMENTS_SUCCESS =
  "review/DELETE_REVIEWS_COMMENTS_SUCCESS";
const DELETE_REVIEWS_COMMENTS_FAILURE =
  "review/DELETE_REVIEWS_COMMENTS_FAILURE";

export const reviewState = {
  checkWriteReview: reducerUtils.initial(),
  studentList: reducerUtils.initial(),
  reviewComment: reducerUtils.initial(),
  writeReviews: reducerUtils.initial(),
  writeReviewsComments: reducerUtils.initial(),
  updateReviewsComments: reducerUtils.initial(),
  removeReviews: reducerUtils.initial(),
  removeReviewsComments: reducerUtils.initial(),
};

export const getStudentList = createPromiseThunk(
  GET_STUDENT_LIST,
  api.reviewStudentList
);

export const getCheckWriteReview = createPromiseThunk(
  GET_CHECK_WRITE_REVIEW,
  api.checkWriteReview
);

export const getComment = createPromiseThunk(GET_COMMENT, api.getComment);

export const postReviews = createPromiseThunk(POST_REVIEWS, api.postReviews);

export const postReviewsComments = createPromiseThunk(
  POST_REVIEWS_COMMENTS,
  api.postReviewsComments
);

export const putReviewsComments = createPromiseThunk(
  PUT_REVIEWS_COMMENTS,
  api.putReviewsComments
);

export const deleteReviews = createPromiseThunk(
  DELETE_REVIEWS,
  api.deleteReviews
);

export const deleteReviewsComments = createPromiseThunk(
  DELETE_REVIEWS_COMMENTS,
  api.deleteReviewsComments
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

      case GET_COMMENT:
      case GET_COMMENT_SUCCESS:
      case GET_COMMENT_FAILURE:
        handleAsyncActions(GET_COMMENT, "reviewComment")(
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

      case POST_REVIEWS_COMMENTS:
      case POST_REVIEWS_COMMENTS_SUCCESS:
      case POST_REVIEWS_COMMENTS_FAILURE:
        handleAsyncActions(POST_REVIEWS_COMMENTS, "writeReviewsComments")(
          draft.reviewState,
          action
        );
        break;

      case PUT_REVIEWS_COMMENTS:
      case PUT_REVIEWS_COMMENTS_SUCCESS:
      case PUT_REVIEWS_COMMENTS_FAILURE:
        handleAsyncActions(PUT_REVIEWS_COMMENTS, "updateReviewsComments")(
          draft.reviewState,
          action
        );
        break;

      case DELETE_REVIEWS:
      case DELETE_REVIEWS_SUCCESS:
      case DELETE_REVIEWS_FAILURE:
        handleAsyncActions(DELETE_REVIEWS, "removeReviews")(
          draft.reviewState,
          action
        );
        break;

      case DELETE_REVIEWS_COMMENTS:
      case DELETE_REVIEWS_COMMENTS_SUCCESS:
      case DELETE_REVIEWS_COMMENTS_FAILURE:
        handleAsyncActions(DELETE_REVIEWS_COMMENTS, "removeReviewsComments")(
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
