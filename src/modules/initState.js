const initState = {
  loading: {
    POST_REGISTER: false,
    GET_EXISTID: false,
  },
  register: {
    value: {
      userid: "",
      password: "",
      rePassword: "",
      name: "",
      phone: "",
      firstEmail: "",
      lastEmail: "",
    },
    valid: {
      userid: null,
      checkDuplication: null,
      password: null,
      rePassword: null,
      name: null,
      phone: null,
      firstEmail: null,
      lastEmail: null,
    },
  },
};

export default initState;
