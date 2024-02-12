import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

const Spinner1 = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-5">
            <CodeBox
                codeStr={`<div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
<div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
<div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
`}
            >
                <div className="flex flex-wrap items-center justify-evenly">
                    <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
                    <div className="h-10 w-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
                    <div className="h-10 w-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-l-0 border-r-0 border-double border-b-sky-400 border-t-sky-700"></div>
                </div>
            </CodeBox>
            <CodeBox
                codeStr={`<div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
<div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
<div className="relative w-10 h-10 flex items-center justify-center"><div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div><div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div></div>
`}
            >
                <div className="flex flex-wrap items-center justify-evenly">
                    <div className="h-10 w-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-sky-400 border-r-sky-900"></div>
                    <div className="h-10 w-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-sky-400 border-l-transparent border-r-transparent"></div>
                    <div className="relative flex h-10 w-10 items-center justify-center">
                        <div className="h-5 w-5 animate-[ping_2s_linear_infinite] rounded-full border border-sky-600"></div>
                        <div className="absolute h-5 w-5 animate-[ping_2s_linear_3s_infinite] rounded-full border border-sky-600"></div>
                    </div>
                </div>
            </CodeBox>
            <CodeBox
                codeStr={`<div className="w-10 h-10 flex gap-2 items-center justify-center"><div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div><div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div><div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div></div>
<div className="w-10 h-10 flex gap-1 items-center justify-center"><div className="w-2 h-2 animate-[bounce_.6s_linear_.2s_infinite] bg-sky-600 rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.3s_infinite] bg-sky-600 rounded-full"></div><div className="w-2 h-2 animate-[bounce_.6s_linear_.4s_infinite] bg-sky-600 rounded-full"></div></div>
<div className="w-10 h-10"><div className="grid grid-cols-2 justify-center items-center gap-2 rounded-full"><span className="h-5 w-5 rounded-tl-full bg-blue-500 animate-[ping_1.4s_linear_infinite]"></span> <span className="h-5 w-5 rounded-tr-full bg-blue-500 animate-[ping_1.8s_linear_infinite]"></span><span className="h-5 w-5 rounded-bl-full bg-blue-500 animate-[ping_2.2s_linear_infinite]"></span><span className="h-5 w-5 rounded-br-full bg-blue-500 animate-[ping_2.6s_linear_infinite]"></span></div></div>
`}
            >
                <div className="flex flex-wrap items-center justify-evenly">
                    <div className="flex h-10 w-10 items-center justify-center gap-2">
                        <div className="h-5 w-2 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
                        <div className="h-5 w-2 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
                        <div className="h-5 w-2 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center gap-1">
                        <div className="h-2 w-2 animate-[bounce_.6s_linear_.2s_infinite] rounded-full bg-sky-600"></div>
                        <div className="h-2 w-2 animate-[bounce_.6s_linear_.3s_infinite] rounded-full bg-sky-600"></div>
                        <div className="h-2 w-2 animate-[bounce_.6s_linear_.4s_infinite] rounded-full bg-sky-600"></div>
                    </div>
                    <div className=" h-10 w-10 ">
                        <div className="grid grid-cols-2 items-center justify-center gap-2 rounded-full">
                            <span className="h-5 w-5 animate-[ping_1.4s_linear_infinite] rounded-tl-full bg-blue-500"></span>
                            <span className="h-5 w-5 animate-[ping_1.8s_linear_infinite] rounded-tr-full bg-blue-500"></span>
                            <span className="h-5 w-5 animate-[ping_2.2s_linear_infinite] rounded-bl-full bg-blue-500"></span>
                            <span className="h-5 w-5 animate-[ping_2.6s_linear_infinite] rounded-br-full bg-blue-500"></span>
                        </div>
                    </div>
                </div>
            </CodeBox>
            <CodeBox
                codeStr={`<div className="w-20 h-20  border-l-2 border-green-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-16 h-16  border-b-2 border-indigo-500 rounded-full flex justify-center items-center animate-[spin_1.8s_linear_infinite]"><div className="w-10 h-10  border-r-2  border-sky-500 rounded-full animate-[spin_1.8s_linear_infinite]"></div></div></div>
<div className="animate-[spin_1.8s_linear_infinite]"><div className="w-14 h-14 border rounded-lg  z-30 bg-sky-500 animate-[ping_1.4s_linear_infinite]"><div className="w-[58px] h-[58px] relative -top-[1.4px] -left-[2px]   rounded-full  bg-white"></div></div></div>
<div className=" w-12 h-12"><div className="grid grid-cols-2 h-full w-full overflow-hidden shadow-lg rounded-full animate-spin"><span className="h-6 w-6 rounded-tl-full bg-transparent"></span><span className="h-6 w-6 rounded-tr-full bg-sky-500"></span><span className="h-6 w-6 rounded-bl-full bg-sky-500"></span><span className="h-6 w-6 rounded-br-full"></span></div></div>
`}
            >
                <div className="flex flex-nowrap items-center justify-evenly ">
                    <div className="flex h-20 w-20 animate-[spin_1.8s_linear_infinite] items-center justify-center rounded-full border-l-2 border-green-500">
                        <div className="flex h-16 w-16 animate-[spin_1.8s_linear_infinite] items-center justify-center rounded-full border-b-2 border-indigo-500">
                            <div className="h-10 w-10 animate-[spin_1.8s_linear_infinite]  rounded-full border-r-2 border-sky-500"></div>
                        </div>
                    </div>
                    <div className="h-12 w-12">
                        <div className="grid h-full w-full animate-spin grid-cols-2 overflow-hidden rounded-full">
                            <span className="h-6 w-6 rounded-tl-full bg-transparent"></span>
                            <span className="h-6 w-6 rounded-tr-full bg-sky-500"></span>
                            <span className="h-6 w-6 rounded-bl-full bg-sky-500"></span>
                            <span className="h-6 w-6 rounded-br-full"></span>
                        </div>
                    </div>
                </div>
            </CodeBox>
            {/* <div className="w-10 h-10 before:animate-[spin_3s_linear_infinite] before:block before:inset-0 before:absolute relative before:bg-sky-700 overflow-hidden"></div> */}
        </div>
    );
};

export default Spinner1;
