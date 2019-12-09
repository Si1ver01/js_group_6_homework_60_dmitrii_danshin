import React from "react";
import classes from "./ChatWindow.module.css";
import ChatWindowItem from "./ChatWindowItem/ChatWindowItem";
import Preloader from "../Ui/Preloader/Preloader.jsx";

const ChatWindow = ({ list, showPreloader }) => {
  const listReverse = [...list].reverse();
  return (
    <div className={classes.ChatWindow}>
      {showPreloader ? (
        <Preloader />
      ) : (
        listReverse.map((post, index) => (
          <ChatWindowItem
            key={index}
            nick={post.author}
            message={post.message}
            date={post.datetime}
          />
        ))
      )}
    </div>
  );
};

export default ChatWindow;
