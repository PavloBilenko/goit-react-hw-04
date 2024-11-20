import React from "react";
import { RotatingLines } from "react-loader-spinner";
import "./Loader.module.css";

const Loader = () => {
  return (
    <div className="Loader">
      <RotatingLines
        strokeColor="#4fa94d"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;
