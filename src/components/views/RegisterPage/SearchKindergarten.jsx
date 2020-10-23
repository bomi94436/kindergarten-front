import React from "react";
import { Button, TextField } from "@material-ui/core";
import { ImNewTab } from "react-icons/im";
import SearchKindergartenDialog from "./SearchKindergartenDialog";

const SearchKindergarten = ({
  search,
  setRegisterSearch,
  getRegisterSearch,
}) => {
  const handleOpen = () => {
    setRegisterSearch({ name: "opened", value: true });
  };

  return (
    <>
      <p style={{ borderBottom: "1px solid gray", margin: "2rem" }}></p>
      <span style={{ margin: "1rem" }}>소속 유치원</span>
      <div>
        <TextField
          variant="outlined"
          type="text"
          value={search.selected.name || ""}
          style={{ flexGrow: 1 }}
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
        <SearchKindergartenDialog
          search={search}
          setRegisterSearch={setRegisterSearch}
          getRegisterSearch={getRegisterSearch}
        />
      </div>
    </>
  );
};

export default SearchKindergarten;
