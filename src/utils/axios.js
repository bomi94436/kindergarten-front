import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_SERVER_URL;

export default axios;
