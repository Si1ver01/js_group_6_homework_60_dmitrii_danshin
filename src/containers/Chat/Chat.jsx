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
    showLoader : false ,
    sendMessage: {
      message: "",
      author: "Bublik"
    }
  };

  interval = null;

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
    this.setState({showLoader: true})
    const response = await axios.get("messages");
    this.setState({
      messageList: [...response.data],
      lastDate : response.data[response.data.length - 1].datetime,
      showLoader : false
    });
    this.interval = setInterval(async () => {
      const response = await axios.get(`messages?datetime=${this.state.lastDate}`);
      if (response.data.length) {
        this.setState({
          messageList: [...this.state.messageList, ...response.data],
          lastDate : response.data[response.data.length - 1].datetime,
        });
      }
    }, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className={classes.Chat}>
        <ChatWindow list={this.state.messageList} showPreloader={this.state.showLoader}/>
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
