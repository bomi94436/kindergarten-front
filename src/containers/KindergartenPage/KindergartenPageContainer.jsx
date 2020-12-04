import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import KinderagartenPage from "../../components/views/KindergartenPage/KindergartenPage";
import {
  getKindergartenDetail,
  getKindergartenReview,
} from "../../modules/reducers/kindergarten";
import { postReviews } from "../../modules/reducers/review";

const KindergartenPageContainer = ({ history, match, role, userid }) => {
  const { kindergartenDetail, kindergartenReview } = useSelector(
    (state) => state
  );
  const { writeReviews } = useSelector((state) => state.reviewState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKindergartenDetail([match.params.id]));
    dispatch(getKindergartenReview([match.params.id]));
  }, [dispatch, match.params.id, writeReviews.loading]);

  const handlePostReviews = useCallback(
    (field) => {
      const body = {
        kinderGarten_id: field.kinderGarten_id,
        anonymous: field.anonymous,
        description: field.description,
        descScore: field.descScore,
        teacherScore: field.teacherScore,
        facilityScore: field.facilityScore,
        eduScore: field.eduScore,
        goodThing: field.goodThing,
        badThing: field.badThing,
      };

      return dispatch(postReviews([body]));
    },
    [dispatch]
  );

  return (
    <KinderagartenPage
      role={role}
      userid={userid}
      history={history}
      detail={kindergartenDetail}
      reviews={kindergartenReview}
      handlePostReviews={handlePostReviews}
    />
  );
};

export default KindergartenPageContainer;
