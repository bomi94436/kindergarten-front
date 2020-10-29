import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER_URL;
axios.defaults.headers.common["X-AUTH-TOKEN"] = window.localStorage.getItem(
  "X-AUTH-TOKEN"
);

export default axios;
