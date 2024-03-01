import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function JSXCode({ codeStr }) {
  return (
    <SyntaxHighlighter showLineNumbers customStyle={{ background: 'transparent', borderRadius: '5px', border: 0 }} language="jsx" style={atomDark}>
      {codeStr}
    </SyntaxHighlighter>
  );
}
