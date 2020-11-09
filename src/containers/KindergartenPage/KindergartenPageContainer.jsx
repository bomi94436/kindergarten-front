import KinderagartenPage from "../../components/views/KindergartenPage/KindergartenPage";
import { connect } from "react-redux";
import {
  getKindergartenDetail,
  getKindergartenReview,
} from "../../modules/reducers/kindergarten";

const KindergartenPageContainer = connect(
  (state) => ({}),
  (dispatch) => ({
    getKindergartenDetail: (id) => dispatch(getKindergartenDetail(id)),
    getKindergartenReview: (id) => dispatch(getKindergartenReview(id)),
  })
)(KinderagartenPage);

export default KindergartenPageContainer;
