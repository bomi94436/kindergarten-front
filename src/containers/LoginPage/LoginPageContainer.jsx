import LoginPage from "../../components/views/LoginPage/LoginPage";
import { connect } from "react-redux";
import { setLogin, postLogin } from "../../modules/reducers/login";

const LoginPageContainer = connect(
  (state) => ({
    login: state.login,
  }),
  (dispatch) => ({
    setLogin: (data) => dispatch(setLogin(data)),
    postLogin: (dataToSubmit) => dispatch(postLogin(dataToSubmit)),
  })
)(LoginPage);

export default LoginPageContainer;
