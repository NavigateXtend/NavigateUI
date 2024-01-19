import React from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `
const Card13 = () => {
    return (
        <div className="max-w-[500px] border/10 my-20 p-6 md:px-8 py-10 rounded-2xl shadow-lg">
            <div className="flex flex-col justify-center items-center space-y-6 ">
                <svg width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#16BAC5" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                <h6 className="w-full md:w-[80%] text-slate-700 text-center font-medium mx-auto">You have enough points to redeem Keep going.!</h6>
                <div className="flex flex-col gap-4">
                    <button className="text-white bg-[#16BAC5] px-6 py-2 rounded-full">Redeem now</button>
                    <button className="text-slate-400 text-sm">Redeem later</button>
                </div>
            </div>
        </div>
    );
};

export default Card13;
`;

const Card13 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="max-w-[450px] border/10 my-20 p-6 md:px-8 py-10 rounded-2xl shadow-[0px_7px_30px_2px_rgba(100,100,111,0.1)] mx-auto">
                <div className="flex flex-col justify-center items-center space-y-6">
                    <svg width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#16BAC5"
                                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                            ></path>
                        </g>
                    </svg>
                    <h6 className="w-full md:w-[80%] text-slate-700 text-center font-medium mx-auto">You have enough points to redeem Keep going.!</h6>
                    <div className="flex flex-col gap-4">
                        <button className="text-white bg-[#16BAC5] px-6 py-2 rounded-full ">Redeem now</button>
                        <button className="text-slate-400 text-sm">Redeem later</button>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card13;

