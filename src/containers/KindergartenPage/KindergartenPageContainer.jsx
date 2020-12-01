import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import KinderagartenPage from "../../components/views/KindergartenPage/KindergartenPage";
import {
  getKindergartenDetail,
  getKindergartenReview,
} from "../../modules/reducers/kindergarten";
import { getStudentList } from "../../modules/reducers/review";

const KindergartenPageContainer = ({ history, match }) => {
  const { kindergartenDetail, kindergartenReview } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getKindergartenDetail([match.params.id]));
    dispatch(getKindergartenReview([match.params.id]));
  }, [dispatch, match.params.id]);

  return (
    <KinderagartenPage
      detail={kindergartenDetail}
      reviews={kindergartenReview}
      getStudentList={getStudentList}
    />
  );
};

export default KindergartenPageContainer;
