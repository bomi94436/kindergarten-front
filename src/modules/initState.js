const initState = {
  loading: {
    POST_LOGIN: false,
    POST_REGISTER: false,
    GET_EXISTID: false,
    GET_REGISTER_SEARCH: false,
    GET_LATLNG: false,
    GET_KINDERGARTEN_DETAIL: false,
    GET_KINDERGARTEN_REVIEW: false,
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
  },

  login: {
    userid: "",
    name: "",
    value: {
      userid: "",
      password: "",
    },
    valid: {
      userid: null,
      password: null,
    },
  },

  maps: {
    map: null,
    mapContainer: {
      mapCover: null,
      container: null,
    },
    location: { lat: 35.1798200522868, lng: 129.075087492149 },
  },

  search: {
    value: "",
    contents: null,
    page: {
      total: null,
      current: null,
    },
  },
};

export default initState;

export const addStudent = () => {
  return {
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
  };
};
