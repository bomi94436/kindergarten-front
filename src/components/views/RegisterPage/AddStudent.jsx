import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import { FaPlus } from "react-icons/fa";
import AddStudentItem from "../../../containers/RegisterPage/AddStudentItemContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexFlow: "column",
    marginTop: "2rem",
    flexBasis: "100%",
  },
  row: {
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    color: theme.palette.text.secondary,
    margin: "0.2rem",
  },
}));

const AddStudent = ({ students, setRegisterValid }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.row} style={{ marginTop: "1rem" }}>
        <span style={{ margin: "1rem", fontSize: "1.2rem" }}>학생 추가</span>
        <IconButton
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {
            setRegisterValid({
              actor: "user",
              act: "insert",
            });
          }}
        >
          <FaPlus />
        </IconButton>
      </div>

      <div className={classes.root}>
        <Grid container className={classes.row}>
          <Grid item xs={3}>
            <span className={classes.label}>이름</span>
          </Grid>
          <Grid item xs={4}>
            <span className={classes.label}>생년월일</span>
          </Grid>
          <Grid item xs={4}>
            <span className={classes.label}>소속 유치원</span>
          </Grid>
          <Grid item xs={1}>
            <span className={classes.label}>삭제</span>
          </Grid>
        </Grid>

        <p style={{ borderBottom: "1px solid gray", margin: "0.5rem" }}></p>

        {students.map((element, index) => {
          return <AddStudentItem key={index} index={index} student={element} />;
        })}
      </div>
    </>
  );
};

export default AddStudent;
