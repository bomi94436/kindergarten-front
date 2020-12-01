import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Dialog, DialogActions, DialogTitle } from "@material-ui/core";
import SelectStudent from "./SelectStudent";
import Circle from "./Circle";
import SelectStudentContainer from "src/containers/KindergartenPage/SelectStudentContainer";

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
  // review,
  opened,
  setDialog,
}) => {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [field, setField] = useState({
    name: null, //유치원 이름
    kinderGarten_id: null, //유치원 id
    anonymous: false, // 익명 여부
    description: null, // 총평
    descScore: null, // 총평점
    eduScore: null, // 교육 점수
    facilityScore: null, // 시설 점수
    teacherScore: null, // 선생님 점수
    goodThing: null, // 장점
    badThing: null, // 단점
  });

  const initStep = () => setStep(0);
  const prevStep = () => setStep(step - 1);
  const nextStep = () => setStep(step + 1);

  const updateField = (name, value) => {
    setField({
      ...field,
      [name]: value,
    });
  };

  const contents = () => {
    switch (step) {
      case 0:
        return (
          <>
            <DialogTitle>리뷰를 작성할 학생 선택</DialogTitle>
            <SelectStudentContainer
              updateField={updateField}
              nextStep={nextStep}
            />
            <DialogActions className={classes.bottom}>
              <Circle all={4} now={step + 1} />
              <div>
                <Button onClick={() => setDialog(false)}>닫기</Button>
              </div>
            </DialogActions>
          </>
        );

      case 1:
        return (
          <>
            <DialogTitle>
              <span>{field.name}</span>
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
        setDialog(false);
        initStep();
        return <></>;
    }
  };

  return (
    <Dialog open={opened} onClose={() => setDialog(false)}>
      <div className={classes.container}>{contents()}</div>
    </Dialog>
  );
};

export default ReviewDialog;
