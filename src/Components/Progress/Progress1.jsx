'use client';

import CP from '@/ui/CP';
import React from 'react';

const code = `
export const Progress1 = () => {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
    <div className="flex flex-col w-[300px] mx-auto gap-2">
        <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
            <div style={{ width: \`\${ProgressNumber}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500\`} ></div>
        </div>
        <span className="text-lg font-medium text-center text-sky-500"> {ProgressNumber} %</span>
    </div>
    );
};
`;

const Progress1 = () => {
  const ProgressNumber = 76; // adjust the number to increase the progress number
  return (
    <CP code={code}>
      <div className="mx-auto flex w-[300px] flex-col gap-2">
        <div className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}>
          <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500`}></div>
        </div>
        <span className="text-center text-lg font-medium text-sky-500"> {ProgressNumber} %</span>
      </div>
    </CP>
  );
};

export default Progress1;
