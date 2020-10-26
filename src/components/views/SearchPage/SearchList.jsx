import React from "react";
import SearchItem from "./SearchItem";
import { Pagination } from "@material-ui/lab";

const SearchList = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          marginTop: "1.5rem",
        }}
      >
        <SearchItem />
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={4}
          color="primary"
          style={{ margin: "0.5rem" }}
          // onChange={(event, value) =>
          //   getRegisterSearch(search.type, search.value, value)
          // }
        />
      </div>
    </div>
  );
};

export default SearchList;
