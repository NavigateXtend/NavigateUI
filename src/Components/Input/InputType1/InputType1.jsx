import React from 'react';
import CodeBox from './../../../Shared/CodeBox/CodeBox';

const codeStr = `export const InputType1 = () => {
    return (
        <div className="">
            <input className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
        </div>
    );
};`;
export const InputType1 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="">
                <input className="rounded-lg border bg-transparent border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
            </div>
        </CodeBox>
    );
};

