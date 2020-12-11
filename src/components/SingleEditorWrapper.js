
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as Constants from '../constants/config';
import { Grid, Button } from '@material-ui/core';
import Editor from './Editor';
import Results from './Results';

let executeUrl;
switch(process.env.NODE_ENV) {
    case 'production':
        if (process.env.REACT_APP_USE_AWS === 'true') {
            executeUrl = Constants.PROD_EXECUTE_AWS_ENDPOINT;
        } else {
            executeUrl = Constants.PROD_EXECUTE_HEROKU_ENDPOINT;
        }
        break;
    default:
        executeUrl = Constants.DEV_EXECUTE_ENDPOINT;
}

const borderRightStyle = { borderRight: '1px solid #a6d4fa' };
const borderLeftStyle = { borderLeft: '1px solid #a6d4fa' };

const errorMessage = 'Cannot connect to the code-with-me\'s server right now. Please try again later.';

function SingleEditorWrapper(props) {
    const [executingCode, setExecutingCode] = useState(false);
    const [code, setCode] = useState('');
    const [results, setResults] = useState([]);

    const executeCode = () => {
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
                setResults([errorMessage, ...results]);
                setExecutingCode(false);
            });
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={borderRightStyle}>
                    <Editor source={code} onChange={(message) => setCode(message)} height={'85vh'} />
                </Grid>
                <Grid item xs={6} style={borderLeftStyle}>
                    <Results source={results.join('\n\n')} height={'85vh'} />
                </Grid>
            </Grid>
            <Button variant='contained' color='primary' onClick={executeCode} disabled={executingCode}>
                {executingCode ? 'Running code...' : 'Run Code'}
            </Button>
        </div>
    )

}

export default SingleEditorWrapper;
