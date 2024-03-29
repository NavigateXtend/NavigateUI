'use client';
import { useState } from 'react';
import Highlighter from './Highlighter';

export default function CP({ children, code }) {
  const [tabNum, setTabNum] = useState(0);

  const totalConfig = [
    {
      item: 0,
      name: 'Preview',
      component: <div className="h-full w-full p-5">{children}</div>
    },
    {
      item: 1,
      name: 'React',
      component: <Highlighter code={code} />
    }
  ];

  return (
    <div className={`my-5 h-fit w-full min-w-80 max-w-full`}>
      <div className="item-center mb-2 flex justify-between gap-2">
        <div className={`item-center ${tabNum === 1 ? 'border-sky-500' : 'border-slate-800 dark:border-slate-400/50'} relative flex overflow-hidden rounded-sm border-2 duration-300`}>
          <div
            className={`absolute z-40 flex h-9 w-20 items-center ${tabNum === 1 ? 'bg-sky-500' : 'bg-slate-800 dark:bg-slate-400/50'}  duration-300`}
            style={{ transform: `translateX(${tabNum * 101}%)` }}
          ></div>

          <button onClick={() => setTabNum(0)} className={`z-50 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm ${tabNum === 0 ? 'text-white' : 'text-black dark:text-white'} `}>
            Preview
          </button>
          <button onClick={() => setTabNum(1)} className={`z-50 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm ${tabNum === 1 ? 'text-white' : 'text-black dark:text-white'} `}>
            React
          </button>
        </div>
      </div>
      <div className={`relative w-full rounded-sm`}>
        <div className={`absolute inset-0 -z-50 rounded-sm backdrop-blur-lg ${tabNum === 1 ? 'bg-slate-800 dark:bg-slate-400/20' : ' border border-slate-800 dark:border-slate-400/30'}`}></div>
        {totalConfig[tabNum].component}
      </div>
    </div>
  );
}
