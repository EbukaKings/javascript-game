import React, { useState } from 'react';
import "./chatinput.css"


function ChatInput({setchatMessages, chatMessages}) {
   


    const [inputText, setInputText] = useState('');
    function saveInputText(event) {
        setInputText(event.target.value)

    }
    function sendMessage() {
        setchatMessages([...chatMessages, {
            message: inputText,
            sender: "user",
            id: crypto.randomUUID()
          }]);
        //   const response = Chatbot.getResponse(inputText);
          
          setInputText('');
    }
  return (
    <div className='chat-input-cointainer'>
        <input placeholder='Send a message to Chatbot' size='30' onChange={saveInputText} value={inputText} className='chat-input'/>
        <button onClick={sendMessage} className='send-button'>Send ➤</button>
    </div>
  )
}

export default ChatInput;