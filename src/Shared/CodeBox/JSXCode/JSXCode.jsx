import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
const JSXCode = ({ codeStr }) => {
    return (
        <SyntaxHighlighter customStyle={{ backgroundColor: '#1e293b', margin: '0px', borderRadius: 0, border: 0, }} language="jsx" style={atomDark}>
            {codeStr}
        </SyntaxHighlighter>
    );
};

export default JSXCode;
