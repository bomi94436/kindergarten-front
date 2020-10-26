import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import initState from "../initState";
import * as api from "../../utils/api";

const SET_MAP = "map/SET_MAP";

const GET_LATLNG = "map/GET_LATLNG";
const GET_LATLNG_SUCCESS = "map/GET_LATLNG_SUCCESS";
const GET_LATLNG_FAILURE = "map/GET_LATLNG_FAILURE";

export const setMap = createAction(SET_MAP, (data) => data);

export const getLatLng = (address) => async (dispatch) => {
  dispatch({ type: GET_LATLNG });
  try {
    const response = await api.getLatLng(address);
    dispatch({
      type: GET_LATLNG_SUCCESS,
      payload: {
        lat: Number(response.data.documents[0].y),
        lng: Number(response.data.documents[0].x),
      },
    });
  } catch (e) {
    dispatch({ type: GET_LATLNG_FAILURE, payload: e, error: true });
  }
};

const map = handleActions(
  {
    [SET_MAP]: (state, action) =>
      produce(state, (draft) => {
        // initial about map, etc ...
        if (draft.maps.mapContainer.mapCover)
          draft.maps.mapContainer.mapCover.removeChild(
            draft.maps.mapContainer.container
          );

        draft.maps.map = new window.kakao.maps.Map(
          action.payload.container,
          action.payload.options
        );

        draft.maps.mapContainer.mapCover = action.payload.mapCover;
        draft.maps.mapContainer.container = action.payload.container;
      }),

    [GET_LATLNG]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_LATLNG = true;
      }),
    [GET_LATLNG_SUCCESS]: (state, action) =>
      produce(state, (draft) => {
        draft.loading.GET_LATLNG = false;
        draft.maps.location.lat = action.payload.lat;
        draft.maps.location.lng = action.payload.lng;
        const coords = new window.kakao.maps.LatLng(
          action.payload.lat,
          action.payload.lng
        );
        draft.map.setCenter(coords);
      }),
    [GET_LATLNG_FAILURE]: (state) =>
      produce(state, (draft) => {
        draft.loading.GET_LATLNG = false;
      }),
  },
  initState
);

export default map;
