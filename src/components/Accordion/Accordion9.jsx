'use client';
import { useState } from 'react';
import CP from '@/ui/CP';

const code = `import { useState } from 'react';

const accordionData = [{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-amber-500', colorBorder: 'border-amber-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing? This is my new', colorBg: 'bg-orange-500', colorBorder: 'border-orange-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-500', colorBorder: 'border-red-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-sky-500', colorBorder: 'border-sky-500'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-purple-500', colorBorder: 'border-purple-500'}];
    const Accordion9 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
             <div className="w-fit mx-auto min-h-[300px] flex gap-1">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button onClick={() => handleToggle(idx)} className={\`h-full flex justify-around flex-col items-center w-14 \${_.colorBg} text-white rounded-lg relative\`}>
                            {isActive === idx && <span className={\`w-0 h-0 \${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-10 top-4\`}></span>}
                            <p>{idx + 1}</p>
                            <p className="rotate-[270deg]">Example</p>
                        </button>
                        {/* container */}
                        <div
                            className={\`grid place-content-center bg-gray-200 shadow-md rounded-lg \${
                                isActive === idx ? 'w-56 px-5 opacity-1 scale-1' : 'w-0 opacity-0 scale-0'
                            } text-black ml-2 duration-300 ease-in-out\`}
                        >
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Accordion9;
`;

const accordionData = [
  {
    title: 'heading 1',
    subtitle: 'Hi!~ How are you doing?',
    colorBg: 'bg-amber-500',
    colorBorder: 'border-amber-500'
  },
  {
    title: 'heading 2',
    subtitle: 'Hi!~ How are you doing?',
    colorBg: 'bg-orange-500',
    colorBorder: 'border-orange-500'
  },
  {
    title: 'heading 3',
    subtitle: 'Hi!~ How are you doing?',
    colorBg: 'bg-red-500',
    colorBorder: 'border-red-500'
  },
  {
    title: 'heading 4',
    subtitle: 'Hi!~ How are you doing?',
    colorBg: 'bg-sky-500',
    colorBorder: 'border-sky-500'
  },
  {
    title: 'heading 5',
    subtitle: 'Hi!~ How are you doing?',
    colorBg: 'bg-purple-500',
    colorBorder: 'border-purple-500'
  }
];
export default function Accordion9() {
  // Toggle State and Function
  const [isActive, setIsActive] = useState(0);
  const handleToggle = (idx) => {
    setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
  };
  return (
    <CP code={code}>
      <div className="mx-auto flex min-h-[300px] w-fit gap-1">
        {accordionData.map((_, idx) => (
          <div key={idx} className="flex">
            {/* toggle item */}
            <button onClick={() => handleToggle(idx)} className={`flex h-full w-14 flex-col items-center justify-around ${_.colorBg} relative rounded-lg text-white`}>
              {isActive === idx && <span className={`h-0 w-0 ${_.colorBorder} absolute left-10 top-4 rotate-[225deg] border-b-[20px] border-r-[20px] border-r-transparent`}></span>}
              <p>{idx + 1}</p>
              <p className="rotate-[270deg]">Example</p>
            </button>
            {/* container */}
            <div
              className={`grid place-content-center rounded-lg bg-gray-200 shadow-md ${
                isActive === idx ? 'opacity-1 scale-1 w-56 px-5' : 'w-0 scale-0 opacity-0'
              } ml-2 text-black duration-300 ease-in-out`}
            >
              <h2 className="font-black lg:text-2xl">{_.title}</h2>
              <p className="text-black/60">{_.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </CP>
  );
}
