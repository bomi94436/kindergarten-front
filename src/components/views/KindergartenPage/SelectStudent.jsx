import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, DialogContent, Grid, Typography } from "@material-ui/core";
import Loading from "../common/Loading/Loading";

const useStyles = makeStyles((theme) => ({
  dialogContent: {
    padding: 0,
  },
  content: {
    padding: "1rem",
  },
  head: {
    padding: "1rem",
    fontWeight: 600,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: "1rem",
  },
  divider: {
    borderBottom: "1px solid black",
    padding: "0 1rem",
  },
}));

const StudentList = ({
  classes,
  student,
  updateField,
  checkWriteReview,
  nextStep,
}) => {
  const [check, setCheck] = useState(null);

  const handleCheck = (kindergarten_id, student_id) => {
    checkWriteReview(kindergarten_id, student_id)
      .then((res) => {
        if (res.success) {
          setCheck(res.data.status);
        } else {
          alert(res.msg);
        }
      })
      .catch((res) => alert(res.msg));
  };

  return (
    <React.Fragment>
      <Grid container justify="center" item xs={3} className={classes.item}>
        {student.name}
      </Grid>
      <Grid container justify="center" item xs={3} className={classes.item}>
        {student.kindergarten_name}
      </Grid>
      <Grid container justify="center" item xs={3} className={classes.item}>
        {student.access ? (
          <Typography color="primary">인증됨</Typography>
        ) : (
          <Typography color="secondary">인증되지 않음</Typography>
        )}
      </Grid>
      <Grid container justify="center" item xs={3} className={classes.item}>
        {check === null ? (
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => {
              handleCheck(student.kindergarten_id, student.studentId);
            }}
          >
            확인
          </Button>
        ) : check === "작성가능" ? (
          //TODO: 클릭 시 다음으로 이동 & 유치원 이름, id 저장
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={() => {
              updateField("kinderGarten_id", student.kindergarten_id);
              updateField("name", student.kindergarten_name);
              nextStep();
            }}
          >
            리뷰 쓰기
          </Button>
        ) : (
          <Button type="button" variant="contained" color="secondary" disabled>
            작성 불가
          </Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

const SelectStudent = ({
  nextStep,
  studentList,
  updateField,
  checkWriteReview,
}) => {
  const classes = useStyles();

  if (studentList.loading) {
    return <Loading />;
  }
  return (
    <DialogContent dividers className={classes.dialogContent}>
      <Grid container className={classes.content}>
        <Grid container justify="center" item xs={3} className={classes.head}>
          이름
        </Grid>
        <Grid container justify="center" item xs={3} className={classes.head}>
          유치원
        </Grid>
        <Grid container justify="center" item xs={3} className={classes.head}>
          인증 여부
        </Grid>
        <Grid container justify="center" item xs={3} className={classes.head}>
          작성 가능 여부
        </Grid>

        <Grid item xs={12}>
          <div className={classes.divider} />
        </Grid>

        {studentList.data &&
          studentList.data.students.map((student, index) => {
            return (
              <StudentList
                key={index}
                classes={classes}
                student={student}
                updateField={updateField}
                checkWriteReview={checkWriteReview}
                nextStep={nextStep}
              />
            );
          })}
      </Grid>
    </DialogContent>
  );
};

export default SelectStudent;
