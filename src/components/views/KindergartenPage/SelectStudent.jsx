import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, DialogContent, Grid, Typography } from "@material-ui/core";

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
  setReview,
  getCheckWriteReview,
  nextStep,
}) => {
  const [check, setCheck] = useState(null);

  const handleCheck = (kindergarten_id, student_id) => {
    getCheckWriteReview(kindergarten_id, student_id)
      .then((res) => {
        setCheck(res.data.status);
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
              handleCheck(student.kindergarten_id, student.student_id);
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
              setReview({
                target: "value",
                name: "kinderGarten_id",
                value: student.kindergarten_id,
              });
              setReview({
                target: "dialog",
                name: "kindergarten_name",
                value: student.kindergarten_name,
              });
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
  setReview,
  getStudentList,
  getCheckWriteReview,
  nextStep,
}) => {
  const classes = useStyles();
  const [students, setStudents] = useState(null);

  useEffect(() => {
    getStudentList().then((res) => {
      setStudents(res.data.students);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        {students &&
          students.map((student, index) => {
            return (
              <StudentList
                key={index}
                classes={classes}
                student={student}
                setReview={setReview}
                getCheckWriteReview={getCheckWriteReview}
                nextStep={nextStep}
              />
            );
          })}
      </Grid>
    </DialogContent>
  );
};

export default SelectStudent;
