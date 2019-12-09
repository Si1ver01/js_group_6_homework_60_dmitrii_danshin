import React from "react";
import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={classes.center}>
      <div className={classes.Preloader}>
        <div />
        <div />
      </div>
    </div>
  );
};

export default Preloader;
