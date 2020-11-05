import AddStudent from "../../components/views/RegisterPage/AddStudent";
import { connect } from "react-redux";
import { setRegisterValid } from "../../modules/reducers/register";

const AddStudentContainer = connect(
  (state) => ({
    students: state.register.students,
  }),
  (dispatch) => ({
    setRegisterValid: (data) => dispatch(setRegisterValid(data)),
  })
)(AddStudent);

export default AddStudentContainer;
