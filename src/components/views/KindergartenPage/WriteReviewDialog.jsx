import React, { useState, useCallback } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Slider,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import Circle from "./Circle";
import SelectStudentContainer from "src/containers/KindergartenPage/SelectStudentContainer";
import { StyeldQuestion, StyledDialog } from "./styles";

const marks = [
  {
    value: 0,
    label: "1점",
  },
  {
    value: 25,
    label: "2점",
  },
  {
    value: 50,
    label: "3점",
  },
  {
    value: 75,
    label: "4점",
  },
  {
    value: 100,
    label: "5점",
  },
];

const valuetext = (value) => `${value}점`;
const valueLabelFormat = (value) => {
  switch (value) {
    case 0:
      return 1.0;

    case 12.5:
      return 1.5;

    case 25:
      return 2.0;

    case 37.5:
      return 2.5;

    case 50:
      return 3.0;

    case 62.5:
      return 3.5;

    case 75:
      return 4.0;

    case 87.5:
      return 4.5;

    case 100:
      return 5.0;

    default:
      return 1;
  }
};

const Step0 = ({ updateField, step, nextStep, setDialog }) => (
  <div className="contents">
    <DialogTitle>리뷰를 작성할 학생 선택</DialogTitle>
    <SelectStudentContainer updateField={updateField} nextStep={nextStep} />
    <DialogActions className="bottom">
      <Circle all={4} now={step + 1} />
      <div>
        <Button onClick={() => setDialog(false)}>닫기</Button>
      </div>
    </DialogActions>
  </div>
);

const Step1 = ({ field, updateField, step, prevStep, nextStep }) => (
  <div className="contents">
    <DialogTitle>
      <span>{field.name}</span>
      <p className="step2subtitle">리뷰쓰기</p>
    </DialogTitle>

    <StyeldQuestion>
      {/* 질문1. ㅇㅇ유치원에 얼마나 만족하시나요? */}
      <div className="step1">
        <div>
          <span>Q1. </span>
          <span>{field.name} </span>
          <span>에 얼마나 만족하시나요?</span>
        </div>

        <p className={`score ${!field.descScore && "hidden"}`}>
          {field.descScore}점
        </p>
      </div>

      <div className="slider">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          step={12.5}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(event, newValue) =>
            updateField("descScore", valueLabelFormat(newValue))
          }
        />
      </div>
    </StyeldQuestion>

    <DialogActions className="bottom">
      <Circle all={4} now={step + 1} />
      <div>
        <Button onClick={prevStep}>이전</Button>
        <Button
          onClick={() => {
            if (!field.descScore) {
              alert("질문에 대하여 평점을 선택해주세요.");
            } else {
              nextStep();
            }
          }}
          color="primary"
        >
          다음
        </Button>
      </div>
    </DialogActions>
  </div>
);

const Step2 = ({ field, updateField, step, prevStep, nextStep }) => (
  <div className="contents">
    <DialogTitle>
      <span>{field.name}</span>
      <p className="step2subtitle">리뷰쓰기</p>
    </DialogTitle>

    <StyeldQuestion>
      {/* 질문2. 선생님, 원장님이 자녀들에 대한 지도 및 관심이 적극적이라고 생각하시나요? */}
      <div className="step2">
        <div>
          <span>Q2. </span>
          <span>
            선생님, 원장님이 자녀들에 대한 지도 및 관심이 적극적이라고
            생각하시나요?
          </span>
        </div>

        <p className={`score ${!field.teacherScore && "hidden"}`}>
          {field.teacherScore}점
        </p>
      </div>

      <div className="slider">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          step={12.5}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(event, newValue) =>
            updateField("teacherScore", valueLabelFormat(newValue))
          }
        />
      </div>

      {/* 질문3. 해당 유치원(어린이집)의 내부, 외부 시설이 자녀들이 생활하기에 적합하였나요? */}
      <div className="step2">
        <div>
          <span>Q3. </span>
          <span>
            해당 유치원(어린이집)의 내부, 외부 시설이 자녀들이 생활하기에
            적합하였나요?
          </span>
        </div>

        <p className={`score ${!field.facilityScore && "hidden"}`}>
          {field.facilityScore}점
        </p>
      </div>

      <div className="slider">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          step={12.5}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(event, newValue) =>
            updateField("facilityScore", valueLabelFormat(newValue))
          }
        />
      </div>

      {/* 질문4. 자녀들이 진해안 교육 및 활동이 자녀들에게 유익하고 도움이 되었나요? */}
      <div className="step2">
        <div>
          <span>Q4. </span>
          <span>
            자녀들이 진해안 교육 및 활동이 자녀들에게 유익하고 도움이 되었나요?
          </span>
        </div>

        <p className={`score ${!field.eduScore && "hidden"}`}>
          {field.eduScore}점
        </p>
      </div>

      <div className="slider">
        <Slider
          defaultValue={0}
          getAriaValueText={valuetext}
          valueLabelFormat={valueLabelFormat}
          step={12.5}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={(event, newValue) =>
            updateField("eduScore", valueLabelFormat(newValue))
          }
        />
      </div>
    </StyeldQuestion>

    <DialogActions className="bottom">
      <Circle all={4} now={step + 1} />
      <div>
        <Button onClick={prevStep}>이전</Button>
        <Button
          onClick={() => {
            if (
              !field.teacherScore ||
              !field.facilityScore ||
              !field.eduScore
            ) {
              alert("모든 질문에 대하여 평점을 선택해주세요.");
            } else {
              nextStep();
            }
          }}
          color="primary"
        >
          다음
        </Button>
      </div>
    </DialogActions>
  </div>
);

const Step3 = ({
  history,
  setDialog,
  field,
  updateField,
  step,
  prevStep,
  handlePostReviews,
}) => (
  <div className="contents">
    <DialogTitle>
      <span>{field.name}</span>
      <p className="step2subtitle">리뷰쓰기</p>
    </DialogTitle>

    <StyeldQuestion>
      {/* 유치원에 대한 한줄평을 작성해주세요. */}
      <div>
        <p>유치원에 대한 한줄평을 작성해주세요.</p>
        <TextField
          className="description"
          variant="outlined"
          value={field.description}
          onChange={(event) => updateField("description", event.target.value)}
          placeholder="최소 20자 이상"
        />
      </div>

      {/* 장점, 단점 */}
      <div>
        <p>장점</p>
        <TextField
          className="description"
          variant="outlined"
          value={field.goodThing}
          multiline
          rows={4}
          onChange={(event) => updateField("goodThing", event.target.value)}
          placeholder="최소 20자 이상"
        />
      </div>

      <div>
        <p>단점</p>
        <TextField
          className="description"
          variant="outlined"
          value={field.badThing}
          multiline
          rows={4}
          onChange={(event) => updateField("badThing", event.target.value)}
          placeholder="최소 20자 이상"
        />
      </div>

      <FormControlLabel
        control={
          <Checkbox
            checked={field.anonymous}
            onChange={(event) => updateField("anonymous", event.target.checked)}
            name="checkedB"
            color="primary"
          />
        }
        label="익명으로 작성"
      />
    </StyeldQuestion>

    <DialogActions className="bottom">
      <Circle all={4} now={step + 1} />
      <div>
        <Button onClick={prevStep}>이전</Button>
        <Button
          onClick={() => {
            if (field.description.length < 20) {
              alert("한줄평은 최소 20자 이상 작성해주세요");
            } else if (field.goodThing.length < 20) {
              alert("장점은 최소 20자 이상 작성해주세요");
            } else if (field.badThing.length < 20) {
              alert("단점은 최소 20자 이상 작성해주세요");
            } else {
              handlePostReviews(field)
                .then((res) => {
                  if (res.success) {
                    history.push(`/kindergarten/${field.kinderGarten_id}`);
                    setDialog(false);
                  } else {
                    alert(res.data.msg);
                  }
                })
                .catch((err) => console.log(err));
            }
          }}
          color="primary"
        >
          완료
        </Button>
      </div>
    </DialogActions>
  </div>
);

const Contents = ({
  history,
  step,
  field,
  updateField,
  setDialog,
  initStep,
  prevStep,
  nextStep,
  handlePostReviews,
}) => {
  switch (step) {
    case 0:
      return (
        <Step0
          step={step}
          updateField={updateField}
          nextStep={nextStep}
          setDialog={setDialog}
        />
      );

    case 1:
      return (
        <Step1
          field={field}
          updateField={updateField}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );

    case 2:
      return (
        <Step2
          field={field}
          updateField={updateField}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
        />
      );

    case 3:
      return (
        <Step3
          history={history}
          setDialog={setDialog}
          field={field}
          updateField={updateField}
          step={step}
          prevStep={prevStep}
          nextStep={nextStep}
          handlePostReviews={handlePostReviews}
        />
      );

    default:
      setDialog(false);
      initStep();
      return <></>;
  }
};

const ReviewDialog = ({ history, opened, setDialog, handlePostReviews }) => {
  const [step, setStep] = useState(0);
  const [field, setField] = useState({
    name: null, //유치원 이름
    kinderGarten_id: null, //유치원 id
    anonymous: false, // 익명 여부
    description: "", // 총평
    descScore: null, // 총평점
    teacherScore: null, // 선생님 점수
    facilityScore: null, // 시설 점수
    eduScore: null, // 교육 점수
    goodThing: "", // 장점
    badThing: "", // 단점
  });

  const initStep = useCallback(() => setStep(0), []);
  const prevStep = useCallback(() => setStep(step - 1), [step]);
  const nextStep = useCallback(() => setStep(step + 1), [step]);

  const updateField = useCallback(
    (name, value) => {
      setField((field) => ({
        ...field,
        [name]: value,
      }));
    },
    [field]
  );

  console.log(field);

  return (
    <Dialog open={opened} onClose={() => setDialog(false)}>
      <StyledDialog>
        <Contents
          history={history}
          step={step}
          field={field}
          updateField={updateField}
          setDialog={setDialog}
          initStep={initStep}
          prevStep={prevStep}
          nextStep={nextStep}
          handlePostReviews={handlePostReviews}
        />
      </StyledDialog>
    </Dialog>
  );
};

export default ReviewDialog;
