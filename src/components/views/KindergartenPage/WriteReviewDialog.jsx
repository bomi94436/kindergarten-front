import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import SelectStudent from "./SelectStudent";
import Circle from "./Circle";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "550px",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
  },
  step2subtitle: {
    color: "gray",
    fontSize: "0.9rem",
    margin: 0,
  },
}));

const ReviewDialog = ({
  review,
  setReview,
  getStudentList,
  getCheckWriteReview,
}) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);

  const initStep = () => setStep(0);
  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  const handleClose = () => {
    setReview({ target: "dialog", name: "opened", value: false });
  };

  const contents = () => {
    switch (step) {
      case 0:
        return (
          <>
            <DialogTitle>리뷰를 작성할 학생 선택</DialogTitle>
            <SelectStudent
              setReview={setReview}
              getStudentList={getStudentList}
              getCheckWriteReview={getCheckWriteReview}
              nextStep={nextStep}
            />
            <DialogActions className={classes.bottom}>
              <Circle all={4} now={step + 1} />
              <div>
                <Button onClick={handleClose}>닫기</Button>
              </div>
            </DialogActions>
          </>
        );

      case 1:
        return (
          <>
            <DialogTitle>
              <span>{review.dialog.kindergarten_name}</span>
              <p className={classes.step2subtitle}>리뷰쓰기</p>
            </DialogTitle>
            <DialogActions className={classes.bottom}>
              <Circle all={4} now={step + 1} />
              <div>
                <Button onClick={prevStep}>이전</Button>
                <Button onClick={nextStep} color="primary">
                  다음
                </Button>
              </div>
            </DialogActions>
          </>
        );

      default:
        handleClose();
        initStep();
        return <></>;
    }
  };

  return (
    <Dialog open={review.dialog.opened} onClose={handleClose}>
      <div className={classes.container}>{contents()}</div>
    </Dialog>
  );
};

export default ReviewDialog;
