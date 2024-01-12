import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useState } from 'react';
const accordionData = [{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-amber-400', colorBorder: 'border-amber-400'},{title: 'heading', subtitle: 'Hi!~ How are you doing? This is my new', colorBg: 'bg-orange-400',colorBorder: 'border-orange-400'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-400', colorBorder: 'border-red-400'}, {title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-red-800', colorBorder: 'border-red-800'},{title: 'heading', subtitle: 'Hi!~ How are you doing?', colorBg: 'bg-purple-950', colorBorder: 'border-purple-950'}];
    <div className="min-w-[300px]">
        <div className="w-fit min-h-[300px] mx-auto h-full flex shadow-md overflow-hidden">
            {accordionData.map((_, idx) => (
                <div key={idx} className="flex">
                    {/* toggle item */}
                    <div onClick={() => handleToggle(idx)} className={\`flex h-full w-fit items-end pb-8 border-b-8 bg-white \${_.colorBorder} border-t-4 border- shadow-[2px_2px_5px_#00000083]\`}>
                        <div className={\`p-6 text-white w-full \${_.colorBg} relative\`}>
                            <span className={\`w-0 h-0 \${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-14 -z-50\`}></span>0{idx + 1}
                        </div>
                    </div>
                    {/* text container */}
                    <div
                        className={\`flex flex-col items-center justify-center \${
                            isActive === idx ? 'scale-1 px-5 opacity-1  border-t-2 border-b-2 rotate-0 duration-300' : 'scale-0 w-0 opacity-0 rotate-90'
                        } text-black\`}
                    >
                        <h2 className="lg:text-2xl font-black">{_.title}</h2>
                        <p className="text-black/60">{_.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>`;
const accordionData = [
    {
        title: 'heading',
        subtitle: 'Hi!~ How are you doing?',
        colorBg: 'bg-amber-400',
        colorBorder: 'border-amber-400'
    },
    {
        title: 'heading',
        subtitle: 'Hi!~ How are you doing? This is my new',
        colorBg: 'bg-orange-400',
        colorBorder: 'border-orange-400'
    },
    {
        title: 'heading',
        subtitle: 'Hi!~ How are you doing?',
        colorBg: 'bg-red-400',
        colorBorder: 'border-red-400'
    },
    {
        title: 'heading',
        subtitle: 'Hi!~ How are you doing?',
        colorBg: 'bg-red-800',
        colorBorder: 'border-red-800'
    },
    {
        title: 'heading',
        subtitle: 'Hi!~ How are you doing?',
        colorBg: 'bg-purple-950',
        colorBorder: 'border-purple-950'
    }
];
const Accordion6 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CodeBox codeStr={codeStr}>
            <div className="max-w-[400px] mx-auto cursor-pointer">
                <div className="w-fit min-h-[300px] flex shadow-md overflow-hidden">
                    {accordionData.map((_, idx) => (
                        <div key={idx} className="flex">
                            {/* toggle item */}
                            <div
                                onClick={() => handleToggle(idx)}
                                className={`flex h-full w-fit items-end pb-10 bg-white border-b-8 ${_.colorBorder} border-t-2 border-t-inherit shadow-[2px_2px_5px_#00000083]`}
                            >
                                <div className={`p-6 text-white w-full ${_.colorBg} relative `}>
                                    <span className={`w-0 h-0 ${_.colorBorder} border-r-[20px] border-b-[20px] border-r-transparent absolute rotate-[225deg] left-14 -z-50`}></span>0{idx + 1}
                                </div>
                            </div>
                            {/* container */}
                            <div
                                className={`grid place-content-center ${
                                    isActive === idx ? 'grid-cols-[1fr] px-5 opacity-1 border-t-2 border-b-2' : 'grid-cols-[0fr] opacity-0 w-0'
                                } text-black duration-300 transition-all ease-in-out`}
                            >
                                <h2 className="lg:text-2xl font-black">{_.title}</h2>
                                <p className="text-black/60">{_.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </CodeBox>
    );
};

export default Accordion6;
