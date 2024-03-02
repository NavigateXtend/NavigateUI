'use client';
import { sendGAEvent } from '@next/third-parties/google';
import { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import JSXCode from './JSXCode/JSXCode';
import Preview from './Preview/Preview';

export default function CodeBox({ children, codeStr, html }) {
  const [tabNum, setTabNum] = useState(0);
  // const [dark, setDark] = useState(false);
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
      name: 'React',
      component: <JSXCode codeStr={codeStr}></JSXCode>
    }
  ];

  return (
    <div className={"${dark ? 'dark' : null} my-10 h-fit w-full min-w-80 max-w-full"}>
      <div className="item-center mb-2 flex justify-between gap-2 text-sky-100">
        <div className={`item-center ${tabNum === 1 ? 'border-sky-500' : 'border-slate-400/20'} relative flex overflow-hidden rounded-sm border-2  duration-300`}>
          <div className={`absolute z-40 flex h-9 w-20 items-center ${tabNum === 1 ? 'bg-sky-500' : 'bg-slate-400/20'}  duration-300`} style={{ transform: `translateX(${tabNum * 100}%)` }}></div>
          {totalConfig?.map((item, inx) => (
            <div
              key={inx}
              onClick={() => {
                setTabNum(inx);
              }}
              className={`z-50 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm`}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* <button onClick={() => setDark((prev) => !prev)}>
            {dark ? (
              <svg className="rounded-full" viewBox="0 0 24 24" width={30} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    opacity="0.5"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12.0004C22 17.5232 17.5228 22.0004 12 22.0004C10.8358 22.0004 9.71801 21.8014 8.67887 21.4357C8.24138 20.3772 8 19.217 8 18.0004C8 15.7792 8.80467 13.7459 10.1384 12.1762C11.31 13.8818 13.2744 15.0004 15.5 15.0004C17.8615 15.0004 19.9289 13.741 21.0672 11.8572C21.3065 11.4612 22 11.5377 22 12.0004Z"
                    fill="#0ea5e9"
                  ></path>{' '}
                  <path
                    d="M2 12C2 16.3586 4.78852 20.0659 8.67887 21.4353C8.24138 20.3768 8 19.2166 8 18C8 15.7788 8.80467 13.7455 10.1384 12.1758C9.42027 11.1303 9 9.86422 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12Z"
                    fill="#0ea5e9"
                  ></path>{' '}
                </g>
              </svg>
            ) : (
              <svg className="rounded-full" viewBox="0 0 24 24" width={30} fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  {' '}
                  <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#0ea5e9"></path>{' '}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
                    fill="#0ea5e9"
                  ></path>{' '}
                  <g opacity="0.5">
                    <path
                      d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z"
                      fill="#0ea5e9"
                    ></path>{' '}
                    <path
                      d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z"
                      fill="#0ea5e9"
                    ></path>{' '}
                    <path
                      d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z"
                      fill="#0ea5e9"
                    ></path>{' '}
                    <path
                      d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z"
                      fill="#0ea5e9"
                    ></path>{' '}
                  </g>{' '}
                </g>
              </svg>
            )}
          </button> */}
        <div className="flex items-center gap-3">
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
                  <p className="inline-block rounded-md bg-[#0EA5E9] px-1 py-px text-xs text-white">copied!</p>
                  <svg className="inline-block w-6" fill="#0EA5E9" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g>
                    <g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                      <title>clipboard-check</title>{' '}
                      <path d="M26 5.25h-2c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h1.25v22.5h-18.5v-22.5h1.25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-2c-0.414 0-0.75 0.336-0.75 0.75v0 24c0 0.414 0.336 0.75 0.75 0.75h20c0.414-0 0.75-0.336 0.75-0.75v0-24c-0-0.414-0.336-0.75-0.75-0.75v0zM11 8.749h10c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-2.019c0.477-0.616 0.766-1.398 0.769-2.248v-0.001c0-2.071-1.679-3.75-3.75-3.75s-3.75 1.679-3.75 3.75v0c0.003 0.851 0.292 1.633 0.775 2.258l-0.006-0.009h-2.019c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM13.75 5c0-0 0-0.001 0-0.001 0-1.243 1.007-2.25 2.25-2.25s2.25 1.007 2.25 2.25c0 1.243-1.007 2.25-2.25 2.25v0c-1.242-0.002-2.248-1.008-2.25-2.249v-0zM20.326 13.494l-6.792 7.424-1.886-1.873c-0.136-0.136-0.323-0.22-0.531-0.22-0.414 0-0.749 0.335-0.749 0.749 0 0.209 0.085 0.398 0.223 0.534l0 0 2.44 2.424 0.015 0.006 0.007 0.015c0.13 0.122 0.306 0.197 0.499 0.197 0.199 0 0.38-0.080 0.512-0.21l-0 0 0.027-0.011 0.005-0.011 0.017-0.012 7.317-8c0.122-0.133 0.197-0.311 0.197-0.506 0-0.414-0.335-0.749-0.749-0.749-0.219 0-0.415 0.094-0.552 0.243l-0 0.001z"></path>{' '}
                    </g>
                  </svg>
                </>
              ) : (
                <div className="group relative">
                  <svg className="inline-block w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g stroke-width="0"></g>
                    <g stroke-linecap="round" stroke-linejoin="round"></g>
                    <g>
                      {' '}
                      <path
                        d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                        stroke="#0EA5E9"
                        stroke-width="1.5"
                      ></path>{' '}
                      <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#0EA5E9" stroke-width="1.5"></path>{' '}
                    </g>
                  </svg>
                  <div className=" invisible absolute right-full top-1 cursor-pointer whitespace-nowrap duration-200 group-hover:visible  group-hover:duration-300">
                    <p className="rounded-md bg-[#0EA5E9] px-1 py-px text-xs text-white">copy</p>{' '}
                  </div>
                </div>
              )}
            </button>
          </CopyToClipboard>
        </div>
      </div>
      <div className={`relative w-full rounded-sm`}>
        <div className={`absolute inset-0 -z-50 rounded-sm backdrop-blur-lg ${tabNum === 1 ? 'bg-slate-400/20' : 'bg-slate-400/20'} `}></div>
        {totalConfig[tabNum].component}
      </div>
    </div>
  );
}
