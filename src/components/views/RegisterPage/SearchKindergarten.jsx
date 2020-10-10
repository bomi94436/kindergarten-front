import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { ImNewTab } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import SearchKindergartenItems from "./SearchKindergartenItems";

const ModalCover = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: 0.4s;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 500,
    height: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const StyledContents = styled.div`
  outline: none;
  transition: 0.4s;
  border-radius: 20px;
  background-color: #f0f3f7;

  @keyframes ani {
    0% {
      transform: translate(0, 100px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(0, 0);
    }
  }

  animation: ani 0.4s forwards;
`;

const StyledRow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const StyledRadio = () => {
  return (
    <FormControl component="fieldset">
      <RadioGroup row aria-label="gender" name="gender1">
        <FormControlLabel
          value="name"
          control={<Radio color="primary" />}
          label="이름으로 검색"
        />
        <div style={{ margin: "1rem" }}></div>
        <FormControlLabel
          value="address"
          control={<Radio color="primary" />}
          label="주소로 검색"
        />
      </RadioGroup>
    </FormControl>
  );
};

const StyledInput = styled(TextField)`
  flex-grow: 1;
`;

const SearchKindergarten = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const contents = (
    <StyledContents className={classes.paper}>
      <h1 id="modal-title">유치원 검색</h1>
      <div
        id="modal-description"
        style={{
          margin: "1rem auto 0",
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <StyledRow>
          <StyledRadio />
        </StyledRow>

        <StyledRow>
          <StyledInput variant="outlined" type="text" />
          <Button
            type="button"
            variant="contained"
            color="primary"
            style={{ marginLeft: "1rem" }}
          >
            <FaSearch />
          </Button>
        </StyledRow>

        <div>
          <SearchKindergartenItems />
        </div>
      </div>
    </StyledContents>
  );

  return (
    <div>
      <StyledInput variant="outlined" type="text" disabled />
      <div
        style={{
          display: "flex",
          alignSelf: "stretch",
          marginLeft: "1rem",
        }}
      >
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleOpen}
        >
          유치원 검색&nbsp;
          <ImNewTab />
        </Button>
      </div>

      <ModalCover
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {contents}
      </ModalCover>
    </div>
  );
};

export default SearchKindergarten;
