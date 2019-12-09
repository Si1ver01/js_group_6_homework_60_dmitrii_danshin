import React from 'react'
import classes from './ChatWindowItem.module.css'
import NickName from './NickName/NickName'
import MessageInfo from './MessageInfo/MessageInfo'

const ChatWindowItem = ({nick,date,message}) => {
  return (
    <div className={classes.ChatWindowItem}>
      <NickName nick={nick}/>
      <MessageInfo date={date} message={message}/>
    </div>
  )
}

export default ChatWindowItem
