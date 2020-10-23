import RegisterForm from "../../components/views/RegisterPage/RegisterForm";
import { connect } from "react-redux";
import {
  setRegister,
  postRegister,
  getExistId,
  setRegisterValid,
} from "../../modules/reducers/user";

const RegisterFormContainer = connect(
  (state) => ({
    state: state.register,
  }),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    setRegisterValid: (data) => dispatch(setRegisterValid(data)),
    postRegister: (dataToSubmit, path) =>
      dispatch(postRegister(dataToSubmit, path)),
    getExistId: (id) => dispatch(getExistId(id)),
  })
)(RegisterForm);

export default RegisterFormContainer;
