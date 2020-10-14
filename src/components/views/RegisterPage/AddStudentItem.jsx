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
import { AiOutlineMinusCircle } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

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

const AddStudentItem = ({ id, setRegisterValid }) => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            className={classes.input}
          />
        </Grid>

        {/* 생년월일 */}
        <Grid item xs={4} style={{ display: "flex" }}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              id="date-picker-dialog"
              format="yyyy/MM/dd"
              value={selectedDate}
              onChange={handleDateChange}
              className={classes.input}
            />
          </MuiPickersUtilsProvider>
        </Grid>

        {/* 소속 유치원 */}
        <Grid item xs={4} style={{ display: "flex" }}>
          <TextField variant="outlined" type="text" size="small" disabled />
          <IconButton
            type="button"
            variant="contained"
            color="primary"
            size="small"
            style={{ margin: "0.2rem", width: 33 }}
          >
            <FaSearch />
          </IconButton>
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
                type: "user",
                act: "delete",
                id: id,
              })
            }
          >
            <AiOutlineMinusCircle />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default AddStudentItem;
