'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const codestr =`
export const Progress3 = () => {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
    <div className="flex flex-col w-[300px] mx-auto gap-2">
        <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
            <div style={{ width: \`\${ProgressNumber}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-500 duration-500\`} ></div>
        </div>
        <span className="text-lg font-medium text-center text-sky-500"> {ProgressNumber} %</span>
    </div>
    );
};
`


const Progress3 = () => {

    const ProgressNumber = 58; // adjust the number to increase the progress number
    return (
        <CodeBox codeStr={codestr}>
            <div className="flex flex-col w-[500px] mx-auto gap-2">
                <div className={`flex h-7 w-full p-1 items-center justify-center rounded-full bg-sky-300`}>
                    <div style={{ width: `${ProgressNumber}%` }} className={`transition-width flex justify-center items-center mr-auto h-5 w-0 rounded-full  bg-sky-600 duration-500`} >
                    <span className="font-medium text-sm text-center text-white"> {ProgressNumber} %</span>
                    </div>
                </div>
                
            </div>
        </CodeBox>
    );
};

export default Progress3;