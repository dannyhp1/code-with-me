
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import * as Constants from '../constants/config';
import Editor from './Editor';

let socketUrl, socket;
let socketOptions = Constants.SOCKET_OPTIONS;

switch(process.env.NODE_ENV) {
    case 'production':
        if (process.env.REACT_APP_USE_AWS === 'true') {
            socketUrl = Constants.PROD_SOCKET_AWS_ENDPOINT;
            socketOptions.path = Constants.PROD_SOCKET_AWS_PATH;
        } else {
            socketUrl = Constants.PROD_SOCKET_HEROKU_ENDPOINT;
        }
        break;
    default:
        socketUrl = Constants.DEV_SOCKET_ENDPOINT;
}

function DualEditorWrapper(props) {
    const [connected, setConnected] = useState(false);
    const [code, setCode] = useState('');

    useEffect(() => {
        socket = io(socketUrl, socketOptions);

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
            <p>Dual Editor Wrapper!</p>
            <p>Connected: {connected ? 'true' : 'false'}</p>
            <Editor source={code} onChange={(message) => updateCode(message)} />
        </div>
    )

}

export default DualEditorWrapper;
