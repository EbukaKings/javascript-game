import { useEffect, useRef, useState } from 'react';
import React from 'react'
import ChatMessage from './chatmessage'
import './chatmessages.css'

function ChatMessages({chatMessages}) {
    const chatMessagesRef = useRef(null)
    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
    }, [chatMessages])
   
  return (
    
    <div className='chat-messages-cointainer' ref={chatMessagesRef}>
   
    { chatMessages.map((chatmessage) => {
        return(
          <ChatMessage message={chatmessage.message}
          sender={chatmessage.sender}
          key={chatmessage.id}
          />
        )
      })}
      </div>
  )
}

export default ChatMessages;