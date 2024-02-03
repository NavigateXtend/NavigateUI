import React, { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Accordion3 = () => {

    // add your array of object data 
    const array=[1,2,3,4]

    // toggle state and function 
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    
    return (
        <div className="flex justify-center">
            <div className="max-w-[550px] cursor-pointer space-y-6 rounded-lg py-20">
                {/* maping each accordion  */}
                {array.map((arr, idx) => (
                    <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                        {/* the index div  */}
                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#355E72] font-sans text-2xl font-semibold text-white"><span>0{idx + 1}</span></div>
                        <div className="relative h-[2px] w-10 bg-[#355E72]">
                            <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#355E72] bg-white"></span>
                            <span className="h-1 w-10 bg-[#355E72]"></span>
                        </div>
                        {/* main accordion div  */}
                        <div>
                            <div className="relative max-w-[450px] border-t-[12px] border-[#355E72] bg-sky-50 p-3 shadow-md">
                                <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#355E72]"></span>
                                <h1 className="text-center text-xl text-[#355E72]">This is my title</h1>
                            </div>
                            <div className={\`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out \${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>
                                <div className="overflow-hidden">
                                    <div className="max-w-[450px] rounded-bl-xl rounded-br-xl bg-[#355E72] p-6 text-center text-sm text-white"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nam ipsam sint illo odio sed voluptates suscipit, rerum esse ratione non alias obcaecati error harum nesciunt. Vitae optio commodi illum!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion3;`;

const Accordion3 = () => {
    // add your array of object data
    const array = [1, 2, 3, 4];

    // toggle state and function
    const [isOpen, setIsOpen] = useState(null);
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex justify-center">
                <div className=" max-w-[550px] cursor-pointer space-y-6 rounded-lg py-20">
                    {/* maping each accordion  */}
                    {array.map((arr, idx) => (
                        <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                            {/* the index div  */}
                            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#355E72] font-sans text-2xl font-semibold text-white">
                                <span>0{idx + 1}</span>
                            </div>

                            <div className="relative h-[2px] w-10 bg-[#355E72]">
                                <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-[#355E72] bg-white"></span>
                                <span className="h-1 w-10 bg-[#355E72]"></span>
                            </div>
                            {/* main accordion div  */}
                            <div>
                                <div className="relative max-w-[450px] border-t-[12px] border-[#355E72] bg-sky-50 p-3 shadow-md">
                                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-[#355E72]"></span>
                                    <h1 className="text-center text-xl text-[#355E72]">This is my title</h1>
                                </div>
                                <div
                                    className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out  ${
                                        isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className=" max-w-[450px] rounded-bl-xl rounded-br-xl bg-[#355E72] p-6 text-center text-sm text-white">
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nam ipsam sint illo odio sed voluptates suscipit, rerum esse ratione non alias obcaecati
                                            error harum nesciunt. Vitae optio commodi illum!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CodeBox>
    );
};

export default Accordion3;
