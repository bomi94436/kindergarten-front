import React, { useState } from "react";
import {
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
  Button,
  Collapse,
  Dialog,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import Loading from "../common/Loading/Loading";
import { MdClose, MdCheck } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { AiOutlineFrown, AiOutlineMeh, AiOutlineSmile } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { Rating } from "@material-ui/lab";
import Tooltip from "@material-ui/core/Tooltip";
import { StyledReviewList } from "./styles";
import ReviewCommentContainer from "src/containers/KindergartenPage/ReviewCommentContainer";

const ReviewList = ({ userid, reviews, handleDeleteReviews }) => {
  const [openComment, setOpenComment] = useState(false);
  const [removeReviewDialog, setRemoveReviewDialog] = useState(false);

  if (reviews.loading !== false) {
    return <Loading />;
  } else {
    return reviews.data.findReviews.map((element) => (
      <StyledReviewList key={element.reviewId}>
        <Paper className="root">
          <div className="top">
            <Typography variant="h5">
              <ImQuotesLeft />
              {" " + element.description + " "}
              <ImQuotesRight />
            </Typography>

            <div className="name">
              <Typography variant="body1" style={{ color: "gray" }}>
                {!element.anonymous ? element.writer : "익명"}
              </Typography>
              <Tooltip
                title={
                  element.accessInfo === "ACCESS"
                    ? "이 회원은 유치원으로부터 인증되었습니다."
                    : "이 회원은 아직 유치원으로부터 인증되지 않았습니다."
                }
                placement="top"
                arrow
              >
                <Chip
                  icon={
                    element.accessInfo === "ACCESS" ? (
                      <MdCheck size={20} style={{ marginLeft: "0.5rem" }} />
                    ) : (
                      <MdClose size={20} style={{ marginLeft: "0.5rem" }} />
                    )
                  }
                  label="인증"
                  color={
                    element.accessInfo === "ACCESS" ? "primary" : "secondary"
                  }
                  variant="outlined"
                />
              </Tooltip>
            </div>

            <Grid className="middle">
              <Grid item md={4} xs={12} className="rating">
                {element.descScore < 1.5 ? (
                  <AiOutlineFrown
                    size={80}
                    style={{ color: "#fab400", marginBottom: "0.5rem" }}
                  />
                ) : element.descScore > 3.5 ? (
                  <AiOutlineSmile
                    size={80}
                    style={{ color: "#fab400", marginBottom: "0.5rem" }}
                  />
                ) : (
                  <AiOutlineMeh
                    size={80}
                    style={{ color: "#fab400", marginBottom: "0.5rem" }}
                  />
                )}
                <Rating value={element.descScore} precision={0.5} readOnly />

                <Divider
                  variant="middle"
                  style={{ width: "100%", margin: "1rem 0" }}
                />

                <div className="rating-detail">
                  교사&nbsp;
                  <Rating
                    value={element.teacherScore}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="rating-detail">
                  시설&nbsp;
                  <Rating
                    value={element.facilityScore}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <div className="rating-detail">
                  교육&nbsp;
                  <Rating value={element.eduScore} precision={0.5} readOnly />
                </div>
              </Grid>

              <Grid item md={8} xs={12} className="desc">
                <Chip label="장점" color="primary" />
                <Typography variant="subtitle1" className="desc-text">
                  {element.goodThing}
                </Typography>

                <Chip label="단점" color="secondary" />
                <Typography variant="subtitle1" className="desc-text">
                  {element.badThing}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <div className="bottom">
                <Button
                  className="comment"
                  color="primary"
                  onClick={() => setOpenComment((value) => !value)}
                >
                  <FaRegCommentAlt />
                  {openComment ? (
                    <span> 댓글닫기</span>
                  ) : (
                    <span> 댓글보기</span>
                  )}
                </Button>
                {element.writer === userid && (
                  <Button
                    color="secondary"
                    onClick={() => setRemoveReviewDialog(true)}
                  >
                    리뷰 삭제
                  </Button>
                )}
              </div>

              {/* 댓글 */}
              <Collapse in={openComment}>
                <ReviewCommentContainer
                  userid={userid}
                  reviewId={element.reviewId}
                  reviewWriter={element.writer}
                />
              </Collapse>
            </Grid>
          </div>
        </Paper>

        <Dialog
          open={removeReviewDialog}
          onClose={() => setRemoveReviewDialog(false)}
        >
          <DialogContent>정말 리뷰를 삭제하시겠습니까?</DialogContent>
          <DialogActions>
            <Button
              onClick={() => setRemoveReviewDialog(false)}
              color="primary"
            >
              아니요
            </Button>
            <Button
              onClick={() => {
                handleDeleteReviews(element.reviewId);
                setRemoveReviewDialog(false);
              }}
              color="secondary"
              autoFocus
            >
              네, 삭제합니다
            </Button>
          </DialogActions>
        </Dialog>
      </StyledReviewList>
    ));
  }
};

export default ReviewList;
