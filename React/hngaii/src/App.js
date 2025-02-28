import logo from './logo.svg';
import './App.css';
import ChatInput from './chatinput';
import ChatMessage from './chatmessage';
import ChatMessages from './chatmessages';
import { useState } from 'react';

function App() {
  const array = useState([{
          message: "hello chatbot",
          sender: "user",
          id: "id1"
        },
        {
          message: "Hello how can i help you?",
          sender: "robot",
           id: "id2"
        },
        {
          message: "Can You get me todays date?",
          sender: "user",
           id: "id3"
        },
        {
          message: "Today is September 27th",
          sender: "robot",
           id: "id4"
        },])
      const [chatMessages, setchatMessages] = array;
  
  return (
    <div className='app-cointainer'>
      
      <ChatMessages  chatMessages={chatMessages}/>
      <ChatInput setchatMessages={setchatMessages} chatMessages={chatMessages}/>
    </div>
  );
}

export default App;
