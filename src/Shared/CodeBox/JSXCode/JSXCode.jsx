import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const JSXCode = ({ codeStr }) => {
    return (
        <SyntaxHighlighter language="jsx" style={atomDark}>
            {codeStr}
        </SyntaxHighlighter>
    );
};

export default JSXCode;
