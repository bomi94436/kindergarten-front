import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { HiMinusCircle } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

import SearchKindergartenDialog from "./SearchKindergartenDialog";

const useStyles = makeStyles((theme) => ({
  row: {
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginRight: "1rem",
  },
}));

const AddStudentItem = ({
  index,
  student,
  search,
  setRegister,
  setRegisterValid,
  setRegisterSearch,
  getRegisterSearch,
}) => {
  const classes = useStyles();

  const handleOpen = () => {
    setRegisterSearch({ name: "opened", value: true });
  };

  return (
    <>
      <Grid container className={classes.row}>
        {/* 이름 */}
        <Grid item xs={3}>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            value={student.value.name || ""}
            onChange={(event) =>
              setRegister({
                name: "name",
                value: event.target.value,
                actor: "student",
                index: index,
              })
            }
            className={classes.input}
          />
        </Grid>

        {/* 생년월일 */}
        <Grid item xs={4} style={{ display: "flex" }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              format="yyyy/MM/dd"
              value={student.value.date}
              onChange={(date) =>
                setRegister({
                  name: "date",
                  value: date,
                  actor: "student",
                  index: index,
                })
              }
              className={classes.input}
            />
          </MuiPickersUtilsProvider>
        </Grid>

        {/* 소속 유치원 */}
        <Grid item xs={4} style={{ display: "flex" }}>
          <TextField
            variant="outlined"
            type="text"
            size="small"
            value={student.kindergarten_selected.name || ""}
            disabled
          />
          <IconButton
            type="button"
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: "0.2rem", width: 33 }}
            onClick={handleOpen}
          >
            <FaSearch />
          </IconButton>
          <SearchKindergartenDialog
            search={search}
            setRegisterSearch={setRegisterSearch}
            getRegisterSearch={getRegisterSearch}
            actor="student"
            index={index}
          />
        </Grid>

        {/* 삭제 버튼 */}
        <Grid
          item
          xs={1}
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0.2rem",
          }}
        >
          <IconButton
            type="button"
            variant="contained"
            color="secondary"
            onClick={() =>
              setRegisterValid({
                actor: "user",
                act: "delete",
                index: index,
              })
            }
          >
            <HiMinusCircle />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AddStudentItem;
