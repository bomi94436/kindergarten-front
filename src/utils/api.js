import axios from "axios";
import {
  AUTH_SERVER,
  USER_SERVER,
  KINDERGARTEN_SERVER,
  REVIEW_SERVER,
} from "./config";
import { REACT_APP_BACKEND_SERVER_URL, KAKAO_MAP_REST_API_KEY } from "./key";

const badResponse = () => {
  return {
    data: {
      success: false,
      msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
    },
  };
};

const createAxios = () =>
  axios.create({
    baseURL: REACT_APP_BACKEND_SERVER_URL,
    timeout: 1000,
    headers: { "X-AUTH-TOKEN": localStorage.getItem("X-AUTH-TOKEN") },
  });

/*
    아이디와 비밀번호를 전송하여
    로그인
*/
export const login = (dataToSubmit) =>
  createAxios()
    .post(`${AUTH_SERVER}/login`, dataToSubmit, { withCredentials: true })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });

/*
    회원정보를 전송하여
    회원가입
*/
export const register = (dataToSubmit) =>
  createAxios()
    .post(`${USER_SERVER}/`, dataToSubmit)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        return error.response;
      } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // 새로고침 시도를 요구할 것
        return badResponse();
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        return badResponse();
      }
    });

/*
    아이디를 전송하여
    중복 아이디가 존재하는지 검사
*/
export const existid = (id) =>
  createAxios()
    .get(`${USER_SERVER}/existid/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });

/*
    타입(이름 또는 주소), 찾을 값, 페이지를 전송하여
    유치원 목록 불러오기
*/
export const searchKindergartens = (type, value, page) =>
  createAxios()
    .get(`${KINDERGARTEN_SERVER}/${type}`, {
      params: {
        [type]: value,
        page: page,
        size: 10,
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });

/*
    주소 -> 좌표 검색
*/
export const getLatLng = (address) =>
  axios.get(
    `https://dapi.kakao.com/v2/local/search/address.json?query=${address}`,
    {
      headers: {
        Authorization: `KakaoAK ${KAKAO_MAP_REST_API_KEY}`,
      },
    }
  );

/*
    토큰 -> 회원역할, 토큰 유효성 확인
*/
export const auth = () => {
  return createAxios()
    .post(`${AUTH_SERVER}/currentuser`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response) {
        return error.response.data;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });
};

/*
    유치원 상세정보 불러오기
*/
export const kindergartenDetail = (id) =>
  createAxios()
    .get(`${KINDERGARTEN_SERVER}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });

/*
    유치원 리뷰 불러오기
*/
export const kindergartenReview = (id) =>
  createAxios()
    .get(`${REVIEW_SERVER}/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return badResponse();
      } else {
        return badResponse();
      }
    });
