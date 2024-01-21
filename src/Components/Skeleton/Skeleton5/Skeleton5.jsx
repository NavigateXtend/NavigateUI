import React from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Skeleton5 = () => {
    const codestr = `
<div className="max-w-[700px] animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
    {/* User profile  Skeleton */}
    <div className="w-full flex gap-2 items-center">
        <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
        <div className="w-[80%]">
            <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
            <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
        </div>
    </div>
    {/* user post skeleton */}
    <div className="mt-8 w-full">
        <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
        <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
    </div>
</div>
  `;

    return (
        <CodeBox codeStr={codestr}>
            <div className="max-w-[700px] animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                {/* User profile  Skeleton */}
                <div className="w-full flex gap-2 items-center">
                    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
                    <div className="w-[80%]">
                        <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                        <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
                    </div>
                </div>
                {/* user post skeleton */}
                <div className="mt-8 w-full">
                    <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                    <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Skeleton5;
