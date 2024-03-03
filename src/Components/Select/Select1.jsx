'use client';
import CP from '@/ui/CP';
import { useState } from 'react';

const code = `import { useState } from 'react';
const Select  = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Choose One")
    // array of options 
    const options = ['Apple', 'banana', 'chips'];

    return (
      <div>
        {/* dropdown - btn */}
        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl bg-white px-6 py-2 border">
            <h1 className="font-medium text-gray-600">{selectedValue}</h1>
            <svg className={\`\${isOpen ? '-rotate-180' : 'rotate-0'} duration-300\`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}</g></svg>
        </div>
        {/* dropdown - options  */}
        <div className={\`\${isOpen ? 'visible top-0 opacity-100' : 'invisible -top-4 opacity-0'} relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300\`}>
            {options?.map((option, idx) => (
                <div key={idx} onClick={(e) => { setSelectedValue(e.target.textContent); setIsOpen(false);}} className="px-6 py-2 text-gray-500 hover:bg-gray-100">
                    {option}
                </div>
            ))}
        </div>
      </div>
    );
}
export default Select
`;

const Select1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Choose One');
  // array of options
  const options = ['Apple', 'banana', 'chips'];

  return (
    <CP code={code}>
      {/* dropdown - btn */}
      <div>
        <div onClick={() => setIsOpen(!isOpen)} className="mx-auto flex w-72 items-center justify-between rounded-xl border bg-white px-6 py-2 ">
          <h1 className="font-medium text-gray-600">{selectedValue}</h1>
          <svg className={` ${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`} width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M7 10L12 15L17 10" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
            </g>
          </svg>
        </div>
        {/* dropdown - options  */}
        <div className={`${isOpen ? 'visible top-0 opacity-100' : 'invisible -top-4 opacity-0'} relative  mx-auto my-4  w-72 rounded-xl border bg-white py-4 duration-300`}>
          {options?.map((option, idx) => (
            <div
              key={idx}
              onClick={(e) => {
                setSelectedValue(e.target.textContent);
                setIsOpen(false);
              }}
              className="px-6 py-2 text-gray-500 hover:bg-gray-100"
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </CP>
  );
};
export default Select1;
