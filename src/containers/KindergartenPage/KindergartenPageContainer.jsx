import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getManagementStudent,
  getManagementTeacher,
  putManagementStudent,
  putManagementTeacher,
} from "src/modules/reducers/management";
import KinderagartenPage from "../../components/views/KindergartenPage/KindergartenPage";
import {
  getKindergartenDetail,
  getKindergartenReview,
} from "../../modules/reducers/kindergarten";
import { postReviews, deleteReviews } from "../../modules/reducers/review";

const KindergartenPageContainer = ({ history, match, loggedInfo }) => {
  const [typeIndex, setTypeIndex] = useState(0); // 0 - 정보, 1 - 관리
  const { kindergartenDetail, kindergartenReview } = useSelector(
    (state) => state
  );
  const { writeReviews, removeReviews } = useSelector(
    (state) => state.reviewState
  );
  const {
    readStudent,
    readTeacher,
    accessStudent,
    accessTeacher,
  } = useSelector((state) => state.managementState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeIndex === 0) {
      dispatch(getKindergartenDetail([match.params.id]));
      dispatch(getKindergartenReview([match.params.id]));
    } else {
      dispatch(getManagementStudent([match.params.id]));
      dispatch(getManagementTeacher([match.params.id]));
    }
  }, [
    dispatch,
    match.params.id,
    writeReviews.loading,
    removeReviews.loading,
    typeIndex,
    accessStudent.loading,
    accessTeacher.loading,
  ]);

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

  const handleDeleteReviews = useCallback(
    (reviewId) => dispatch(deleteReviews([reviewId])),
    [dispatch]
  );

  const handleAccessStudent = useCallback(
    (studentId) => dispatch(putManagementStudent([studentId])),
    [dispatch]
  );

  const handleAccessTeacher = useCallback(
    (teacherId) => dispatch(putManagementTeacher([teacherId])),
    [dispatch]
  );

  return (
    <KinderagartenPage
      loggedInfo={loggedInfo}
      history={history}
      typeIndex={typeIndex}
      setTypeIndex={setTypeIndex}
      detail={kindergartenDetail}
      reviews={kindergartenReview}
      handlePostReviews={handlePostReviews}
      handleDeleteReviews={handleDeleteReviews}
      readStudent={readStudent}
      readTeacher={readTeacher}
      handleAccessStudent={handleAccessStudent}
      handleAccessTeacher={handleAccessTeacher}
    />
  );
};

export default KindergartenPageContainer;
