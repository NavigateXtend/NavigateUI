'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const codestr =`
export const Progress1 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500); // Set the delay to adjust the animation
    }, []);
    const ProgressNumber = 56; // adjust the number to increase the progress number
    return (
            <div className="flex flex-col w-[300px] gap-2">
                <div className={\`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300\`}>
                    <div style={{ width: \`\${loaded ? ProgressNumber : '0'}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-500 duration-500\`} ></div>
                </div>
                <span className="text-lg font-medium text-center text-sky-400"> {ProgressNumber} %</span>
            </div>
    );
};
`


const Progress1 = () => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 500); // Set the delay to adjust the animation
    }, []);
    const ProgressNumber = 56; // adjust the number to increase the progress number
    return (
        <CodeBox codeStr={codestr}>
            <div className="flex flex-col w-[300px] mx-auto gap-2">
                <div className={`flex h-3 w-full  items-center justify-center rounded-full bg-sky-300`}>
                    <div style={{ width: `${loaded ? ProgressNumber : '0'}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-500 duration-500`} ></div>
                </div>
                <span className="text-lg font-medium text-center text-sky-400"> {ProgressNumber} %</span>
            </div>
        </CodeBox>
    );
};

export default Progress1;
