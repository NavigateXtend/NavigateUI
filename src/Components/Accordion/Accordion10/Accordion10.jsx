import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useState } from 'react';

const accordionData = [{title: 'heading 1', subtitle: 'Hi!~ How are you doing?'},{title: 'heading 2', subtitle: 'Hi!~ How are you doing?'},{title: 'heading 3', subtitle: 'Hi!~ How are you doing?'},{title: 'heading 4', subtitle: 'Hi!~ How are you doing?'},{title: 'heading 5', subtitle: 'Hi!~ How are you doing?'}];
const Accordion10 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
            <div className="w-full min-h-[200px] md:min-h-[300px] flex bg-sky-400 mx-auto">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button
                            onClick={() => handleToggle(idx)}
                            className={\`h-full flex justify-center items-center w-6 lg:w-14 bg-sky-500 \${isActive === idx && 'bg-lime-600'} text-white shadow-[2px_2px_5px_#00000083] z-20 relative\`}>
                            <p>{idx + 1}</p>
                        </button>
                        {/* container */}
                        <div className={\`\${isActive === idx ? 'md:w-56 px-2 md:px-5 opacity-1' : 'w-0 opacity-0'} grid place-content-center bg-white shadow-md z-10 text-black duration-300 ease-in-out\`}>
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default Accordion10;
`;

const accordionData = [
    {
        title: 'heading 1',
        subtitle: 'Hi!~ How are you doing?'
    },
    {
        title: 'heading 2',
        subtitle: 'Hi!~ How are you doing?'
    },
    {
        title: 'heading 3',
        subtitle: 'Hi!~ How are you doing?'
    },
    {
        title: 'heading 4',
        subtitle: 'Hi!~ How are you doing?'
    },
    {
        title: 'heading 5',
        subtitle: 'Hi!~ How are you doing?'
    }
];
const Accordion10 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(0);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CodeBox codeStr={codeStr}>
            <div className="w-full min-h-[200px] md:min-h-[300px] flex bg-sky-400 mx-auto">
                {accordionData.map((_, idx) => (
                    <div key={idx} className="flex">
                        {/* toggle item */}
                        <button
                            onClick={() => handleToggle(idx)}
                            className={`h-full flex justify-center items-center w-6 lg:w-14 bg-sky-500 ${isActive === idx && 'bg-lime-600'} text-white shadow-[2px_2px_5px_#00000083] z-20 relative`}
                        >
                            <p>{idx + 1}</p>
                        </button>
                        {/* container */}
                        <div
                            className={`${isActive === idx ? 'md:w-56 px-2 md:px-5 opacity-1' : 'w-0 opacity-0'} grid place-content-center bg-white shadow-md z-10 text-black duration-300 ease-in-out`}
                        >
                            <h2 className="lg:text-2xl font-black">{_.title}</h2>
                            <p className="text-black/60">{_.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion10;
