import React from "react";
import classes from "./SendMessage.module.css";
import Input from "../Ui/Input/Input.jsx";
import Button from "../Ui/Button/Button";

const SendMessage = ({ message, author, inputHandler, buttonHandler }) => {
  return (
    <form
      className={classes.SendMessage}
      onSubmit={event => buttonHandler(event)}
    >
      <Input
        required={true}
        value={message}
        label="Enter your message"
        handler={event => inputHandler(event.target.value, "message")}
      />
      <Input
        required={true}
        value={author}
        label="Enter your nickname"
        handler={event => inputHandler(event.target.value, "author")}
      />
      <Button type="submit">Send message</Button>
    </form>
  );
};

export default SendMessage;
