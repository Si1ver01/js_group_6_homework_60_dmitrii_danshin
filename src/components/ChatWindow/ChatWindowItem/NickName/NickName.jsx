import React from "react";
import classes from "./NickName.module.css";

const NickName = ({ nick }) => {
  return (
    <div className={classes.NickName}>
      <span>{nick}</span>
    </div>
  );
};

export default NickName;
