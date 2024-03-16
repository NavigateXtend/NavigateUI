'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const code = `
export const Progress2 = () => {
  const [progressNumber, setProgressNumber] = useState(0);
  const ProgressNumberPercent = 90; // Adjust the number for your project.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressNumber((prevNumber) => (prevNumber === ProgressNumberPercent ? 0 : prevNumber + 1));
    }, 30); // Adjust the interval as per your requirement
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);
    return (
            <div className="flex flex-col w-[300px] gap-2">
                <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
                    <div style={{ width: \`\${progressNumber}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500\`} ></div>
                </div>
                <span className="text-lg font-medium text-center text-sky-400"> {ProgressNumber} %</span>
            </div>
    );
};
`;

const Progress2 = () => {
  const [progressNumber, setProgressNumber] = useState(0);
  const ProgressNumberPercent = 90; // Adjust the number for your project.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressNumber((prevNumber) => (prevNumber === ProgressNumberPercent ? 0 : prevNumber + 1));
    }, 30); // Adjust the interval as per your requirement
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);
  return (
    <CP code={code}>
      <div className="mx-auto flex w-[300px] flex-col gap-2">
        <div className={`flex h-3 w-full items-center justify-center rounded-full bg-sky-300`}>
          <div style={{ width: `${progressNumber}%` }} className={`transition-width mr-auto h-3 rounded-full bg-sky-600 duration-[1ms]`}></div>
        </div>
        <span className="text-center text-lg font-medium text-sky-500">{progressNumber} %</span>
      </div>
    </CP>
  );
};

export default Progress2;
