import React, { useEffect, useState } from "react";
import "../../../utils/styles.css";
import {
  makeStyles,
  Chip,
  Paper,
  Grid,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiDoorOpenFill } from "react-icons/ri";
import { BiTime } from "react-icons/bi";
import { AiTwotonePhone } from "react-icons/ai";
import { MdOpenInBrowser } from "react-icons/md";
import Map from "../Map/Map";
import * as api from "../../../utils/api";
import Rating from "@material-ui/lab/Rating";
import ReviewList from "./ReviewList";
import Loading from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: "0.5rem",
    margin: "0.3rem 0",
    padding: "1rem",
  },
  title: {
    marginBottom: "1rem",
  },
  leftPaper: {
    padding: "1.5rem",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  },
  rating: {
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginLeft: "2rem",
    [theme.breakpoints.up("md")]: {
      margin: 0,
    },
  },
  reviewButton: {
    width: "100%",
    marginTop: "1rem",
    padding: "0.7rem",
    borderRadius: "30px",
  },
  rightPaper: {
    padding: "1.5rem",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
    marginBottom: "1rem",
  },
  rightPaper2: {
    display: "flex",
    flexFlow: "column wrap",
    padding: "1.5rem",
    marginBottom: "1rem",
  },
  chip: {
    marginRight: "1rem",
  },
  addressIcon: {
    marginLeft: "0.5rem",
  },
  info: {
    fontSize: "1.2rem",
  },
  website: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  infoColumn: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-around",
    height: "100%",
  },
  infoRow: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const KindergartenPage = ({
  match,
  getKindergartenDetail,
  getKindergartenReview,
}) => {
  const classes = useStyles();
  const [content, setContent] = useState(null);
  const [address, setAddress] = useState({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    getKindergartenDetail(match.params.id)
      .then(async (res) => {
        setContent(res.data);
        const response = await api.getLatLng(res.data.address);
        setAddress({
          ...address,
          lat: Number(response.data.documents[0].y),
          lng: Number(response.data.documents[0].x),
        });
      })
      .catch((error) => {
        alert("오류가 발생하였습니다. 다시 시도해주세요.");
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (content && address.lat && address.lng) {
    return (
      <div className="container" style={{ marginTop: "3rem" }}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Paper className={classes.leftPaper}>
              <Typography variant="h4" className={classes.title}>
                {content.name}
              </Typography>
              <div className={classes.rating}>
                <Typography variant="h5">
                  {String(content.score.toFixed(1))}
                </Typography>
                <Rating value={content.score} precision={0.5} readOnly />
              </div>
            </Paper>
            <Button
              type="button"
              variant="contained"
              color="primary"
              className={classes.reviewButton}
            >
              리뷰 쓰기
            </Button>
          </Grid>

          <Grid item md={9} xs={12}>
            <Paper className={classes.rightPaper}>
              <div>
                <Typography variant="h5" className={classes.title}>
                  {content.name}
                </Typography>
              </div>

              <div>
                <Chip
                  label={content.type}
                  color="primary"
                  className={classes.chip}
                />
                <Chip
                  icon={
                    <FaMapMarkerAlt size={18} className={classes.addressIcon} />
                  }
                  label={content.address}
                  color="primary"
                  className={classes.chip}
                />
              </div>
            </Paper>

            <Paper className={classes.rightPaper2}>
              <Typography variant="h5" className={classes.title}>
                기본 정보
              </Typography>

              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <Map lat={address.lat} lng={address.lng} />
                </Grid>

                <Grid item md={6} xs={12}>
                  <div className={classes.infoColumn}>
                    <div className={classes.infoRow}>
                      <RiDoorOpenFill size={25} />
                      <span className={classes.info}>
                        {content.openDate} 개원
                      </span>
                    </div>

                    <Divider style={{ width: "100%" }} />

                    <div className={classes.infoRow}>
                      <BiTime size={25} />
                      <span className={classes.info}>
                        운영시간 {content.operatingTime}
                      </span>
                    </div>

                    <Divider style={{ width: "100%" }} />

                    <div className={classes.infoRow}>
                      <AiTwotonePhone size={25} />
                      <span className={classes.info}>{content.phone}</span>
                    </div>

                    <Divider style={{ width: "100%" }} />

                    <div className={classes.infoRow}>
                      <MdOpenInBrowser size={25} />
                      <span
                        className={classes.website}
                        onClick={() => window.location.replace(content.website)}
                      >
                        {content.website}
                      </span>
                    </div>

                    <Divider style={{ width: "100%" }} />

                    <div className={classes.infoRow}>
                      <FaMapMarkerAlt size={25} />
                      <span className={classes.info}>{content.address}</span>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Paper>

            <ReviewList
              id={match.params.id}
              getKindergartenReview={getKindergartenReview}
            />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default KindergartenPage;
