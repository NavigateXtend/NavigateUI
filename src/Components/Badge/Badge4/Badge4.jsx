import CodeBox from '@/Shared/CodeBox/CodeBox';
import React from 'react';

const codeStr = `
export const Badge4 = () => {
    return (
        <div className="relative mx-auto h-fit w-fit rounded-md bg-white p-2 hover:bg-gray-200">
               <svg width="40px"  viewBox="-4.32 -4.32 32.64 32.64" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0284C7"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" /><g id="SVGRepo_iconCarrier"> <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#38BDF8" /> <path d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z" fill="#38BDF8" /> </g></svg>
               <span className="h-[14px] w-[14px] bg-green-500 absolute rounded-full -top-1 -right-1 "></span>
        </div>
    );
};
`;

const Badge4 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="relative mx-auto h-fit w-fit rounded-md bg-gray-700 p-2 text-white ">
                <h2 className=" font-medium">Notification</h2>
                <span className="absolute -right-1 -top-1 h-[14px] w-[14px] rounded-full bg-green-500 "></span>
            </div>
        </CodeBox>
    );
};

export default Badge4;
