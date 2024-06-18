'use client';

import CP from '@/ui/CP';
import React from 'react';

const code = `
export default function StaticProgress() {
    
    const ProgressNumber = 76; // adjust the number to increase the progress number

    return (
        <div className={\`mx-auto flex  h-3 w-[300px] items-center justify-center rounded-full bg-sky-300\`}>
            <div style={{ width: \`\${ProgressNumber}%\` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500"></div>
        </div>
    );
}
`;

export default function StaticProgress(i) {
    const ProgressNumber = 76; // adjust the number to increase the progress number
    return (
        <CP code={code} i={i}>
            <div className={`mx-auto flex  h-3 w-[300px] items-center justify-center rounded-full bg-sky-300`}>
                <div style={{ width: `${ProgressNumber}%` }} className="transition-width mr-auto h-3 w-0 rounded-full  bg-sky-600 duration-500"></div>
            </div>
        </CP>
    );
}
