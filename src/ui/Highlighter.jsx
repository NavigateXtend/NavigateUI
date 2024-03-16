'use client';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import { FaCheck, FaRegClipboard } from 'react-icons/fa6';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const yourElementStyle = {
  background: 'transparent',
  maxHeight: '500px',
  borderRadius: '5px',
  fontSize: 14,
  border: 0,
  '.layout::-webkit-scrollbar-thumb': {
    background: '#646c72'
  }
};
export default function Highlighter({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      navigator.clipboard.writeText(code);
    }, 500);
  };
  return (
    <div className="layout relative">
      <SyntaxHighlighter customStyle={yourElementStyle} language="jsx" style={a11yDark}>
        {code.trim()}
      </SyntaxHighlighter>

      <button
        onClick={() => {
          handleCopy();
          sendGAEvent({
            category: 'Button Clicks',
            action: 'Copy Button triggered',
            label: 'Copy'
          });
        }}
        className="absolute right-2 top-2 z-50 rounded-md p-[5px] backdrop-blur-lg hover:bg-slate-500/60 dark:bg-slate-500/20"
      >
        {isCopied ? <FaCheck color="#fff" size={20} /> : <FaRegClipboard color="#fff" size={20} />}
      </button>
    </div>
  );
}
