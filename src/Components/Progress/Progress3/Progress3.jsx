'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const codestr =`
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
`


const Progress3 = () => {

    const ProgressNumber = 41; // adjust the number to increase the progress number
    return (
        <CodeBox codeStr={codestr}>
            <div className="flex flex-col w-[500px] mx-auto gap-2">
                <div className={`flex h-5 w-full  items-center justify-center rounded-full bg-sky-300`}>
                    <div style={{ width: `${ProgressNumber}%` }} className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-sky-600 duration-500`} >
                    <span className="font-medium text-sm text-center text-gray-300"> {ProgressNumber} %</span>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Progress3;