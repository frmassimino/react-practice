import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {

  const [messages, setMessages] = React.useState(["", "", ""])

  return (
    <div className="App">
      {
        messages.length === 0 ?
        <h1>You're all caught up!</h1> :
        <h1>You have {messages.length} unread 
        {messages.length > 1 ? ' messages' : ' message'}</h1>
      }
    </div>
  );
}

export default App;
