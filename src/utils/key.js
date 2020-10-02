import axios from "axios";
axios.defaults.baseURL = process.env.BACKEND_SERVER_URL;

export default axios;
