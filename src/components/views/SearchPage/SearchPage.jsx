import React from "react";
import "../../../utils/styles.css";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { FaSearch } from "react-icons/fa";
import SearchCheckBox from "./SearchCheckBox";
import Grid from "@material-ui/core/Grid";
import MapPage from "../../../containers/Map/MapPageContainer";
import SearchList from "./SearchList";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "inherit",
    marginBottom: "1rem",
  },
  tag: {
    margin: "0 0.5rem",
  },
  searchBox: {
    marginBottom: "1.5rem",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
  },
  searchInput: {
    flexGrow: 1,
    marginRight: "0.3rem",
    background: "white",
  },
}));

const SearchPage = () => {
  const classes = useStyles();

  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <Grid container spacing={4}>
        <Grid item sm={4} xs={12} className={classes.root}>
          <Typography className={classes.title} variant="h5" noWrap>
            유치원 / 어린이집 검색
          </Typography>

          <div className={classes.searchBox}>
            <TextField
              variant="outlined"
              size="small"
              className={classes.searchInput}
              placeholder="검색"
            />
            <IconButton color="primary">
              <FaSearch />
            </IconButton>
          </div>

          <SearchCheckBox />
        </Grid>

        <Grid item sm={8} xs={12}>
          <Typography className={classes.title} variant="h5" noWrap>
            검색결과 2건
          </Typography>

          <MapPage />

          <SearchList />
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchPage;
