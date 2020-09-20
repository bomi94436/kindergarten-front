import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import http from "axios/lib/adapters/http";
import axios from "axios";

axios.defaults.adapter = http;
configure({ adapter: new Adapter() });
