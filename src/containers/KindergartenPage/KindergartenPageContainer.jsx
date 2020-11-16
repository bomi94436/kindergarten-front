import KinderagartenPage from "../../components/views/KindergartenPage/KindergartenPage";
import { connect } from "react-redux";
import {
  getKindergartenDetail,
  getKindergartenReview,
} from "../../modules/reducers/kindergarten";

import {
  setReview,
  getStudentList,
  getCheckWriteReview,
} from "../../modules/reducers/review";

const KindergartenPageContainer = connect(
  (state) => ({
    review: state.review,
  }),
  (dispatch) => ({
    setReview: (data) => dispatch(setReview(data)),
    getStudentList: () => dispatch(getStudentList()),
    getCheckWriteReview: (kindergarten_id, student_id) =>
      dispatch(getCheckWriteReview(kindergarten_id, student_id)),
    getKindergartenDetail: (id) => dispatch(getKindergartenDetail(id)),
    getKindergartenReview: (id) => dispatch(getKindergartenReview(id)),
  })
)(KinderagartenPage);

export default KindergartenPageContainer;
