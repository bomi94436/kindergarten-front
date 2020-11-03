import NavBar from "../../components/views/NavBar/NavBar";
import { connect } from "react-redux";

const NavBarContainer = connect((state) => ({
  login: state.login,
}))(NavBar);

export default NavBarContainer;
