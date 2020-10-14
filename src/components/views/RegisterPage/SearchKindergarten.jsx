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
import Pagination from "@material-ui/lab/Pagination";
import { ImNewTab } from "react-icons/im";
import { FaSearch } from "react-icons/fa";

import SearchKindergartenItem from "./SearchKindergartenItem";

const ModalCover = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: 0.4s;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "500px",
    height: "700px",
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

const StyledRadio = ({ value, setRegisterSearch }) => {
  return (
    <FormControl>
      <RadioGroup
        row
        value={value}
        onChange={(event) =>
          setRegisterSearch({ name: "type", value: event.target.value })
        }
      >
        <FormControlLabel
          value="name"
          control={<Radio color="primary" />}
          label="이름으로 검색"
        />
        <div style={{ margin: "1rem" }}></div>
        <FormControlLabel
          value="addr"
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

const SearchKindergarten = ({
  state,
  setRegisterSearch,
  getRegisterSearch,
}) => {
  const classes = useStyles();

  const handleOpen = () => {
    setRegisterSearch({ name: "opened", value: true });
  };

  const handleClose = () => {
    setRegisterSearch({ name: "opened", value: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getRegisterSearch(state.type, state.value, 0).then((res) => {
      // console.log(res);
    });
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
          <StyledRadio
            value={state.type}
            setRegisterSearch={setRegisterSearch}
          />
        </StyledRow>

        <StyledRow>
          <StyledInput
            variant="outlined"
            type="text"
            value={state.value}
            onChange={(event) =>
              setRegisterSearch({ name: "value", value: event.target.value })
            }
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginLeft: "1rem" }}
            onClick={(event) => handleSearch(event)}
          >
            <FaSearch />
          </Button>
        </StyledRow>

        <StyledRow style={{ flexFlow: "column wrap" }}>
          <div
            style={{ overflow: "hidden", overflowY: "scroll", height: "460px" }}
          >
            {state.contents
              ? state.contents.map((element) => {
                  return (
                    <SearchKindergartenItem
                      key={element.id}
                      id={element.id}
                      name={element.name}
                      address={element.address}
                      type={element.type}
                      setRegisterSearch={setRegisterSearch}
                    />
                  );
                })
              : null}
          </div>
        </StyledRow>

        <StyledRow>
          <Pagination
            count={state.page.total}
            color="primary"
            style={{ margin: "0.5rem" }}
            onChange={(event, value) =>
              getRegisterSearch(state.type, state.value, value)
            }
          />
        </StyledRow>
      </div>
    </StyledContents>
  );

  return (
    <>
      <p style={{ borderBottom: "1px solid gray", margin: "2rem" }}></p>
      <span style={{ margin: "1rem" }}>소속 유치원</span>
      <div>
        <StyledInput
          variant="outlined"
          type="text"
          value={state.selected.name || ""}
          disabled
        />
        <Button
          type="button"
          variant="contained"
          color="primary"
          style={{ marginLeft: "1rem" }}
          onClick={handleOpen}
        >
          유치원 검색&nbsp;
          <ImNewTab />
        </Button>

        <ModalCover
          open={state.opened}
          onClose={handleClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          {contents}
        </ModalCover>
      </div>
    </>
  );
};

export default SearchKindergarten;
