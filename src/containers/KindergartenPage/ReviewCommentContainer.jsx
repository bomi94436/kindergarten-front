import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReviewComment from "src/components/views/KindergartenPage/ReviewComment";
import { getComment, postReviewsComments } from "../../modules/reducers/review";

const ReviewCommentContainer = ({ userid, reviewId, reviewWriter }) => {
  const { reviewComment, writeReviewsComments } = useSelector(
    (state) => state.reviewState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComment([reviewId]));
  }, [dispatch, reviewId, writeReviewsComments.data]);

  const handleWriteReviewComment = useCallback(
    (userid, desc) => {
      const body = {
        writer: userid,
        desc,
      };

      return dispatch(postReviewsComments([reviewId, body]));
    },
    [dispatch, reviewId]
  );

  return (
    <ReviewComment
      userid={userid}
      comment={reviewComment}
      reviewWriter={reviewWriter}
      handleWriteReviewComment={handleWriteReviewComment}
    />
  );
};

export default ReviewCommentContainer;
