import { useState } from 'react';
import AceEditor from 'react-ace';

// Import css files from react-ace.
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-textmate';

function Editor(props) {
    // Configuring editor for sizing.
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState('auto');
    let onResize = (width, height) => {
        setHeight(height);
        setWidth(width);
    }

    // eslint-disable-next-line
    onResize = onResize.bind(this);

    let onChange = (value) => {
        props.onChange(value)
    }

    return (
        <div>
            <AceEditor
                name='editor'
                mode='python'
                theme='textmate'
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
