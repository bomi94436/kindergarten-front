import axios from "./axios";
import { USER_SERVER, KINDERGARTEN_SERVER } from "./config";

export const register = (dataToSubmit, path) =>
  axios
    .post(`${USER_SERVER}/${path}`, dataToSubmit)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
        return error.response;
      } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못했습니다.
        // 새로고침 시도를 요구할 것
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      }
    });

export const existid = (id) =>
  axios
    .get(`${USER_SERVER}/existid/${id}`)
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      } else {
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      }
    });

export const searchKindergarten = (type, value, page) =>
  axios
    .get(`${KINDERGARTEN_SERVER}/${type}`, {
      params: {
        [type]: value,
        page: page,
        size: 10,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else if (error.request) {
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      } else {
        return {
          data: {
            success: false,
            msg: "오류가 발생하였습니다. 다시 시도해 주세요.",
          },
        };
      }
    });
