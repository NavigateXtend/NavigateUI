'use client';
import CP from '@/ui/CP';
import Image from 'next/image';
import React, { useState } from 'react';

const code = `const SpeedDial6 = () => {
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
                    <div onClick={ idx === 4 && isOpen ? (e) => { setIsOpen(false);
                                      e.stopPropagation();
                                  }
                                : null
                        }
                        key={idx} className={\`\flex origin-center items-center justify-center  shadow-md \${isOpen ? 'bg h-16 w-16 rounded-lg ' : 'h-3 w-3 bg-black'} duration-500\`}>
                        <img className={\`\${isOpen ? 'scale-100' : 'scale-0'}  origin-center duration-500\`} width={35} src={icon}  alt="speed dial navigate ui" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpeedDial6;`;

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
    <CP code={code}>
      <div className="my-10 flex h-[400px] items-center justify-center">
        <div onClick={() => setIsOpen(true)} className={`${isOpen ? 'rotate-[0deg] gap-2 p-4' : 'gap-1'} mx-auto grid w-max origin-center rotate-90 grid-cols-3 duration-700`}>
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
              className={`flex origin-center items-center justify-center self-center justify-self-center shadow-md hover:scale-95 ${isOpen ? ' bg-white' : 'size-3 bg-cyan-900'} ${idx === 4 && isOpen ? 'size-10 rounded-full p-2' : 'size-16 rounded-sm'} duration-500 `}
            >
              <Image
                className={`${isOpen ? 'scale-100' : 'scale-0'} origin-center duration-300 `}
                placeholder="blur"
                blurDataURL={icon}
                width={35}
                height={35}
                src={icon}
                alt="speed dial navigate ui"
              />
            </div>
          ))}
        </div>
      </div>
    </CP>
  );
};

export default SpeedDial6;
