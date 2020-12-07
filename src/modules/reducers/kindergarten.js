import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions } from "./utils";

const GET_KINDERGARTEN_DETAIL = "GET_KINDERGARTEN_DETAIL";
const GET_KINDERGARTEN_DETAIL_SUCCESS = "GET_KINDERGARTEN_DETAIL_SUCCESS";
const GET_KINDERGARTEN_DETAIL_FAILURE = "GET_KINDERGARTEN_DETAIL_FAILURE";

const GET_KINDERGARTEN_REVIEW = "GET_KINDERGARTEN_REVIEW";
const GET_KINDERGARTEN_REVIEW_SUCCESS = "GET_KINDERGARTEN_REVIEW_SUCCESS";
const GET_KINDERGARTEN_REVIEW_FAILURE = "GET_KINDERGARTEN_REVIEW_FAILURE";

export const getKindergartenDetail = createPromiseThunk(
  GET_KINDERGARTEN_DETAIL,
  api.kindergartenDetail
);

export const getKindergartenReview = createPromiseThunk(
  GET_KINDERGARTEN_REVIEW,
  api.kindergartenReview
);

const kindergarten = (state = initState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_KINDERGARTEN_DETAIL:
      case GET_KINDERGARTEN_DETAIL_SUCCESS:
      case GET_KINDERGARTEN_DETAIL_FAILURE:
        handleAsyncActions(GET_KINDERGARTEN_DETAIL, "kindergartenDetail")(
          draft,
          action
        );
        break;

      case GET_KINDERGARTEN_REVIEW:
      case GET_KINDERGARTEN_REVIEW_SUCCESS:
      case GET_KINDERGARTEN_REVIEW_FAILURE:
        handleAsyncActions(GET_KINDERGARTEN_REVIEW, "kindergartenReview")(
          draft,
          action
        );
        break;

      default:
        break;
    }
  });
};

export default kindergarten;
