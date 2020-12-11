
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Constants from '../constants/config';
import { Grid, Button } from '@material-ui/core';
import Editor from './Editor';
import Results from './Results';

const executeUrl = process.env.NODE_ENV === 'production' ? Constants.PROD_EXECUTE_ENDPOINT : Constants.DEV_EXECUTE_ENDPOINT;
const disableCode = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_USE_AWS === 'false' : false;

const borderRightStyle = { borderRight: '1px solid #a6d4fa' };
const borderLeftStyle = { borderLeft: '1px solid #a6d4fa' };

function SingleEditorWrapper(props) {
    const [executingCode, setExecutingCode] = useState(disableCode);
    const [code, setCode] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {

    }, []);

    const executeCode = () => {
        console.log(results);
        setExecutingCode(true);

        axios.post(executeUrl, { 'code': code })
            .then(response => {
                switch(response.data.success) {
                case false:
                    setResults([response.data.error_message, ...results]);
                    break;
                default:
                    const result = response.data.std_output === '' ? response.data.err_output : response.data.std_output;
                    setResults([result, ...results]);
                }
                setExecutingCode(false);
            }).catch(error => {
                console.log('Failed to execute');
                setExecutingCode(false);
            });
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={borderRightStyle}>
                    <Editor source={code} onChange={(message) => setCode(message)} />
                </Grid>
                <Grid item xs={6} style={borderLeftStyle}>
                    <Results source={results.join('\n\n')} />
                </Grid>
            </Grid>
            <Button variant='contained' color='primary' onClick={executeCode} disabled={executingCode}>Run Code</Button>
        </div>
    )

}

export default SingleEditorWrapper;
