import LoginPage from "../../components/views/LoginPage/LoginPage";
import { connect } from "react-redux";
import { postLogin } from "../../modules/reducers/login";

const LoginPageContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    postLogin: (dataToSubmit) => dispatch(postLogin(dataToSubmit)),
  })
)(LoginPage);

export default LoginPageContainer;
