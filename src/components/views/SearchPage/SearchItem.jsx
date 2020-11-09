import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import { FaMapMarkerAlt } from "react-icons/fa";
import Rating from "@material-ui/lab/Rating";
import { Link } from "react-router-dom";

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
    "&:hover": {
      opacity: 0.5,
    },
  },
  chip: {
    marginRight: "0.3rem",
  },
  address: {
    padding: "0.5rem 0",
    lineHeight: "1rem",
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

const SearchItem = ({ item, getLatLng }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item md={3} xs={5}>
        <Typography variant="h6">
          <Link to={`/kindergarten/${item.id}`} className={classes.name}>
            {item.name}
          </Link>
        </Typography>
      </Grid>

      <Grid item md={5} xs={7}>
        <Typography
          className={classes.address}
          style={{ display: "flex", flexFlow: "row", alignItems: "center" }}
          color="primary"
          variant="subtitle1"
          onClick={() => getLatLng(item.address)}
        >
          <FaMapMarkerAlt />
          {item.address}
        </Typography>
        <div style={{ display: "flex", flexFlow: "row" }}>
          <Chip
            label={item.kinder_type}
            color="primary"
            className={classes.chip}
            size="small"
          />
          <Chip
            label={item.type}
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
            {String(item.score.toFixed(1))}
          </Typography>
          <Rating value={item.score} precision={0.5} size="small" readOnly />
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
