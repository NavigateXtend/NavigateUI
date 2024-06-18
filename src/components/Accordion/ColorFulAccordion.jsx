'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `export default function ColorFullAccordion() {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const data = [
        { title: 'Connected Devices', color: 'green', description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'},
        { title: 'Apps Permissions', color: 'sky', description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'},
        { title: 'Pending task', color: 'purple', description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'},
        { title: 'Card expired', color: 'amber', description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'},
        { title: 'Card expired', color: 'red', description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'}
    ];
    return (
        <div className="space-y-4 p-2 md:p-6">
            {data?.map((data, idx) => (
                <div key={idx}>
                    {/* header / Title */}
                    <div onClick={() => handleToggle(idx)} className={\`px-4 md:px-8 py-6 \${ idx === 0 ? 'bg-green-200 border-green-500' : idx === 1 ? 'bg-sky-200 border-sky-500' : idx === 2 ? 'bg-purple-200 border-purple-500' : idx === 3 ? 'bg-amber-200 border-amber-500' : idx === 4 ? 'bg-red-200 border-red-500' : 'bg-orange-200 border-orange-500'} border-l-[3px] cursor-pointer\`}>
                        <div className="flex items-center">
                            <span>
                                <svg className={\`mr-4 \${ idx === 0 ? 'fill-green-900' : idx === 1 ? 'fill-sky-900' : idx === 2 ? 'fill-purple-900' : idx === 3 ? 'fill-amber-900' : idx === 4 ? 'fill-red-900': 'fill-orange-900'} shrink-0\`} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={\`transform origin-center transition duration-200 ease-out \${isOpen === idx && '!rotate-180'}\`} /><rect y="7" width="16" height="2" rx="1" className={\`transform origin-center rotate-90 transition duration-200 ease-out \${isOpen === idx && '!rotate-180'}\`} /></svg>
                            </span>
                            <h4
                                className={\`\${ idx === 0 ? 'text-green-900' : idx === 1 ? 'text-sky-900' : idx === 2 ? 'text-purple-900' : idx === 3 ? 'text-amber-900' : idx === 4 ? 'text-red-900' : 'text-orange-900'} text-xl\`}>
                                {data.title}
                            </h4>
                        </div>
                    </div>
                    {/* body / content  */}
                    <div className={\`grid overflow-hidden transition-all duration-300 ease-in-out   \${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>
                        <div className="overflow-hidden">
                            <div className={\`pb-6 pr-4 pl-14 md:pl-16 border-l-[3px] text-sm  \${ idx === 0 ? 'text-green-900 bg-green-200 border-green-500' : idx === 1 ? 'text-sky-900 bg-sky-200 border-sky-500' : idx === 2 ? 'text-purple-900 bg-purple-200 border-purple-500' : idx === 3 ? 'text-amber-900 bg-amber-200 border-amber-500' : idx === 4 ? 'text-red-900 bg-red-200 border-red-500' : 'text-orange-900 bg-orange-200 border-orange-500'} \`}>
                                {data?.description}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}`;

export default function ColorFulAccordion(i) {
    const [isOpen, setIsOpen] = useState(null);

    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

    const data = [
        {
            title: 'Connected Devices',
            color: 'green',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'Apps Permissions',
            color: 'sky',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Pending task',
            color: 'purple',
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        {
            title: 'Card expired',
            color: 'amber',
            description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        },
        {
            title: 'OnGoing',
            color: 'red',
            description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        }
    ];
    return (
        <CP code={code} i={i}>
            <div className="space-y-4 p-2 md:p-6">
                {data?.map((data, idx) => (
                    <div key={idx}>
                        {/* header / Title */}
                        <div
                            onClick={() => handleToggle(idx)}
                            className={`px-4 py-6 md:px-8 ${
                                idx === 0
                                    ? 'border-green-500 bg-green-200'
                                    : idx === 1
                                      ? 'border-lime-500 bg-lime-200'
                                      : idx === 2
                                        ? 'border-amber-500 bg-amber-200'
                                        : idx === 3
                                          ? 'border-orange-500 bg-orange-200'
                                          : idx === 4
                                            ? 'border-teal-500 bg-teal-200'
                                            : 'border-orange-500 bg-orange-200'
                            } cursor-pointer border-l-[3px]`}
                        >
                            <div className="flex items-center">
                                <span>
                                    <svg
                                        className={`mr-4 ${
                                            idx === 0
                                                ? 'fill-green-900'
                                                : idx === 1
                                                  ? 'fill-lime-900'
                                                  : idx === 2
                                                    ? 'fill-amber-900'
                                                    : idx === 3
                                                      ? 'fill-orange-900'
                                                      : idx === 4
                                                        ? 'fill-teal-900'
                                                        : 'fill-orange-900'
                                        } shrink-0`}
                                        width="16"
                                        height="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect y="7" width="16" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                        <rect y="7" width="16" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    </svg>
                                </span>
                                <h4
                                    className={`${
                                        idx === 0
                                            ? 'text-green-900'
                                            : idx === 1
                                              ? 'text-lime-900'
                                              : idx === 2
                                                ? 'text-amber-900'
                                                : idx === 3
                                                  ? 'text-orange-900'
                                                  : idx === 4
                                                    ? 'text-teal-900'
                                                    : 'text-orange-900'
                                    } text-xl`}
                                >
                                    {data.title}
                                </h4>
                            </div>
                        </div>
                        {/* body / content  */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out   ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                <div
                                    className={`border-l-[3px] pb-6 pl-14 pr-4 text-sm md:pl-16  ${
                                        idx === 0
                                            ? 'border-green-500 bg-green-200 text-green-900'
                                            : idx === 1
                                              ? 'border-lime-500 bg-lime-200 text-lime-900'
                                              : idx === 2
                                                ? 'border-amber-500 bg-amber-200 text-amber-900'
                                                : idx === 3
                                                  ? 'border-orange-500 bg-orange-200 text-orange-900'
                                                  : idx === 4
                                                    ? 'border-teal-500 bg-teal-200 text-teal-900'
                                                    : 'border-orange-500 bg-orange-200 text-orange-900'
                                    } `}
                                >
                                    {data?.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CP>
    );
}
