import produce from "immer";
import * as api from "../../utils/api";
import { createPromiseThunk, handleAsyncActions, reducerUtils } from "./utils";

const GET_STUDENT = "management/GET_STUDENT";
const GET_STUDENT_SUCCESS = "management/GET_STUDENT_SUCCESS";
const GET_STUDENT_FAILURE = "management/GET_STUDENT_FAILURE";

const GET_TEACHER = "management/GET_TEACHER";
const GET_TEACHER_SUCCESS = "management/GET_TEACHER_SUCCESS";
const GET_TEACHER_FAILURE = "management/GET_TEACHER_FAILURE";

const PUT_STUDENT = "management/PUT_STUDENT";
const PUT_STUDENT_SUCCESS = "management/PUT_STUDENT_SUCCESS";
const PUT_STUDENT_FAILURE = "management/PUT_STUDENT_FAILURE";

const PUT_TEACHER = "management/PUT_TEACHER";
const PUT_TEACHER_SUCCESS = "management/PUT_TEACHER_SUCCESS";
const PUT_TEACHER_FAILURE = "management/PUT_TEACHER_FAILURE";

const PUT_DIRECTOR = "management/PUT_DIRECTOR";
const PUT_DIRECTOR_SUCCESS = "management/PUT_DIRECTOR_SUCCESS";
const PUT_DIRECTOR_FAILURE = "management/PUT_DIRECTOR_FAILURE";

const GET_STUDENT_IN_ADMIN = "management/GET_STUDENT_IN_ADMIN";
const GET_STUDENT_IN_ADMIN_SUCCESS = "management/GET_STUDENT_IN_ADMIN_SUCCESS";
const GET_STUDENT_IN_ADMIN_FAILURE = "management/GET_STUDENT_IN_ADMIN_FAILURE";

const GET_TEACHER_IN_ADMIN = "management/GET_TEACHER_IN_ADMIN";
const GET_TEACHER_IN_ADMIN_SUCCESS = "management/GET_TEACHER_IN_ADMIN_SUCCESS";
const GET_TEACHER_IN_ADMIN_FAILURE = "management/GET_TEACHER_IN_ADMIN_FAILURE";

const GET_DIRECTOR_IN_ADMIN = "management/GET_DIRECTOR_IN_ADMIN";
const GET_DIRECTOR_IN_ADMIN_SUCCESS =
  "management/GET_DIRECTOR_IN_ADMIN_SUCCESS";
const GET_DIRECTOR_IN_ADMIN_FAILURE =
  "management/GET_DIRECTOR_IN_ADMIN_FAILURE";

export const managementState = {
  readStudent: reducerUtils.initial(),
  readTeacher: reducerUtils.initial(),
  accessStudent: reducerUtils.initial(),
  accessTeacher: reducerUtils.initial(),
  accessDirector: reducerUtils.initial(),
  readStudentInAdmin: reducerUtils.initial(),
  readTeacherInAdmin: reducerUtils.initial(),
  readDirectorInAdmin: reducerUtils.initial(),
};

export const getManagementStudent = createPromiseThunk(
  GET_STUDENT,
  api.getManagementStudent
);

export const getManagementTeacher = createPromiseThunk(
  GET_TEACHER,
  api.getManagementTeacher
);

export const putManagementStudent = createPromiseThunk(
  PUT_STUDENT,
  api.putManagementStudent
);

export const putManagementTeacher = createPromiseThunk(
  PUT_TEACHER,
  api.putManagementTeacher
);

export const putManagementDirector = createPromiseThunk(
  PUT_DIRECTOR,
  api.putManagementDirector
);

export const getStudentInAdmin = createPromiseThunk(
  GET_STUDENT_IN_ADMIN,
  api.getStudentInAdmin
);

export const getTeacherInAdmin = createPromiseThunk(
  GET_TEACHER_IN_ADMIN,
  api.getTeacherInAdmin
);

export const getDirectorInAdmin = createPromiseThunk(
  GET_DIRECTOR_IN_ADMIN,
  api.getDirectorInAdmin
);

const management = (state = managementState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDENT:
      case GET_STUDENT_SUCCESS:
      case GET_STUDENT_FAILURE:
        handleAsyncActions(GET_STUDENT, "readStudent")(
          draft.managementState,
          action
        );
        break;

      case GET_TEACHER:
      case GET_TEACHER_SUCCESS:
      case GET_TEACHER_FAILURE:
        handleAsyncActions(GET_TEACHER, "readTeacher")(
          draft.managementState,
          action
        );
        break;

      case PUT_STUDENT:
      case PUT_STUDENT_SUCCESS:
      case PUT_STUDENT_FAILURE:
        handleAsyncActions(PUT_STUDENT, "accessStudent")(
          draft.managementState,
          action
        );
        break;

      case PUT_TEACHER:
      case PUT_TEACHER_SUCCESS:
      case PUT_TEACHER_FAILURE:
        handleAsyncActions(PUT_TEACHER, "accessTeacher")(
          draft.managementState,
          action
        );
        break;

      case PUT_DIRECTOR:
      case PUT_DIRECTOR_SUCCESS:
      case PUT_DIRECTOR_FAILURE:
        handleAsyncActions(PUT_DIRECTOR, "accessDirector")(
          draft.managementState,
          action
        );
        break;

      case GET_STUDENT_IN_ADMIN:
      case GET_STUDENT_IN_ADMIN_SUCCESS:
      case GET_STUDENT_IN_ADMIN_FAILURE:
        handleAsyncActions(GET_STUDENT_IN_ADMIN, "readStudentInAdmin")(
          draft.managementState,
          action
        );
        break;

      case GET_TEACHER_IN_ADMIN:
      case GET_TEACHER_IN_ADMIN_SUCCESS:
      case GET_TEACHER_IN_ADMIN_FAILURE:
        handleAsyncActions(GET_TEACHER_IN_ADMIN, "readTeacherInAdmin")(
          draft.managementState,
          action
        );
        break;

      case GET_DIRECTOR_IN_ADMIN:
      case GET_DIRECTOR_IN_ADMIN_SUCCESS:
      case GET_DIRECTOR_IN_ADMIN_FAILURE:
        handleAsyncActions(GET_DIRECTOR_IN_ADMIN, "readDirectorInAdmin")(
          draft.managementState,
          action
        );
        break;

      default:
        break;
    }
  });

export default management;
