import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';
const codeStr = `import { useState } from "react";
export const Accordion1 = () => {
const [isOpen, setIsOpen] = useState(null);
const accordions = [{title: "How do I create an account?", description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',}, {title: "What is your return policy?", description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",}, {title: "Can I change my shipping address?", description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",}, {title: "Are there any discounts for loyal customers?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",},];
const toggle = (idx) => {
  setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
};
return (
  <div className="border rounded-lg font-sans mx-4">
    {accordions.map((PerAccordion, idx) => (
      <div key={idx} className="p-4 border-b">
        <button onClick={() => toggle(idx)} className="flex justify-between items-center py-4 w-full h-full">
          <span className="text-xl">{PerAccordion.title}</span>
          <svg className="fill-[#00A2FF] shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><rect y="7" width="16" height="2" rx="1" className={\`transform origin-center transition duration-200 ease-out \${isOpen === idx && "!rotate-180"}\`}/><rect y="7" width="16" height="2" rx="1" className={\`transform origin-center rotate-90 transition duration-200 ease-out \${isOpen === idx && "!rotate-180"}\`}/></svg>
        </button>
        <div className={\`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  \${isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}\`}><div className="overflow-hidden">{PerAccordion.description}</div>
        </div>
      </div>
    ))}
  </div>
);
};`;
const Accordion1 = () => {
    const [isOpen, setIsOpen] = useState(null);
    const accordions = [
        {
            title: 'How do I create an account?',
            description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
        },
        {
            title: 'What is your return policy?',
            description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
        },
        {
            title: 'Can I change my shipping address?',
            description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
        },
        {
            title: 'Are there any discounts for loyal customers?',
            description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
        }
    ];

    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };

    return (
        <CodeBox codeStr={codeStr}>
            <div className="border rounded-lg font-sans mx-4">
                {accordions.map((PerAccordion, idx) => (
                    <div key={idx} className="p-4 border-b">
                        <button onClick={() => toggle(idx)} className="flex justify-between items-center py-4 w-full h-full ">
                            <span className="text-xl">{PerAccordion.title}</span>
                            <span className="p-2 rounded-full bg-blue-100 ">
                                <svg className="fill-[#00A2FF] mr-7 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="7" width="16" height="2" rx="1" className={`transform origin-center transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    <rect y="7" width="16" height="2" rx="1" className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                </svg>
                            </span>
                        </button>
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">{PerAccordion.description}</div>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion1;
