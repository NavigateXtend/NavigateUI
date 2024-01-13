import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const Accordion5 = () => {
    const accordionData = [
        {
            title: 'Profile',
            subTitle: [1, 2, 3, 4],
            svg: (<svg width={20} fill="white" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fillRule="evenodd"></path></g></svg>
            )
        },
        {
            title: 'Messages',
            subTitle: [1, 2],
            svg: (<svg width={20} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g><path d="M92.574,294.24V124.336H43.277C19.449,124.336,0,144.213,0,168.467v206.44 c0,24.254,19.449,44.133,43.277,44.133h62v45.469c0,3.041,1.824,5.777,4.559,6.932c2.736,1.154,5.957,0.486,8.023-1.641 l49.844-50.76h106.494c23.828,0,43.279-19.879,43.279-44.133v-0.061H172.262C128.314,374.846,92.574,338.676,92.574,294.24z"></path>{' '}<path d="M462.717,40H172.26c-27.105,0-49.283,22.59-49.283,50.197v204.037c0,27.61,22.178,50.199,49.283,50.199 h164.668l75.348,76.033c2.399,2.442,6.004,3.172,9.135,1.852c3.133-1.322,5.176-4.434,5.176-7.887v-69.998h36.131 c27.106,0,49.283-22.59,49.283-50.199V90.197C512,62.59,489.822,40,462.717,40z M369.156,280.115H195.92v-24.316h173.236V280.115z M439.058,204.129H195.92v-24.314h243.138V204.129z M439.058,128.143H195.92v-24.315h243.138V128.143z"></path>{' '}</g></g></svg>
            )
        },
        {
            title: 'Upload',
            subTitle: [1, 2, 3],
            svg: (<svg width={20} fill="white" viewBox="0 -1.5 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"></path>{' '}</g></svg>
                )
        },
        {
            title: 'Settings',
            subTitle: [1],
            svg: (<svg width={20} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-gear-fill"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>{' '}</g></svg>
            )
        }
    ];

    // Toggle State and Function 
    const [isActive, setIsActive] = useState(null)
    const handleToggle = (idx) =>{
        setIsActive((prevIdx) => prevIdx === idx ? null : idx)
    }
    return (
        <div className={\`max-w-[400px] my-10 overflow-hidden border-x \${isActive === accordionData.length - 1 ? 'border-x border-b' : 'border-x'} border-[#03BF70] rounded-lg\`}>
            {accordionData?.map((data, idx) => (
                <div key={idx}>
                    {/* header / title  */}
                    <div onClick={() => handleToggle(idx)} className="bg-[#03BF70] p-5 flex items-center gap-6 relative cursor-pointer">
                        {data?.svg}
                        <h5 className="text-white font-medium">{data?.title}</h5>
                        <span className="w-0 h-0 border-b-[15px] border-b-[#03BF70] border-r-[15px] border-r-transparent absolute -bottom-[7px] left-10 -rotate-45"></span>
                    </div>
                    {/* body / content  */}
                    <div className={\`grid overflow-hidden transition-all duration-300 ease-in-out  \${isActive === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}\`}>
                        <div className="overflow-hidden">
                            {accordionData[idx].subTitle?.map((subData, irx) => (
                                <div key={irx} className="w-full text-gray-400 py-4 pl-16 pr-4 transition-all duration-500 hover:text-black hover:bg-green-100 border-l-4 border-white hover:border-[#03BF70]">
                                    hello {irx+1}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion5;`;

const accordionData = [
    {
        title: 'Profile',
        subTitle: [1, 2, 3, 4],
        svg: (
            <svg width={20} fill="white" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z"
                        fillRule="evenodd"
                    ></path>
                </g>
            </svg>
        )
    },
    {
        title: 'Messages',
        subTitle: [1, 2],
        svg: (
            <svg width={20} version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="white">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {' '}
                    <g>
                        {' '}
                        <path d="M92.574,294.24V124.336H43.277C19.449,124.336,0,144.213,0,168.467v206.44 c0,24.254,19.449,44.133,43.277,44.133h62v45.469c0,3.041,1.824,5.777,4.559,6.932c2.736,1.154,5.957,0.486,8.023-1.641 l49.844-50.76h106.494c23.828,0,43.279-19.879,43.279-44.133v-0.061H172.262C128.314,374.846,92.574,338.676,92.574,294.24z"></path>{' '}
                        <path d="M462.717,40H172.26c-27.105,0-49.283,22.59-49.283,50.197v204.037c0,27.61,22.178,50.199,49.283,50.199 h164.668l75.348,76.033c2.399,2.442,6.004,3.172,9.135,1.852c3.133-1.322,5.176-4.434,5.176-7.887v-69.998h36.131 c27.106,0,49.283-22.59,49.283-50.199V90.197C512,62.59,489.822,40,462.717,40z M369.156,280.115H195.92v-24.316h173.236V280.115z M439.058,204.129H195.92v-24.314h243.138V204.129z M439.058,128.143H195.92v-24.315h243.138V128.143z"></path>{' '}
                    </g>{' '}
                </g>
            </svg>
        )
    },
    {
        title: 'Upload',
        subTitle: [1, 2, 3],
        svg: (
            <svg width={20} fill="white" viewBox="0 -1.5 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="M29.426 15.535c0 0 0.649-8.743-7.361-9.74-6.865-0.701-8.955 5.679-8.955 5.679s-2.067-1.988-4.872-0.364c-2.511 1.55-2.067 4.388-2.067 4.388s-5.576 1.084-5.576 6.768c0.124 5.677 6.054 5.734 6.054 5.734h9.351v-6h-3l5-5 5 5h-3v6h8.467c0 0 5.52 0.006 6.295-5.395 0.369-5.906-5.336-7.070-5.336-7.070z"></path>{' '}
                </g>
            </svg>
        )
    },
    {
        title: 'Settings',
        subTitle: [1],
        svg: (
            <svg width={20} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-gear-fill">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>{' '}
                </g>
            </svg>
        )
    }
];
const Accordion5 = () => {
    // Toggle State and Function
    const [isActive, setIsActive] = useState(null);
    const handleToggle = (idx) => {
        setIsActive((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <CodeBox codeStr={codeStr}>
            <div className={`max-w-[400px] mx-auto overflow-hidden border-x ${isActive === accordionData.length - 1 ? 'border-x border-b' : 'border-x'} border-[#03BF70] rounded-lg`}>
                {accordionData?.map((data, idx) => (
                    <div key={idx}>
                        {/* header / title  */}
                        <div onClick={() => handleToggle(idx)} className="bg-[#03BF70] p-5 flex items-center gap-6 relative cursor-pointer">
                            {data?.svg}
                            <h5 className="text-white font-medium">{data?.title}</h5>
                            <span className="w-0 h-0 border-b-[15px] border-b-[#03BF70] border-r-[15px] border-r-transparent absolute -bottom-[7px] left-10 -rotate-45"></span>
                        </div>
                        {/* body / content  */}
                        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${isActive === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden">
                                {accordionData[idx].subTitle?.map((subData, irx) => (
                                    <div
                                        key={irx}
                                        className="w-full text-gray-400 py-4 pl-16 pr-4 transition-all duration-500 hover:text-black hover:bg-green-100 border-l-4 border-white hover:border-[#03BF70]"
                                    >
                                        hello {irx + 1}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CodeBox>
    );
};

export default Accordion5;
