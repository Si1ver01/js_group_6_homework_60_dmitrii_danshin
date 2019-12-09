import React from "react";
import classes from "./ChatWindow.module.css";
import ChatWindowItem from "./ChatWindowItem/ChatWindowItem";

const ChatWindow = ({ list }) => {
  const listReverse = [...list].reverse();
  return (
    <div className={classes.ChatWindow}>
      {listReverse.map((post, index) => (
        <ChatWindowItem
          key={index}
          nick={post.author}
          message={post.message}
          date={post.datetime}
        />
      ))}
    </div>
  );
};

export default ChatWindow;
