import React from "react";
import SearchItem from "./SearchItem";
import { Pagination } from "@material-ui/lab";

const SearchList = ({ search, getSearch, getLatLng }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexFlow: "column wrap",
          marginTop: "1.5rem",
        }}
      >
        {search.contents &&
          search.contents.map((element) => (
            <SearchItem key={element.id} item={element} getLatLng={getLatLng} />
          ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pagination
          count={search.page.total + 1}
          color="primary"
          style={{ margin: "0.5rem" }}
          onChange={(event, value) =>
            getSearch("name", search.value, value - 1)
          }
        />
      </div>
    </div>
  );
};

export default SearchList;
