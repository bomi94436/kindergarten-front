import MapPage from "../../components/views/Map/MapPage";
import { connect } from "react-redux";
import { setMap, getLatLng } from "../../modules/reducers/map";

const MapPageContainer = connect(
  (state) => ({
    maps: state.maps,
  }),
  (dispatch) => ({
    setMap: (data) => dispatch(setMap(data)),
    getLatLng: (address) => dispatch(getLatLng(address)),
  })
)(MapPage);

export default MapPageContainer;
