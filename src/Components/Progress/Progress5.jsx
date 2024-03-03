'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';

const codestr = `
export const Progress5 = () => {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
        <div className={\`flex h-3  w-[300px] mx-auto items-center justify-center rounded-full bg-sky-300\`}>
        <div style={{ width: \`\${ProgressNumber}%\` }} className={\`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500\`}></div>
    </div>
    );
};
`;

const Progress5 = () => {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
        <CodeBox codeStr={codestr}>

                <div className={`flex h-3  w-[300px] mx-auto items-center justify-center rounded-full bg-sky-300`}>
                    <div style={{ width: `${ProgressNumber}%` }} className={`transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500`}></div>
                </div>

        </CodeBox>
    );
};

export default Progress5;
