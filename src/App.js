import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const server_url = 'http://code-with-me-phamdann.herokuapp.com';
const local_url = 'http://127.0.0.1:8080';

const socket = io(server_url, {
  transports: ['websocket']
})

function App() {
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    socket.on('message', (text) => {
        console.log("Got a new message...");
        setRecentMessage(text)
    });

    return () => socket.disconnect();
}, []);

  // const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [recentMessage, setRecentMessage] = useState('');

  const sendMessage = () => {
    console.log('Send a message!');
    socket.emit('message', 'Hello there world!');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          {recentMessage !== '' ? recentMessage : 'There was no recent message!'}
        </p>
        <button onClick={sendMessage}>Click me to send the message!</button>
      </header>
    </div>
  );
}

export default App;
