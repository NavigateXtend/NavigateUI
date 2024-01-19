import React, { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Accordion6 = () => {
    const datas = [
        {
            title: 'Connected Devices',
            subTitle: '4 unread messages',
            coloredText: '',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'Apps Permissions',
            subTitle: '3 incompleted steps',
            coloredText: '',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Pending task',
            subTitle: '2 issue to',
            coloredText: 'fix now',
           
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        
    ];
    const [isOpen, setIsOpen] = useState(0);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    return (
        <div className=" bg-[#18181B] rounded-lg mx-4 lg:mx-8">
            {/* title part  */}
            {datas.map((data, idx) => (
                <div key={idx}>
                    <div onClick={() => handleToggle(idx)} className={\`\${idx === data.length - 1 ? 'border-none' : 'border-b border-gray-400/10'} p-6  flex items-center gap-4\`}>
                        <div>
                            <img
                                className={\`w-14 h-14 bg-[#18181B] rounded-2xl border-2 p-0.5 \${
                                    idx === 0 ? 'border-green-500' : idx === 1 ? 'border-yellow-400' : idx === 2 ? 'border-[#0095FF]' : 'border-white'
                                }\`}
                                src={\`https://source.unsplash.com/600x600/?profile/\${idx}\`}
                                alt=""
                            />
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-lg text-white">{data?.title}</p>
                            <p className="text-gray-400">
                                {data?.subTitle} {/*give color based on condition */}
                                <span className={\`\${idx === 2 ? 'text-[#0095FF]' : 'text-gray-500'}\`}>{data.coloredText}</span>
                            </p>
                        </div>
                        <div className={\`duration-300 ease-in-out \${isOpen === idx ? '-rotate-90 ' : ''}\`}>
                            <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className={\`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  \${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>
                        <div className="overflow-hidden">
                            <div className={\`bg-zinc-800 p-6 text-gray-400 \`}>{data?.description}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion6;`

const Accordion6 = () => {
    const datas = [
        {
            title: 'Connected Devices',
            subTitle: '4 unread messages',
            coloredText: '',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'Apps Permissions',
            subTitle: '3 incompleted steps',
            coloredText: '',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Pending task',
            subTitle: '2 issue to',
            coloredText: 'fix now',
           
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        
    ];
    const [isOpen, setIsOpen] = useState(0);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    return (
        <CodeBox codeStr={codeStr}>
            <div className=" bg-[#18181B] rounded-lg mx-4 lg:mx-8">
                {/* title part  */}
                {datas.map((data, idx) => (
                    <div key={idx}>
                        <div onClick={() => handleToggle(idx)} className={`${idx === data.length - 1 ? 'border-none' : 'border-b border-gray-400/10'} p-6  flex items-center gap-4`}>
                            <div>
                                <img
                                    className={`w-14 h-14 bg-[#18181B] rounded-2xl border-2 p-0.5 ${
                                        idx === 0 ? 'border-green-500' : idx === 1 ? 'border-yellow-500' : idx === 2 ? 'border-[#0095FF]' : 'border-white'
                                    }`}
                                    src={`https://source.unsplash.com/600x600/?profile/${idx}`}
                                    alt=""
                                />
                            </div>
                            <div className="flex-1">
                                <p className="font-medium text-lg text-white">{data?.title}</p>
                                <p className="text-gray-400">
                                    {data?.subTitle} {/*give color based on condition */}
                                    <span className={`${idx === 2 ? 'text-[#0095FF]' : 'text-gray-500'}`}>{data.coloredText}</span>
                                </p>
                            </div>
                            <div className={`duration-300 ease-in-out ${isOpen === idx ? '-rotate-90 ' : ''}`}>
                                <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div className={`bg-zinc-800 p-6 text-gray-400 `}>{data?.description}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion6;
