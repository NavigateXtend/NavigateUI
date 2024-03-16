import CP from '@/ui/CP';
import React from 'react';

const code = `
export default function BadgeWithNumberBelow() {
    return (
    <div className="relative mx-auto bg-white hover:bg-gray-200 p-2 rounded-md w-fit h-fit">
        <svg width="40px" fill="#0284C7" viewBox="-1.92 -1.92 27.84 27.84" id="home-alt-2" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color" stroke="#0284C7"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" /><g id="SVGRepo_iconCarrier"><path id="primary" d="M20,10V21a1,1,0,0,1-1,1H15.5a1,1,0,0,1-1-1V16.1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10a1,1,0,0,1,.29-.71l7-7a1,1,0,0,1,1.42,0l7,7A1,1,0,0,1,20,10Z" style={{fill: '#38BDF8'}} /></g></svg>
        <span className="absolute -right-2 -bottom-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">12</span>
    </div>
    );
};
`;

export default function Badge3() {
  return (
    <CP code={code}>
      <div className="relative mx-auto h-fit w-fit rounded-md bg-white p-2 hover:bg-gray-200">
        <svg width="40px" fill="#0284C7" viewBox="-1.92 -1.92 27.84 27.84" id="home-alt-2" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color" stroke="#0284C7">
          <g strokeWidth={0} />
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.048" />
          <g id="SVGRepo_iconCarrier">
            <path
              id="primary"
              d="M20,10V21a1,1,0,0,1-1,1H15.5a1,1,0,0,1-1-1V16.1a1,1,0,0,0-1-1h-3a1,1,0,0,0-1,1V21a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V10a1,1,0,0,1,.29-.71l7-7a1,1,0,0,1,1.42,0l7,7A1,1,0,0,1,20,10Z"
              style={{ fill: '#38BDF8' }}
            />
          </g>
        </svg>
        <span className="absolute -bottom-2 -right-2 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-500 text-center text-[12px] text-white ">12</span>
      </div>
    </CP>
  );
}
