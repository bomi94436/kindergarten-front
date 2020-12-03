import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectStudent from "../../components/views/KindergartenPage/SelectStudent";
import {
  getStudentList,
  getCheckWriteReview,
} from "../../modules/reducers/review";

const SelectStudentContainer = ({ updateField, nextStep }) => {
  const { studentList } = useSelector((state) => state.reviewState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentList([]));
  }, [dispatch]);

  const checkWriteReview = useCallback(
    (kindergarten_id, student_id) => {
      return dispatch(getCheckWriteReview([kindergarten_id, student_id]));
    },
    [dispatch]
  );

  return (
    <SelectStudent
      nextStep={nextStep}
      studentList={studentList}
      updateField={updateField}
      checkWriteReview={checkWriteReview}
    />
  );
};

export default SelectStudentContainer;
