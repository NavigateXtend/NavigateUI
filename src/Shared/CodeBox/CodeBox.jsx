'use client';
import { useState } from 'react';
import JSXCode from './JSXCode/JSXCode';
import Preview from './Preview/Preview';
import CopyToClipboard from 'react-copy-to-clipboard';
import { sendGAEvent } from '@next/third-parties/google';

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
        <div className={`my-10 h-fit w-[1000px] overflow-hidden rounded-md`}>
            <div className="item-center relative m-0 flex border-collapse justify-between gap-2 rounded-t-md bg-[#314669] text-sky-100">
                <div className="absolute inset-0 z-40 border-b-2 border-sky-100/40"></div>
                <div className="item-center flex">
                    {totalConfig?.map((item, inx) => (
                        <div
                            key={inx}
                            onClick={() => {
                                setTabNum(inx);
                            }}
                            className={`${tabNum === inx ? 'border-b-2 border-sky-300 bg-sky-800' : 'border-transparent'} z-50 cursor-pointer select-none px-3 py-2`}
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
                <CopyToClipboard text={codeStr} onCopy={handleCopy}>
                    <button
                        disabled={isCopied}
                        onClick={() =>
                            sendGAEvent({
                                category: 'Button Clicks',
                                action: 'Copy Button triggered',
                                label: 'Copy JSX'
                            })
                        }
                        className="copy-button z-50 me-2 rounded-md"
                    >
                        {isCopied ? (
                            <>
                                copied!{' '}
                                <svg
                                    className="inline-block w-5"
                                    version="1.1"
                                    id="Uploaded to svgrepo.com"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32"
                                    xmlSpace="preserve"
                                    fill="#38bdf8"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <style type="text/css"></style>
                                        <path
                                            class="stone_een"
                                            d="M10,6c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2.184 C18.403,0.837,17.304,0,16,0s-2.403,0.837-2.816,2H11c-0.552,0-1,0.448-1,1V6z M28,6v23c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3 V6c0-1.657,1.343-3,3-3h2v2H7C6.448,5,6,5.448,6,6v23c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1V6c0-0.552-0.448-1-1-1h-2V3h2 C26.657,3,28,4.343,28,6z M23,6c0,1.103-0.897,2-2,2H11C9.897,8,9,7.103,9,6H7v23h18V6H23z M19.5,19h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,18.776,19.776,19,19.5,19z M19.5,17h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,16.776,19.776,17,19.5,17z M19.5,15h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,14.776,19.776,15,19.5,15z"
                                        ></path>
                                    </g>
                                </svg>
                            </>
                        ) : (
                            <>
                                <svg
                                    class="inline-block w-5"
                                    version="1.1"
                                    id="Uploaded to svgrepo.com"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 32 32"
                                    xmlSpace="preserve"
                                    fill="#38bdf8"
                                >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <style type="text/css"></style>
                                        <path
                                            className="stone_een"
                                            d="M10,6c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V3c0-0.552-0.448-1-1-1h-2.184 C18.403,0.837,17.304,0,16,0s-2.403,0.837-2.816,2H11c-0.552,0-1,0.448-1,1V6z M28,6v23c0,1.657-1.343,3-3,3H7c-1.657,0-3-1.343-3-3 V6c0-1.657,1.343-3,3-3h2v2H7C6.448,5,6,5.448,6,6v23c0,0.552,0.448,1,1,1h18c0.552,0,1-0.448,1-1V6c0-0.552-0.448-1-1-1h-2V3h2 C26.657,3,28,4.343,28,6z M23,6c0,1.103-0.897,2-2,2H11C9.897,8,9,7.103,9,6H7v23h18V6H23z M19.5,19h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,18.776,19.776,19,19.5,19z M19.5,17h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,16.776,19.776,17,19.5,17z M19.5,15h-7c-0.276,0-0.5-0.224-0.5-0.5 c0-0.276,0.224-0.5,0.5-0.5h7c0.276,0,0.5,0.224,0.5,0.5C20,14.776,19.776,15,19.5,15z"
                                        ></path>
                                    </g>
                                </svg>
                            </>
                        )}
                    </button>
                </CopyToClipboard>
            </div>
            <div className={`m-0 w-full rounded-b-lg`}>{totalConfig[tabNum].component}</div>
        </div>
    );
};

export default CodeBox;
