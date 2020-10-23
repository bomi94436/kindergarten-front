const initState = {
  loading: {
    POST_REGISTER: false,
    GET_EXISTID: false,
    GET_REGISTER_SEARCH: false,
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
      checkDuplication: {
        checked: null,
        id: null,
      },
      password: null,
      rePassword: null,
      name: null,
      phone: null,
      firstEmail: null,
      lastEmail: null,
    },
    students: [],
    search: {
      opened: false,
      type: "name",
      value: "",
      selected: {
        id: null,
        name: null,
      },
      contents: null,
      page: {
        total: null,
        current: null,
      },
    },
    student: {
      value: {
        name: "",
        date: new Date(),
        kindergarten_id: null,
      },
      valid: {
        name: null,
        date: null,
        kindergarten_id: null,
      },
      kindergarten_selected: {
        id: null,
        name: null,
      },
      // search: {
      //   opened: false,
      //   type: "name",
      //   value: "",
      //   selected: {
      //     id: null,
      //     name: null,
      //   },
      //   contents: null,
      //   page: {
      //     total: null,
      //     current: null,
      //   },
      // },
    },
  },
};

export default initState;
