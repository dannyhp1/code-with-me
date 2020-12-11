
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Constants from '../constants/config';
import Editor from './Editor';
import { Button } from '@material-ui/core';

const executeUrl = process.env.NODE_ENV === 'production' ? Constants.PROD_EXECUTE_ENDPOINT : Constants.DEV_EXECUTE_ENDPOINT;
const disableCode = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_USE_AWS === 'false' : false;

function SingleEditorWrapper(props) {
    const [executingCode, setExecutingCode] = useState(disableCode);
    const [code, setCode] = useState('');

    useEffect(() => {

    }, []);

    const executeCode = () => {
        setExecutingCode(true);

        axios.post(executeUrl, { 'code': code })
            .then(response => {
                console.log(response);
                setExecutingCode(false);
            }).catch(error => {
                console.log('Failed to execute');
                setExecutingCode(false);
            });
    }

    return (
        <div>
            <p>Single Editor Wrapper!</p>
            <Editor source={code} onChange={(message) => setCode(message)} />
            <Button variant='contained' color='primary' onClick={executeCode} disabled={executingCode}>Run Code</Button>
        </div>
    )

}

export default SingleEditorWrapper;
