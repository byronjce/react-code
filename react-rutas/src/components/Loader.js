import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
