
import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import * as Constants from '../constants/config';

function SingleEditorWrapper(props) {
    const [executingCode, setExecutingCode] = useState(false);
    const [code, setCode] = useState('');

    useEffect(() => {

    }, []);

    return (
        <div>
            <p>Single Editor Wrapper!</p>
            <Editor source={code} onChange={(message) => setCode(message)} />
        </div>
    )

}

export default SingleEditorWrapper;
