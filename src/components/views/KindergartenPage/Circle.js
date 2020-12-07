import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: "10px",
  },
  active: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#4a4fb5",
    margin: "2px",
  },
  default: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#b8b8b8",
    margin: "3px",
  },
}));

const Circle = ({ all, now }) => {
  const classes = useStyles();

  const list = [];

  for (let i = 0; i < all; i++) {
    if (i < now) {
      list.push(<span className={classes.active} />);
    } else {
      list.push(<span className={classes.default} />);
    }
  }

  return (
    <div className={classes.container}>
      {list.map((item, index) => (
        <React.Fragment key={index}>{item}</React.Fragment>
      ))}
    </div>
  );
};

export default Circle;
