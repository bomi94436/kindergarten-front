import React, { useState, useEffect } from "react";
import {
  Chip,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import Loading from "../Loading/Loading";
import { MdClose, MdCheck } from "react-icons/md";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { AiOutlineFrown, AiOutlineMeh, AiOutlineSmile } from "react-icons/ai";
import { Rating } from "@material-ui/lab";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1.5rem",
    marginBottom: "1rem",
  },
  top: {
    display: "flex",
    flexFlow: "column",
  },
  name: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rating: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginRight: "1rem",
  },
  desc: {
    display: "flex",
    flexFlow: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    height: "100%",
  },
  descText: {
    margin: "0.5rem 0",
    height: "112px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 4 /* number of lines to show */,
    "-webkit-box-orient": "vertical",
  },
  ratingDetail: {
    display: "flex",
    alignItems: "center",
  },
}));

const ReviewList = ({ id, getKindergartenReview }) => {
  const classes = useStyles();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    getKindergartenReview(id).then((res) => {
      setReview(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(reviews);

  if (reviews) {
    return reviews.findReviews.map((element) => (
      <Paper key={element.reviewId} className={classes.root}>
        <div className={classes.top}>
          <Typography variant="h5">
            <ImQuotesLeft />
            {" " + element.description + " "}
            <ImQuotesRight />
          </Typography>

          <div className={classes.name}>
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

          <Grid className={classes.bottom}>
            <Grid item md={4} xs={12} className={classes.rating}>
              <AiOutlineSmile
                size={80}
                style={{ color: "#fab400", marginBottom: "0.5rem" }}
              />
              <Rating value={5.0} precision={0.5} readOnly />

              <Divider
                variant="middle"
                style={{ width: "100%", margin: "1rem 0" }}
              />

              <div className={classes.ratingDetail}>
                교사&nbsp;
                <Rating
                  value={element.teacherScore}
                  precision={element.descScore}
                  readOnly
                />
              </div>
              <div className={classes.ratingDetail}>
                시설&nbsp;
                <Rating
                  value={element.facilityScore}
                  precision={element.descScore}
                  readOnly
                />
              </div>
              <div className={classes.ratingDetail}>
                교육&nbsp;
                <Rating
                  value={element.eduScore}
                  precision={element.descScore}
                  readOnly
                />
              </div>
            </Grid>

            <Grid item md={8} xs={12} className={classes.desc}>
              <Chip label="장점" color="primary" />
              <Typography variant="subtitle1" className={classes.descText}>
                {element.goodThing}
              </Typography>

              <Chip label="단점" color="secondary" />
              <Typography variant="subtitle1" className={classes.descText}>
                {element.badThing}
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
    ));
  } else {
    return <Loading />;
  }
};

export default ReviewList;
