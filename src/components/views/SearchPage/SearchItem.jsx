import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { FaMapMarkerAlt } from "react-icons/fa";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "white",
    borderRadius: "0.5rem",
    margin: "0.3rem 0",
    padding: "1rem",
  },
  name: {
    color: "inherit",
    textDecoration: "none",
    marginLeft: "0.2rem",
  },
  chip: {
    marginRight: "0.3rem",
  },
  address: {
    padding: "0.5rem 0",
    "&:hover": {
      opacity: 0.5,
      cursor: "pointer",
    },
  },
  starBlock: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContents: "space-between",
    [theme.breakpoints.up("md")]: {
      flexFlow: "column",
      justifyContents: "center",
    },
  },
  buttonBlock: {
    display: "flex",
    flexFlow: "row",
    marginTop: "0.5rem",
    justifyContents: "flex-start",
    [theme.breakpoints.up("md")]: {
      flexFlow: "column",
      justifyContents: "center",
      marginLeft: "1rem",
    },
  },
}));

const SearchItem = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item md={3} xs={5}>
        <Typography className={classes.name} variant="h6">
          화명유치원
        </Typography>
      </Grid>

      <Grid item md={5} xs={7}>
        <Typography
          className={classes.address}
          style={{ display: "flex", flexFlow: "row", alignItems: "center" }}
          color="primary"
          variant="subtitle1"
          onClick={() => console.log("hi")}
        >
          <FaMapMarkerAlt />
          &nbsp; 부산시 북구 화명동
        </Typography>
        <div style={{ display: "flex", flexFlow: "row" }}>
          <Chip
            label="유치원"
            color="primary"
            className={classes.chip}
            size="small"
          />
          <Chip
            label="사립"
            color="primary"
            className={classes.chip}
            size="small"
          />
        </div>
      </Grid>

      <Grid
        item
        md={4}
        xs={12}
        style={{
          display: "flex",
          flexFlow: "row",
          alignItems: "center",
        }}
      >
        <Grid item xs={5} className={classes.starBlock}>
          <Typography variant="h6" noWrap>
            8.5
          </Typography>
          <Rating value={3.5} precision={0.5} size="small" readOnly />
        </Grid>

        <Grid item xs={7} className={classes.buttonBlock}>
          <Button color="secondary">리뷰보기</Button>
          <Button color="primary">상세보기</Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchItem;
