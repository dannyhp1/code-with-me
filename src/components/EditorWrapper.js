
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Editor from './Editor';

let serverUrl, socket;
let options = {
    transports: ['websocket'],
};

if (process.env.NODE_ENV === 'production') {
  if (process.env.REACT_APP_USE_AWS === "true") {
    serverUrl = 'https://aws.dannyhp.com';
    options.path = '/code-with-me-socket';
  } else {
    serverUrl = 'https://code-with-me-phamdann.herokuapp.com';
  }
} else {
  serverUrl = 'http://127.0.0.1:8181';
}

socket = io(serverUrl, options);

function EditorWrapper(props) {
    const [connected, setConnected] = useState(false);
    const [code, setCode] = useState('testing');

    useEffect(() => {
        socket.on('connected', () => {
            console.log('Connected to the server\'s WebSocket.');
            setConnected(true);
        });

        socket.on('code_change', (text) => {
            console.log('Got a new code change...');
            setCode(text);
        });

        return () => socket.disconnect();
    }, []);

    const transmitUpdatedCode = (message) => {
        console.log('Calling to transmit code...');
        socket.emit('code_change', message);
    }

    const updateCode = (message) => {
        setCode(message);
        transmitUpdatedCode(message);
    }

    return (
        <div>
            <p>Connected: {connected ? 'true' : 'false'}</p>
            <Editor source={code} onChange={(message) => updateCode(message)} />
        </div>
    )

}

export default EditorWrapper;
