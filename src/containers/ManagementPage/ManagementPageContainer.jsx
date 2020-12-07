import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStudentInAdmin,
  getTeacherInAdmin,
  putManagementStudent,
  putManagementTeacher,
  getDirectorInAdmin,
} from "src/modules/reducers/management";
import ManagementPage from "../../components/views/ManagementPage/ManagementPage";

const ManagementPageContainer = ({ history, match, role }) => {
  const [typeIndex, setTypeIndex] = useState(0); // 0 - 학생, 1 - 선생, 2 - 원장
  const {
    readStudentInAdmin,
    readTeacherInAdmin,
    readDirectorInAdmin,
    accessStudent,
    accessTeacher,
    accessDirector,
  } = useSelector((state) => state.managementState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeIndex === 0) {
      dispatch(getStudentInAdmin([]));
    } else if (typeIndex === 1) {
      dispatch(getTeacherInAdmin([]));
    } else if (typeIndex === 2) {
      dispatch(getDirectorInAdmin([]));
    }
  }, [
    dispatch,
    typeIndex,
    accessStudent.data,
    accessTeacher.data,
    accessDirector.data,
  ]);

  const handleAccessStudent = useCallback(
    (studentId) => dispatch(putManagementStudent([studentId])),
    [dispatch]
  );

  const handleAccessTeacher = useCallback(
    (teacherId) => dispatch(putManagementTeacher([teacherId])),
    [dispatch]
  );

  const handleAccessDirector = useCallback(
    (directorId) => dispatch(putManagementTeacher([directorId])),
    [dispatch]
  );

  return (
    <ManagementPage
      history={history}
      typeIndex={typeIndex}
      setTypeIndex={setTypeIndex}
      students={readStudentInAdmin}
      teachers={readTeacherInAdmin}
      directors={readDirectorInAdmin}
      handleAccessStudent={handleAccessStudent}
      handleAccessTeacher={handleAccessTeacher}
      handleAccessDirector={handleAccessDirector}
    />
  );
};

export default ManagementPageContainer;
