import RegisterForm from "../../components/views/RegisterPage/RegisterForm";
import { connect } from "react-redux";
import {
  setRegister,
  postRegister,
  getExistId,
  setRegisterValid,
} from "../../modules/reducers/register";

const RegisterFormContainer = connect(
  (state) => ({
    state: state.register,
  }),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    setRegisterValid: (data) => dispatch(setRegisterValid(data)),
    postRegister: (dataToSubmit) => dispatch(postRegister(dataToSubmit)),
    getExistId: (id) => dispatch(getExistId(id)),
  })
)(RegisterForm);

export default RegisterFormContainer;
