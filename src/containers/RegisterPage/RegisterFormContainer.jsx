import RegisterForm from "../../components/views/RegisterPage/RegisterForm";
import { connect } from "react-redux";
import { setRegister, postRegister } from "../../modules/reducers/user";

const RegisterFormContainer = connect(
  (state) => ({
    state: state.register,
  }),
  (dispatch) => ({
    setRegister: (data) => dispatch(setRegister(data)),
    postRegister: (data, path) => dispatch(postRegister(data, path)),
  })
)(RegisterForm);

export default RegisterFormContainer;
