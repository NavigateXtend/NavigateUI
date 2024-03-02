'use client'
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';
import React, { useState } from 'react';

const codeStr = `const SpeedDial6 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconArray = [
        'https://i.ibb.co/z48T5zt/profile.png',
        'https://i.ibb.co/CBFBtJq/products.png',
        'https://i.ibb.co/j4RFp46/settings.png',
        'https://i.ibb.co/mvrprQD/payment.png',
        'https://i.ibb.co/b3pWsff/close.png',
        'https://i.ibb.co/TKRzWsV/statistics.png',
        'https://i.ibb.co/HFHNqCb/feedback.png',
        'https://i.ibb.co/TgJgTS5/tasmanagement.png',
        'https://i.ibb.co/s6t2Wgr/marketing.png'
    ];
    return (
        <div className="my-10">
            <div onClick={() => setIsOpen(true)} className={\` \${isOpen ? 'rotate-[360deg] gap-6 p-4' : 'gap-1'} mx-auto grid w-max origin-center rotate-0 grid-cols-3  duration-700\`}>
                {iconArray?.map((icon, idx) => (
                    <div
                        onClick={
                            idx === 4 && isOpen
                                ? (e) => {
                                      setIsOpen(false);
                                      e.stopPropagation();
                                  }
                                : null
                        }
                        key={idx}
                        className={\`\flex origin-center items-center justify-center  shadow-md \${isOpen ? 'bg h-16 w-16 rounded-lg ' : 'h-3 w-3 bg-black'} duration-500\`}
                    >
                        <img className={\`\${isOpen ? 'scale-100' : 'scale-0'}  origin-center duration-500\`} width={35} src={icon} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeedDial6;`

const SpeedDial6 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const iconArray = [
        'https://i.ibb.co/z48T5zt/profile.png',
        'https://i.ibb.co/CBFBtJq/products.png',
        'https://i.ibb.co/j4RFp46/settings.png',
        'https://i.ibb.co/mvrprQD/payment.png',
        'https://i.ibb.co/b3pWsff/close.png',
        'https://i.ibb.co/TKRzWsV/statistics.png',
        'https://i.ibb.co/HFHNqCb/feedback.png',
        'https://i.ibb.co/TgJgTS5/tasmanagement.png',
        'https://i.ibb.co/s6t2Wgr/marketing.png'
    ];
    return (
        <CodeBox codeStr={codeStr}>
            <div className="my-10 h-[80vh] flex justify-center items-center bg-cyan-100">
            <div onClick={() => setIsOpen(true)} className={`${isOpen ? 'rotate-[360deg] gap-6 p-4' : 'gap-1'} mx-auto grid w-max origin-center rotate-0 grid-cols-3 duration-700`}>
                {iconArray?.map((icon, idx) => (
                    <div
                        onClick={
                            idx === 4 && isOpen
                                ? (e) => {
                                      setIsOpen(false);
                                      e.stopPropagation();
                                  }
                                : null
                        }
                        key={idx}
                        className={`flex origin-center items-center justify-center shadow-md hover:scale-95 ${isOpen ? 'bg h-16 w-16 rounded-lg bg-white' : 'h-3 w-3 bg-cyan-900'} duration-500 `}
                    >
                        <Image className={`${isOpen ? 'scale-100' : 'scale-0'} origin-center duration-500 `} placeholder="blur" blurDataURL={icon} width={35} height={35} src={icon} alt={`Image`,idx} />
                    </div>
                ))}
            </div>
        </div>
        </CodeBox>
    );
};

export default SpeedDial6;
