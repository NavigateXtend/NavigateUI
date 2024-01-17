import { useState } from 'react';
import JSXCode from './JSXCode/JSXCode';
import Preview from './Preview/Preview';
import CopyToClipboard from 'react-copy-to-clipboard';

const CodeBox = ({ children, codeStr }) => {
    const [tabNum, setTabNum] = useState(0);
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1500);
    };
    const totalConfig = [
        {
            item: 0,
            name: 'Preview',
            component: <Preview>{children}</Preview>
        },
        {
            item: 1,
            name: 'JSX',
            component: <JSXCode codeStr={codeStr}></JSXCode>
        }
    ];

    return (
        <div className={`w-full rounded-md h-fit  px-4 py-3 my-20`}>
            <div className="flex gap-2 items-center justify-between">
                <div className="flex">
                    {totalConfig?.map((item, inx) => (
                        <div
                            key={inx}
                            onClick={() => {
                                setTabNum(inx);
                            }}
                            className={`${tabNum === inx ? ' border-gray-200 border-b-0 rounded-t-xl' : 'border-transparent'} border px-3 py-2 cursor-pointer select-none`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <CopyToClipboard text={codeStr} onCopy={handleCopy}>
                    <button className="copy-button border px-3 py-2 rounded-t-lg hover:bg-gray-300">
                        {isCopied ? (
                            <>
                                <svg viewBox="0 -0.5 25 25" fill="none" className="w-8 inline-block" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                                            stroke="#3995ff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="#3995ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                copied!
                            </>
                        ) : (
                            <>
                                <svg viewBox="0 -0.5 25 25" fill="none" className="w-8 inline-block" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z"
                                            stroke="#3995ff"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="#3995ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                copy
                            </>
                        )}
                    </button>
                </CopyToClipboard>
            </div>
            <div className={`${tabNum == 1 ? 'px-0 bg-[#1D1F21] h-full overflow-hidden' : 'flex py-10 justify-center'} border rounded-b-lg w-full`}>{totalConfig[tabNum].component}</div>
        </div>
    );
};

export default CodeBox;
