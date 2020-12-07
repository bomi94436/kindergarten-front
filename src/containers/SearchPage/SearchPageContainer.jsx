import SearchPage from "../../components/views/SearchPage/SearchPage";
import { connect } from "react-redux";
import { getSearch, setSearch } from "../../modules/reducers/search";
import { getLatLng } from "src/modules/reducers/map";

const SearchPageContainer = connect(
  (state) => ({
    search: state.search,
    maps: state.maps,
  }),
  (dispatch) => ({
    setSearch: (data) => dispatch(setSearch(data)),
    getSearch: (type, value, page) => dispatch(getSearch(type, value, page)),
    getLatLng: (address) => dispatch(getLatLng(address)),
  })
)(SearchPage);

export default SearchPageContainer;
