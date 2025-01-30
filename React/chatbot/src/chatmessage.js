import React from 'react'

function ChatMessage(props) {
   
    const message = props.message;
    const sender = props.sender

    console.log(message)
  return (
    <div>
    {sender === 'sender' && (
        <img src="/user.png" width='40' alt="user" />
        )}
    {message}
    {sender === 'robot' && (
        <img src="/robot.png" width='40' alt="user" />
        )}
    </div>
  )
}

export default ChatMessage