import { useState } from 'react';
import AceEditor from 'react-ace';

// Import css files from react-ace.
import 'ace-builds/src-noconflict/mode-text';
import 'ace-builds/src-noconflict/theme-textmate';

function Results(props) {
    // Configuring editor for sizing.
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState('auto');
    let onResize = (width, height) => {
        setHeight(height);
        setWidth(width);
    }

    // eslint-disable-next-line
    onResize = onResize.bind(this);

    return (
        <div>
            <AceEditor
                name='editor'
                mode='text'
                theme='textmate'
                height={height}
                width={width}
                value={props.source}
                showGutter={false}
                readOnly={true}
                highlightActiveLine={false}
                editorProps={{ $blockScrolling: true }}
                setOptions={{ showLineNumbers: false }}
            />
        </div>
    )
}

export default Results;
