import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import { inputIdByValid, inputPropsByValid } from "../../../utils/validation";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const InputCover = styled(TextField)`
  flex-grow: 1;
`;

export const FormInput = ({ element, setRegister, state }) => (
  <InputCover
    id={`${element.id} ${inputIdByValid(state.valid[element.id])}`}
    variant="outlined"
    error={inputPropsByValid(state.valid[element.id])}
    type={element.type}
    placeholder={element.placeholder}
    label={element.title}
    onChange={(event) =>
      setRegister({ name: element.id, value: event.target.value })
    }
    value={state.value[element.id]}
  />
);

export const FormButton = ({ element, getExistId, id }) => (
  <Button
    id={element.id}
    type="button"
    variant="contained"
    color="primary"
    onClick={(event) =>
      getExistId(id).then((res) => {
        alert(res.data.msg);
      })
    }
  >
    {element.title}
  </Button>
);

export const FormDropdown = ({ element, setRegister, state }) => {
  const classes = useStyles();
  let value = state.value.lastEmail;
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="dropdown">주소</InputLabel>
      <Select
        labelId="dropdown"
        id={element.id}
        onChange={(event) =>
          setRegister({
            name: element.id,
            value: event.target.value,
          })
        }
        value={value === "" ? "직접 입력" : value}
        label="주소"
      >
        {element.list.map((e, index) => (
          <MenuItem key={index} value={e}>
            {e}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
