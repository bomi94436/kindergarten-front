import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Dialog,
  DialogContent,
  TextField,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { FaSearch } from "react-icons/fa";

import SearchKindergartenItem from "./SearchKindergartenItem";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "550px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
}));

const StyledContents = styled.div`
  outline: none;
  transition: 0.4s;
  background-color: #f0f3f7;
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

const SearchKindergartenDialog = ({
  search,
  setRegisterSearch,
  getRegisterSearch,
  actor,
  index,
}) => {
  const classes = useStyles();

  const handleClose = () => {
    setRegisterSearch({ name: "opened", value: false });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getRegisterSearch(search.type, search.value, 0);
  };

  const contents = (
    <StyledContents className={classes.paper}>
      <h2 id="form-dialog-title" style={{ margin: "1.5rem 0 0 1.5rem" }}>
        유치원 검색
      </h2>
      <DialogContent
        style={{
          display: "flex",
          flexFlow: "column wrap",
          justifyContent: "center",
        }}
      >
        <StyledRow>
          <StyledRadio
            value={search.type}
            setRegisterSearch={setRegisterSearch}
          />
        </StyledRow>

        <StyledRow>
          <TextField
            variant="outlined"
            style={{ flexGrow: 1 }}
            type="text"
            value={search.value}
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
            {search.contents
              ? search.contents.map((element) => {
                  return (
                    <SearchKindergartenItem
                      key={element.id}
                      item={element}
                      actor={actor}
                      setRegisterSearch={setRegisterSearch}
                      handleClose={handleClose}
                      index={index}
                    />
                  );
                })
              : null}
          </div>
        </StyledRow>

        <StyledRow>
          <Pagination
            count={search.page.total}
            color="primary"
            style={{ margin: "0.5rem" }}
            onChange={(event, value) =>
              getRegisterSearch(search.type, search.value, value)
            }
          />
        </StyledRow>
      </DialogContent>
    </StyledContents>
  );

  return (
    <>
      <Dialog
        open={search.opened}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {contents}
      </Dialog>
    </>
  );
};

export default SearchKindergartenDialog;
