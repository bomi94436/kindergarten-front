import React from "react";
import { CircularProgress } from "@material-ui/core";

const Loading = () => {
  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </div>
    </div>
  );
};

export default Loading;
