import React from 'react';
import './chatmessage.css';


function ChatMessage(props) {
    const message = props.message;
    const sender = props.sender;
    /*
    if (sender === 'robot'
    ) 
  return (
    <div>
    <img src='robot.png' width="50"/>
    {message}
    
    </div>
  )
    */
  return (
<div className={sender === "user" ? 'chat-message-user' : 'chat-message-robot'}>
    {sender === 'robot' &&  
    (<img src='robot.png' className='chat-message-profile'/>)
    }
    <div className='chat-messsage-text'>
    {message}
    </div>
    
    {sender === 'user' &&  
    (<img src='user.png' className='chat-message-profile'/>)
    }
    </div>
  )
}

export default ChatMessage;