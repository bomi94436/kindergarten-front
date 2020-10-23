import AddStudentItem from "../../components/views/RegisterPage/AddStudentItem";
import { connect } from "react-redux";
import {
  setRegister,
  setRegisterValid,
  setRegisterSearch,
  getRegisterSearch,
} from "../../modules/reducers/register";

const AddStudentItemContainer = connect(
  (state) => ({
    search: state.register.search,
  }),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    setRegisterValid: (data) => dispatch(setRegisterValid(data)),
    setRegisterSearch: (data) => dispatch(setRegisterSearch(data)),
    getRegisterSearch: (type, value, page) =>
      dispatch(getRegisterSearch(type, value, page)),
  })
)(AddStudentItem);

export default AddStudentItemContainer;
