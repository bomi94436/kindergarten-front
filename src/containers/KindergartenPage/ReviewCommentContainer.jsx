import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewComment from "src/components/views/KindergartenPage/ReviewComment";
import {
  deleteReviewsComments,
  getComment,
  postReviewsComments,
  putReviewsComments,
} from "../../modules/reducers/review";

const ReviewCommentContainer = ({ loggedInfo, reviewId, reviewWriter }) => {
  const {
    reviewComment,
    writeReviewsComments,
    removeReviewsComments,
    updateReviewsComments,
  } = useSelector((state) => state.reviewState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment([reviewId]));
  }, [
    dispatch,
    reviewId,
    writeReviewsComments.data,
    removeReviewsComments.loading,
    updateReviewsComments.loading,
  ]);

  const handlePostReviewComment = useCallback(
    (loggedInfo, desc) => {
      const body = {
        writer: loggedInfo.userid,
        desc,
      };

      return dispatch(postReviewsComments([reviewId, body]));
    },
    [dispatch, reviewId]
  );

  const handlePutReviewComment = useCallback(
    (commentId, desc) => {
      const body = {
        desc,
      };
      dispatch(putReviewsComments([commentId, body]));
    },
    [dispatch]
  );

  const handleDeleteReviewComment = useCallback(
    (commentId) => dispatch(deleteReviewsComments([commentId])),
    [dispatch]
  );

  return (
    <ReviewComment
      loggedInfo={loggedInfo}
      comment={reviewComment}
      reviewWriter={reviewWriter}
      handlePostReviewComment={handlePostReviewComment}
      handlePutReviewComment={handlePutReviewComment}
      handleDeleteReviewComment={handleDeleteReviewComment}
    />
  );
};

export default ReviewCommentContainer;
