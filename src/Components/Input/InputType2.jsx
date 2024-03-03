import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';

const codeStr = `export const InputType2 = () => {
    return (
        <div className="">
            <input className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] ring-offset-2 duration-300 focus:outline-none focus:ring-2" type="text" />
        </div>
    );
};
`;
export const InputType2 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="">
                <input
                    className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-2 ring-offset-[#0F1C31] duration-300 focus:outline-none focus:ring-2 dark:ring-offset-[#0F1C31]"
                    type="text"
                />
            </div>
        </CodeBox>
    );
};
