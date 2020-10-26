import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: "0.5rem",
    margin: "0.3rem 0",
    padding: "1rem",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  textBlock: {
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "flex-start",
  },
  buttonBlock: {
    display: "flex",
    flexFlow: "row wrap",
  },
  starBlock: {
    display: "flex",
    flexFlow: "column wrap",
    margin: "0.5rem",
  },
  review: {
    alignSelf: "stretch",
    flexGrow: 1,
  },
  detail: {
    margin: "0.5rem",
  },
  name: {
    color: "inherit",
    textDecoration: "none",
  },
  address: {
    margin: "0.3rem 0 0.7rem 0",
  },
  chip: {
    fontSize: "0.9rem",
    marginRight: "0.3rem",
  },
}));

const SearchItem = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.textBlock}>
        <Typography className={classes.name} variant="h6" noWrap>
          화명유치원
        </Typography>

        <p className={classes.address}>부산시 북구 화명동</p>

        <div>
          <Chip label="유치원" color="primary" className={classes.chip} />
          <Chip label="사립" color="primary" className={classes.chip} />
        </div>
      </div>

      <div className={classes.buttonBlock}>
        <div className={classes.starBlock}>
          <div color="secondary">
            <FaStar fill="secondary" />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
            <FaRegStar />
          </div>
          <Button
            variant="contained"
            color="secondary"
            className={classes.review}
          >
            리뷰보기
          </Button>
        </div>

        <Button variant="contained" color="primary" className={classes.detail}>
          상세 보기
        </Button>
      </div>
    </div>
  );
};

export default SearchItem;
