'use client';
import CP from '@/ui/CP';
import React, { useState } from 'react';

const code = `export const Accordion2 = () => {
  const [isOpen, setIsOpen] = useState(null);
  const accordionsData = [{title: "Connected Devices",subTitle: "2 issue to",coloredText: "fix now",svg: (<svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 17.7H6.21C2.41 17.7 1.25 16.54 1.25 12.74V6.74C1.25 2.94 2.41 1.78 6.21 1.78H16.74C20.54 1.78 21.7 2.94 21.7 6.74C21.7 7.15 21.36 7.49 20.95 7.49C20.54 7.49 20.2 7.15 20.2 6.74C20.2 3.8 19.68 3.28 16.74 3.28H6.21C3.27 3.28 2.75 3.8 2.75 6.74V12.74C2.75 15.68 3.27 16.2 6.21 16.2H10C10.41 16.2 10.75 16.54 10.75 16.95C10.75 17.36 10.41 17.7 10 17.7Z" fill="#0095FF"></path><path d="M10 22.22C9.59 22.22 9.25 21.88 9.25 21.47V16.94C9.25 16.53 9.59 16.19 10 16.19C10.41 16.19 10.75 16.53 10.75 16.94V21.47C10.75 21.89 10.41 22.22 10 22.22Z" fill="#0095FF"></path><path d="M10 13.7H2C1.59 13.7 1.25 13.36 1.25 12.95C1.25 12.54 1.59 12.2 2 12.2H10C10.41 12.2 10.75 12.54 10.75 12.95C10.75 13.36 10.41 13.7 10 13.7Z" fill="#0095FF"></path><path d="M9.99999 22.22H6.73999C6.32999 22.22 5.98999 21.88 5.98999 21.47C5.98999 21.06 6.32999 20.72 6.73999 20.72H9.99999C10.41 20.72 10.75 21.06 10.75 21.47C10.75 21.88 10.41 22.22 9.99999 22.22Z" fill="#0095FF"></path><path d="M19.04 22.22H15.49C12.72 22.22 11.78 21.28 11.78 18.51V12.8C11.78 10.03 12.72 9.09 15.49 9.09H19.04C21.81 9.09 22.75 10.03 22.75 12.8V18.51C22.75 21.29 21.81 22.22 19.04 22.22ZM15.49 10.59C13.53 10.59 13.28 10.84 13.28 12.8V18.51C13.28 20.47 13.53 20.72 15.49 20.72H19.04C21 20.72 21.25 20.47 21.25 18.51V12.8C21.25 10.84 21 10.59 19.04 10.59H15.49Z" fill="#0095FF"></path><path d="M17.3 18.97C17.04 18.97 16.78 18.87 16.59 18.68C16.5 18.59 16.43 18.48 16.38 18.36C16.33 18.23 16.3 18.1 16.3 17.97C16.3 17.71 16.41 17.45 16.59 17.27C16.82 17.04 17.17 16.93 17.5 16.99C17.56 17.01 17.62 17.03 17.68 17.05C17.74 17.08 17.8001 17.11 17.85 17.14C17.91 17.18 17.96 17.22 18.01 17.27C18.19 17.45 18.3 17.71 18.3 17.97C18.3 18.1 18.27 18.23 18.22 18.36C18.17 18.48 18.1 18.59 18.01 18.68C17.96 18.73 17.91 18.77 17.85 18.8C17.8001 18.84 17.74 18.87 17.68 18.9C17.62 18.92 17.56 18.94 17.5 18.95C17.43 18.97 17.37 18.97 17.3 18.97Z" fill="#0095FF"></path></g></svg>),description:'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.',},{title: "Apps Permissions",subTitle: "3 apps have read permissions",coloredText: "",svg: (<svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70998 4.97998 4.47998 4.66998L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66998C20.29 4.97998 20.92 5.90997 20.92 6.72997L20.91 11.12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{" "}<path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>{" "}<path d="M12 12.5V15.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>),description:"Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.",},{title: "Pending task",subTitle: "",coloredText: "Complete your profile",svg: (<svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#EEA023" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{" "}</g></svg>),description:"Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.",},{title: "Card expired",subTitle: "",coloredText: "Please, update now",svg: (<svg width={30} fill="#CA1353" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g><g><path d="M0,23.6v464.8h512V23.6H0z M31.347,54.947h370.939v40.748H31.347V54.947z M480.653,457.054H31.347v-0.001V127.042h449.306 V457.054z M480.653,95.695h-47.02V54.947h47.02V95.695z"></path>{" "}</g></g><g<g>               <path d="M256,150.064L100.973,428.06h310.055L256,150.064z M256,214.426l101.654,182.288H154.345L256,214.426z"></path>{" "}</g></g><g><g><rect x="240.327" y="268.194" width="31.347" height="71.074"></rect></g></g><g><g><rect x="240.327" y="354.67" width="31.347" height="25.67"></rect>{" "}</g>{" "}</g>{" "}</g></svg>),description:"We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.",}];
  const handleToggle = (idx) => setIsOpen((prevIdx) => prevIdx === idx ? null : idx) ;

  return (
    <div className="my-20 bg-[#18181B] rounded-lg">
      {/* title part  */}
      {accordionsData.map((data, idx) => (
        <div key={idx}>
          <div onClick={() => handleToggle(idx)}
            className={\`\${idx === data.length - 1 ? "border-none" : "border-b border-gray-400/10"} py-4 px-6 flex items-center gap-4\`}>
            <div>{data?.svg}</div>
              <div className="flex-1">
                <p className="font-medium text-lg text-white">{data?.title}</p>
                <p className="text-gray-400">{data?.subTitle} 
                {/*give color based on condition */}
                <span className={\`\${ idx === 0 ? "text-[#0095FF]" : idx === 1 ? "text-white" : idx === 2 ? "text-amber-500" : idx === 3 ? "text-[#f54885] : "text-gray-500"}\`}>
                    {data.coloredText}
                </span>
                </p>
              </div>
              <div className={\`duration-300 ease-in-out \${isOpen === idx ? "-rotate-90 " : null}\`}><svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></div>
          </div>
  
          <div className={\`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 \${ isOpen === idx ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}\`}>
            <div className='overflow-hidden'>
              <div className={\`bg-zinc-800 p-6 text-gray-400 \`}>
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};`;

export default function Accordion2() {
  const datas = [
    {
      title: 'Connected Devices',
      subTitle: '2 issue to',
      coloredText: 'fix now',
      svg: (
        <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M10 17.7H6.21C2.41 17.7 1.25 16.54 1.25 12.74V6.74C1.25 2.94 2.41 1.78 6.21 1.78H16.74C20.54 1.78 21.7 2.94 21.7 6.74C21.7 7.15 21.36 7.49 20.95 7.49C20.54 7.49 20.2 7.15 20.2 6.74C20.2 3.8 19.68 3.28 16.74 3.28H6.21C3.27 3.28 2.75 3.8 2.75 6.74V12.74C2.75 15.68 3.27 16.2 6.21 16.2H10C10.41 16.2 10.75 16.54 10.75 16.95C10.75 17.36 10.41 17.7 10 17.7Z"
              fill="#0095FF"
            ></path>
            <path d="M10 22.22C9.59 22.22 9.25 21.88 9.25 21.47V16.94C9.25 16.53 9.59 16.19 10 16.19C10.41 16.19 10.75 16.53 10.75 16.94V21.47C10.75 21.89 10.41 22.22 10 22.22Z" fill="#0095FF"></path>
            <path d="M10 13.7H2C1.59 13.7 1.25 13.36 1.25 12.95C1.25 12.54 1.59 12.2 2 12.2H10C10.41 12.2 10.75 12.54 10.75 12.95C10.75 13.36 10.41 13.7 10 13.7Z" fill="#0095FF"></path>
            <path
              d="M9.99999 22.22H6.73999C6.32999 22.22 5.98999 21.88 5.98999 21.47C5.98999 21.06 6.32999 20.72 6.73999 20.72H9.99999C10.41 20.72 10.75 21.06 10.75 21.47C10.75 21.88 10.41 22.22 9.99999 22.22Z"
              fill="#0095FF"
            ></path>
            <path
              d="M19.04 22.22H15.49C12.72 22.22 11.78 21.28 11.78 18.51V12.8C11.78 10.03 12.72 9.09 15.49 9.09H19.04C21.81 9.09 22.75 10.03 22.75 12.8V18.51C22.75 21.29 21.81 22.22 19.04 22.22ZM15.49 10.59C13.53 10.59 13.28 10.84 13.28 12.8V18.51C13.28 20.47 13.53 20.72 15.49 20.72H19.04C21 20.72 21.25 20.47 21.25 18.51V12.8C21.25 10.84 21 10.59 19.04 10.59H15.49Z"
              fill="#0095FF"
            ></path>
            <path
              d="M17.3 18.97C17.04 18.97 16.78 18.87 16.59 18.68C16.5 18.59 16.43 18.48 16.38 18.36C16.33 18.23 16.3 18.1 16.3 17.97C16.3 17.71 16.41 17.45 16.59 17.27C16.82 17.04 17.17 16.93 17.5 16.99C17.56 17.01 17.62 17.03 17.68 17.05C17.74 17.08 17.8001 17.11 17.85 17.14C17.91 17.18 17.96 17.22 18.01 17.27C18.19 17.45 18.3 17.71 18.3 17.97C18.3 18.1 18.27 18.23 18.22 18.36C18.17 18.48 18.1 18.59 18.01 18.68C17.96 18.73 17.91 18.77 17.85 18.8C17.8001 18.84 17.74 18.87 17.68 18.9C17.62 18.92 17.56 18.94 17.5 18.95C17.43 18.97 17.37 18.97 17.3 18.97Z"
              fill="#0095FF"
            ></path>
          </g>
        </svg>
      ),
      description: 'To create an account, click on the "Sign Up" button and fill out the required information. Once done, you can enjoy the benefits of being a registered member.'
    },
    {
      title: 'Apps Permissions',
      subTitle: '3 apps have read permissions',
      coloredText: '',
      svg: (
        <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.63996 20.59 3.08997 16.01 3.08997 11.12V6.72997C3.08997 5.90997 3.70998 4.97998 4.47998 4.66998L10.05 2.39001C11.3 1.88001 12.71 1.88001 13.96 2.39001L19.53 4.66998C20.29 4.97998 20.92 5.90997 20.92 6.72997L20.91 11.12Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path d="M12 12.5V15.5" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
          </g>
        </svg>
      ),
      description: 'Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.'
    },
    {
      title: 'Pending task',
      subTitle: '',
      coloredText: 'Complete your profile',
      svg: (
        <svg width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M12 16.99V17M12 7V14M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#EEA023"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
        </svg>
      ),
      description: 'Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.'
    },
    {
      title: 'Card expired',
      subTitle: '',
      coloredText: 'Please, update now',
      svg: (
        <svg width={30} fill="#CA1353" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve">
          <g strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M0,23.6v464.8h512V23.6H0z M31.347,54.947h370.939v40.748H31.347V54.947z M480.653,457.054H31.347v-0.001V127.042h449.306 V457.054z M480.653,95.695h-47.02V54.947h47.02V95.695z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M256,150.064L100.973,428.06h310.055L256,150.064z M256,214.426l101.654,182.288H154.345L256,214.426z"></path>
              </g>
            </g>
            <g>
              <g>
                <rect x="240.327" y="268.194" width="31.347" height="71.074"></rect>
              </g>
            </g>
            <g>
              <g>
                <rect x="240.327" y="354.67" width="31.347" height="25.67"></rect>
              </g>
            </g>
          </g>
        </svg>
      ),
      description: 'We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.'
    }
  ];
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) => {
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
  };

  return (
    <CP code={code}>
      <div className="mx-4 rounded-lg bg-[#18181B] lg:mx-8">
        {/* title part  */}
        {datas.map((data, idx) => (
          <div key={idx}>
            <div onClick={() => handleToggle(idx)} className={`${idx === data.length - 1 ? 'border-none' : 'border-b border-gray-400/10'} flex items-center  gap-4 px-6 py-4`}>
              <div>{data?.svg}</div>
              <div className="flex-1">
                <p className="text-lg font-medium text-white">{data?.title}</p>
                <p className="text-gray-400">
                  {data?.subTitle} {/*give color based on condition */}
                  <span className={`${idx === 0 ? 'text-[#0095FF]' : idx === 1 ? 'text-white' : idx === 2 ? 'text-amber-500' : idx === 3 ? 'text-[#f54885]' : 'text-gray-500'}`}>
                    {data.coloredText}
                  </span>
                </p>
              </div>
              <div className={`duration-300 ease-in-out ${isOpen === idx ? '-rotate-90 ' : ''}`}>
                <svg width={25} className="rotate-180" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M10 7L15 12L10 17" stroke="#a8a8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out  ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
              <div className="overflow-hidden">
                <div className={`bg-zinc-800 p-6 text-gray-400 `}>{data?.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CP>
  );
}
