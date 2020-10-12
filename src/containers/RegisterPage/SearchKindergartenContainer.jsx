import SearchKindergarten from "../../components/views/RegisterPage/SearchKindergarten";
import { connect } from "react-redux";
import {
  setRegisterSearch,
  getRegisterSearch,
} from "../../modules/reducers/user";

const SearchKindergartenContainer = connect(
  (state) => ({
    state: state.register.search,
  }),
  (dispatch) => ({
    setRegisterSearch: (data) => dispatch(setRegisterSearch(data)),
    getRegisterSearch: (type, value, page) =>
      dispatch(getRegisterSearch(type, value, page)),
  })
)(SearchKindergarten);

export default SearchKindergartenContainer;
