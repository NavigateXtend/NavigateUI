'use client';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaCheck, FaRegClipboard } from 'react-icons/fa6';

export default function Highlighter({ code }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
      navigator.clipboard.writeText(code);
    }, 2500);
  };
  return (
    <div className="relative">
      <SyntaxHighlighter customStyle={{ background: 'transparent', maxHeight: '500px', borderRadius: '5px', fontSize: 14, border: 0 }} language="jsx" style={a11yDark}>
        {code}
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
        className="copy-button absolute right-2 top-2 z-50 me-2 rounded-md border border-[#a1a1aa] p-2 hover:bg-white/10"
      >
        {isCopied ? <FaCheck color="#a1a1aa" size={20} /> : <FaRegClipboard color="#a1a1aa" size={20} />}
      </button>
    </div>
  );
}
