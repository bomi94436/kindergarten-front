import { reviewState } from "./reducers/review";
import { reducerUtils } from "./reducers/utils";

const initState = {
  loading: {
    POST_REGISTER: false,
    GET_EXISTID: false,
    GET_REGISTER_SEARCH: false,
    GET_LATLNG: false,
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

  login: reducerUtils.initial(),

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

  // kindergarten
  kindergartenDetail: reducerUtils.initial(),
  kindergartenReview: reducerUtils.initial(),

  reviewState: reviewState,

  review: {
    dialog: {
      opened: false,
      kindergarten_name: null,
    },
    value: {
      kinderGarten_id: null, //유치원 id
      anonymous: false, // 익명 여부
      description: null, // 총평
      descScore: null, // 총평점
      eduScore: null, // 교육 점수
      facilityScore: null, // 시설 점수
      teacherScore: null, // 선생님 점수
      goodThing: null, // 장점
      badThing: null, // 단점
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
