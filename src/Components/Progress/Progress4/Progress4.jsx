'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const codestr = `
export const Progress4 = () => {
  const [progressNumber, setProgressNumber] = useState(0);
  const ProgressNumberPercent = 90; // Adjust the number for your project.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressNumber((prevNumber) => (prevNumber === ProgressNumberPercent ? 0 : prevNumber + 1));
    }, 50); // Adjust the interval as per your requirement
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);// adjust the number to increase the progress number
    return (
    <div className="mx-auto flex w-[300px] flex-col gap-2">
      <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
        <div style={{ width: \`\${progressNumber}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-[1ms]\`}></div>
      </div>
      <span style={{ marginLeft: \`\${progressNumber - 7}%\` }} className="flex text-lg font-medium  text-sky-500">
        {progressNumber}%
      </span>
    </div>
    );
};
`;

const Progress4 = () => {
  const [progressNumber, setProgressNumber] = useState(0);
  const ProgressNumberPercent = 90; // Adjust the number for your project.
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressNumber((prevNumber) => (prevNumber === ProgressNumberPercent ? 0 : prevNumber + 1));
    }, 50); // Adjust the interval as per your requirement
    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, []);// adjust the number to increase the progress number
  return (
    <CodeBox codeStr={codestr}>
      <div className="mx-auto flex w-[300px] flex-col gap-2">
        <div className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}>
          <div style={{ width: `${progressNumber}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-[1ms]`}></div>
        </div>
        <span style={{ marginLeft: `${progressNumber - 7}%` }} className="flex text-lg font-medium  text-sky-500">
          {progressNumber}%
        </span>
      </div>
    </CodeBox>
  );
};

export default Progress4;
