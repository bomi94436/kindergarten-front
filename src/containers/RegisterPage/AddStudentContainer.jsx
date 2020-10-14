import AddStudent from "../../components/views/RegisterPage/AddStudent";
import { connect } from "react-redux";
import { setRegisterValid } from "../../modules/reducers/user";

const AddStudentContainer = connect(
  (state) => ({
    state: state.register.students,
  }),
  (dispatch) => ({
    setRegisterValid: (data) => dispatch(setRegisterValid(data)),
  })
)(AddStudent);

export default AddStudentContainer;
