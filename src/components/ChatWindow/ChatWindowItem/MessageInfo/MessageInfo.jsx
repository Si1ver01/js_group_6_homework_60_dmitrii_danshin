import React from "react";
import classes from "./MessageInfo.module.css";

const MessageInfo = ({ message, date }) => {
  const formatDate = new Date(date).toLocaleString('ru');
  return (
    <div className={classes.MessageInfo}>
      <span>{message}</span>
      <span>{formatDate}</span>
    </div>
  );
};

export default MessageInfo;
