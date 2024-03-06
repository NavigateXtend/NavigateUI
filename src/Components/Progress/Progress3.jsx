'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const code = `
export const Progress3 = () => {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
        <div className="flex flex-col w-[500px] mx-auto gap-2">
        <div className={\`flex h-7 w-full  items-center justify-center rounded-full bg-sky-300\`}>
            <div style={{ width: \`\${ProgressNumber}%\` }} className={\`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-sky-600 duration-500\`} >
            <span className="font-medium  text-center text-white"> {ProgressNumber} %</span>
            </div>
        </div>
    </div>
    );
};
`;

const Progress3 = () => {
  const ProgressNumber = 41; // adjust the number to increase the progress number
  return (
    <CP code={code}>
      <div className="mx-auto flex w-[500px] flex-col gap-2">
        <div className={`flex h-5 w-full  items-center justify-center rounded-full bg-sky-300`}>
          <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto flex h-full w-0 items-center justify-center rounded-full  bg-sky-600 duration-500`}>
            <span className="text-center text-sm font-medium text-gray-300"> {ProgressNumber} %</span>
          </div>
        </div>
      </div>
    </CP>
  );
};

export default Progress3;
