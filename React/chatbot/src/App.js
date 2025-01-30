import logo from './logo.svg';
import './App.css';
import ChatInput from './home'
import ChatMessage from './chatmessage';

function App() {
  const chatMessages = [{
    message:'hello chatbot',
    sender:'user',
    id: 'id1'
  },
  {
    message:'can you get me todays date?',
    sender:'robot',
     id: 'id2'
  },
  {
    message:'Today is January 25',
    sender:'sender',
     id: 'id3'
  },
  {
    message:'how about flip a coin',
    sender:'robot',
     id: 'id4'
  }];
  
  return (
    <>
    <ChatInput/>
    {chatMessages.map((chatMessage) => {
    return(
      <ChatMessage 
      message={chatMessage.message} 
      sender={chatMessage.sender}
      key={chatMessage.id}/> 
    )
  })}
    </>
  );
}

export default App;
