import { useState } from 'react';
import AceEditor from 'react-ace';

// Import css files from react-ace.
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-dracula';

function Editor(props) {
    // Configuring editor for sizing.
    const [height, setHeight] = useState('60vh');
    const [width, setWidth] = useState('auto');
    let onResize = (width, height) => {
        setHeight(height);
        setWidth(width);
    }

    onResize = onResize.bind(this);

    let onChange = (value) => {
        props.onChange(value)
    }

    return (
        <div style={{ width: '500px', height: '700px',  }}>
            <AceEditor
                name='editor'
                mode='python'
                theme='dracula'
                height={height}
                width={width}
                value={props.source}
                onChange={onChange}
                editorProps={{ $blockScrolling: true }}
                setOptions={{ showLineNumbers: true }}
            />
        </div>
    )
}

export default Editor;
