import React, { Component } from "react";
import classes from "./Chat.module.css";
import ChatWindow from "../../components/ChatWindow/ChatWindow";
import SendMessage from "../../components/SendMessage/SendMessage";
import axios from "../../axios/axios.js";
import qs from 'qs';


class Chat extends Component {
  state = {
    messageList: [],
    lastDate: "",
    sendMessage: {
      message: "",
      author: ""
    }
  };

  inpuntHandler = (value, name) => {
    const sendMessage = { ...this.state.sendMessage };
    sendMessage[name] = value;
    this.setState({ sendMessage });
  };

  sendMessage = (event) => {
    event.preventDefault();
    const sendMessage = {...this.state.sendMessage};
    axios.post('messages',qs.stringify(sendMessage));
    sendMessage['message'] = '';
    this.setState({sendMessage});
  };

  async componentDidMount() {
    const response = await axios.get("messages");
    const lastDate = response.data[response.data.length - 1].datetime;
    this.setState({
      messageList: [...response.data],
      lastDate
    });
    setInterval(async () => {
      const response = await axios.get(`messages?datetime=${this.state.lastDate}`);
      if (response.data.length) {
        const lastDate = response.data[response.data.length - 1].datetime;
        this.setState({
          messageList: [...this.state.messageList, ...response.data],
          lastDate
        });
      }
    }, 3000);
  }

  render() {
    return (
      <div className={classes.Chat}>
        <ChatWindow list={this.state.messageList} />
        <SendMessage
          {...this.state.sendMessage}
          inputHandler={this.inpuntHandler}
          buttonHandler={this.sendMessage}
        />
      </div>
    );
  }
}

export default Chat;
