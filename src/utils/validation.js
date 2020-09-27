const numRegExp = /^\d+$/; // 숫자만 입력
const engNumRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // 영어, 숫자 조합해서 8자리 이상 입력
const firstEmailRegExp = /^[\w-]+(\.[\w-]+)*/;
const lastEmailRegExp = /([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

export const validateRegister = (target, value, password) => {
  switch (target) {
    case "userid":
      if (value.length >= 6 && value.length <= 20 && value.match(engNumRegExp))
        return true;
      else return false;

    case "password":
      if (value.length >= 8 && value.length <= 20 && value.match(engNumRegExp))
        return true;
      else return false;

    case "rePassword":
      if (value === password) return true;
      else return false;

    case "name":
      if (value.length >= 2) return true;
      else return false;

    case "firstEmail":
      if (value.match(firstEmailRegExp)) return true;
      else return false;

    case "lastEmail":
      if (value.match(lastEmailRegExp)) return true;
      else return false;

    case "phone":
      if (value.match(numRegExp) && value.length === 11) return true;
      else return false;

    default:
      return null;
  }
};

export const inputClassNameByValid = (valid) => {
  switch (valid) {
    case true:
      return "is-valid";

    case false:
      return "is-invalid";

    default:
      return "";
  }
};

export const isEveryFieldValid = (state) => {
  for (const [key, value] of Object.entries(state)) {
    if (!value) return false;
  }
  return true;
};
