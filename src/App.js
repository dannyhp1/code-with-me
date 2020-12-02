import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import logo from './logo.svg';
import './App.css';

const socket = io('http://127.0.0.1:8080', {
  transports: ['websocket']
})

function App() {
  console.log(process.env.NODE_ENV);

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
      </header>
    </div>
  );
}

export default App;
