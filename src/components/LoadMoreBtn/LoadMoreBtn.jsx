import React from "react";
import "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className="LoadMoreButton" onClick={onLoadMore}>
      Load more ...
    </button>
  );
};

export default LoadMoreBtn;
