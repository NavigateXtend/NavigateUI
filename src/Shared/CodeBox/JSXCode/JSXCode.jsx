import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function JSXCode({ codeStr }) {
  return (
    <SyntaxHighlighter customStyle={{ background: 'transparent', maxHeight: '700px', borderRadius: '5px', border: 0 }} language="jsx" style={a11yDark}>
      {codeStr}
    </SyntaxHighlighter>
  );
}
