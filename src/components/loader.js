import React from "react";
import loader from "../images/loader.gif";

const Loader = () => {
  return (
    <img
      src={loader}
      style={{
        width: "20px",
        margin: "auto",
        display: "block",
      }}
      alt="Loading"
    />
  );
};

export default Loader;
