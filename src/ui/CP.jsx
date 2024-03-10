'use client';
import { useState } from 'react';
import Highlighter from './Highlighter';

export default function CP({ children, code }) {
  const [tabNum, setTabNum] = useState(0);
  const totalConfig = [
    {
      item: 0,
      name: 'Preview',
      component: <div className="h-full w-full bg-black/40 p-5 dark:bg-white">{children}</div>
    },
    {
      item: 1,
      name: 'React',
      component: <Highlighter code={code}></Highlighter>
    }
  ];

  return (
    <div className={'my-10 h-fit w-full min-w-80 max-w-full'}>
      <div className="item-center mb-2 flex justify-between gap-2 text-sky-100">
        <div className={`item-center ${tabNum === 1 ? 'border-sky-500' : 'border-slate-400/20'} relative flex overflow-hidden rounded-sm border-2 duration-300`}>
          <div className={`absolute z-40 flex h-9 w-20 items-center ${tabNum === 1 ? 'bg-sky-500' : 'bg-slate-400/20'}  duration-300`} style={{ transform: `translateX(${tabNum * 101}%)` }}></div>
          {totalConfig?.map((item, inx) => (
            <div key={inx} onClick={() => setTabNum(inx)} className={`z-50 w-20 cursor-pointer select-none px-3 py-2 text-center text-sm`}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <div className={`relative w-full rounded-sm`}>
        <div className={`absolute inset-0 -z-50 rounded-sm backdrop-blur-lg ${tabNum === 1 ? 'bg-slate-400/20' : 'bg-slate-400/20'}`}></div>
        {totalConfig[tabNum].component}
      </div>
    </div>
  );
}
