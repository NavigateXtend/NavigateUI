import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';

const codeStr = `export const InputType4 = () => {
    return (
        <div className="relative w-max">
            <input className=" peer border-b border-[#1B8EF8]  py-2 text-[#1B8EF8] focus:outline-none " placeholder="" type="text" />
            <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">Email</label>
        </div>
    );
};`;
export const InputType4 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="relative w-max">
                <input className=" peer border-b border-[#1B8EF8] bg-transparent  py-2 text-[#1B8EF8] focus:outline-none " placeholder="" type="text" />
                <label
                    className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
                    htmlFor=""
                >
                    Email
                </label>
            </div>
        </CodeBox>
    );
};
