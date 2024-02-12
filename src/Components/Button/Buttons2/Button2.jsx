import CodeBox from '@/Shared/CodeBox/CodeBox';

const Button2 = () => {
    return (
        <div className="flex flex-col items-start justify-center gap-5">
            <CodeBox
                codeStr={`
<button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Button</button>
<button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>
<button className="bg-sky-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden group"><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['N'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">X</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">P</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['F'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">L</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['Y'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">O</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">R</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span></button>

`}
            >
                <div className="flex flex-wrap items-center justify-evenly gap-4">
                    {/* button 16,17,18*/}
                    <button className="relative mb-4 mt-6 inline-block h-16 w-40 bg-white px-6 py-2 text-sky-700 shadow-lg before:absolute before:-left-1 before:-top-1 before:-z-40 before:block before:h-0  before:w-0 before:bg-sky-700 before:duration-500 after:absolute after:-bottom-1 after:-right-1 after:-z-40 after:block after:h-0 after:w-0 after:bg-sky-700 after:duration-500 before:hover:h-[100%] before:hover:w-[100%] after:hover:h-[100%] after:hover:w-[100%]">
                        Button
                    </button>
                    <button className="group relative h-16 w-40 overflow-hidden bg-sky-700 px-6 py-2 text-white before:absolute before:inset-0 before:flex before:translate-y-full before:items-center before:justify-center before:bg-sky-900 before:duration-300 before:content-['Bye'] after:absolute after:inset-0 after:flex after:translate-y-0 after:items-center after:justify-center after:duration-300 after:content-['Hi!'] hover:before:translate-y-0 hover:after:-translate-y-full"></button>
                    <button className="group flex items-center justify-center overflow-hidden bg-sky-600 text-lg font-bold text-white">
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['N'] group-hover:translate-y-full">
                            E
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['A'] group-hover:-translate-y-full">
                            X
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['V'] group-hover:translate-y-full">
                            P
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['I'] group-hover:-translate-y-full">
                            L
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['G'] group-hover:translate-y-full">
                            O
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['A'] group-hover:-translate-y-full">
                            R
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['T'] group-hover:translate-y-full">
                            E
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['E'] group-hover:-translate-y-full">
                            -
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['U'] group-hover:translate-y-full">
                            U
                        </span>
                        <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['I'] group-hover:-translate-y-full">
                            I
                        </span>
                    </button>
                </div>
            </CodeBox>
            <CodeBox
                codeStr={`
<button className="py-2 w-40 h-16 px-6 mb-4 mt-6 bg-sky-700 hover:bg-sky-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg><span className="duration-500">Explore</span></button>
<button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Explore</button>
<button><label htmlFor="check2" className="flex flex-col gap-[5px] cursor-pointer relative w-10 h-10 group">
    <input type="checkbox" id="check2" className="peer/check2 hidden"/><span className="w-full h-1 rounded-lg inline-block group-hover:bg-sky-400 bg-sky-700 peer-checked/check2:rotate-[30deg] peer-checked/check2:-translate-y-[9px] peer-checked/check2:translate-x-[3px] duration-300 absolute inset-0 top-[40px]"></span><span className="w-full h-1 rounded-lg inline-block group-hover:bg-sky-400 bg-sky-700 peer-checked/check2:scale-0 rotate-90 peer-checked/check2:translate-y-2 duration-300 absolute inset-0 -left-1/2 top-[20px]"></span><span className="w-full h-1 rounded-lg inline-block group-hover:bg-sky-400 bg-sky-700 peer-checked/check2:-rotate-[30deg] peer-checked/check2:translate-y-[9px] peer-checked/check2:translate-x-[3px] duration-300 absolute inset-0"></span><span className="w-full h-1 rounded-lg inline-block group-hover:bg-sky-400 bg-sky-700 rotate-90 duration-300 absolute inset-0 left-1/2 top-[20px]"></span>
</label></button>
`}
            >
                <div className="flex flex-wrap items-center justify-evenly gap-4">
                    {/* button 19,20,21 */}
                    <button className="group relative mb-4 mt-6 flex h-16 w-40 items-center justify-center overflow-hidden bg-sky-700 px-6 py-2 text-white duration-300 hover:overflow-visible hover:bg-sky-600">
                        <svg
                            viewBox="0 0 1024 1024"
                            className="icon absolute w-12 -translate-x-full translate-y-full rotate-45 scale-0 duration-150 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:scale-100 group-hover:duration-700"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#000000"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path>
                                <path
                                    d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                                    fill="#154B8B"
                                ></path>
                                <path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path>
                                <path
                                    d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                                    fill="#154B8B"
                                ></path>
                                <path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path>
                                <path
                                    d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                                    fill="#154B8B"
                                ></path>
                                <path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path>
                                <path
                                    d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                                    fill="#154B8B"
                                ></path>
                            </g>
                        </svg>
                        <span className="duration-500">Explore</span>
                    </button>
                    <button className="group relative h-16 w-36 rounded-full border-2 border-sky-300 font-black text-sky-800 duration-300 hover:text-white">
                        <span className="absolute inset-2 -z-10 flex w-12 rounded-full bg-sky-300 duration-300 group-hover:w-[88%] group-hover:justify-start group-hover:bg-sky-500 group-hover:duration-500"></span>
                        Explore
                    </button>
                    <button>
                        <label htmlFor="check2" className="group relative flex h-10 w-10 cursor-pointer flex-col gap-[5px]">
                            <input type="checkbox" id="check2" className="peer/check2 hidden" />
                            <span className="absolute inset-0 top-[40px] inline-block h-1 w-full rounded-lg bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/check2:-translate-y-[9px] peer-checked/check2:translate-x-[3px] peer-checked/check2:rotate-[30deg]"></span>
                            <span className="absolute inset-0 -left-1/2 top-[20px] inline-block h-1 w-full rotate-90 rounded-lg bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/check2:translate-y-2 peer-checked/check2:scale-0"></span>
                            <span className="absolute inset-0 inline-block h-1 w-full rounded-lg bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/check2:translate-x-[3px] peer-checked/check2:translate-y-[9px] peer-checked/check2:-rotate-[30deg]"></span>
                            <span className="absolute inset-0 left-1/2 top-[20px] inline-block h-1 w-full rotate-90 rounded-lg bg-sky-700 duration-300 group-hover:bg-sky-400"></span>
                        </label>
                    </button>
                </div>
            </CodeBox>
            <CodeBox
                codeStr={`
<button className="flex items-center relative w-36 border-2 border-sky-500 text-sky-500 p-4 rounded-lg group"><span>Get Start</span><span className="absolute w-1/6 right-3 group-hover:w-5/6 box-content duration-300 flex justify-center bg-white rounded-lg"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

`}
            >
                <div className="flex flex-wrap items-center justify-evenly gap-4">
                    {/* button 22,23,24 */}
                    <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-500 p-4  text-sky-500">
                        <span>Get Start</span>
                        <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-lg bg-white  duration-300 group-hover:w-5/6">
                            <svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </span>
                    </button>
                    {/* <button
                        type="button"
                        className="flex items-center justify-center gap-3 rounded-none bg-transparent  from-[#58bfff] to-[#01bea5] p-2  text-black outline  outline-2  delay-75  ease-linear hover:scale-105    hover:bg-gradient-to-tr hover:text-white  hover:outline-none lg:p-3"
                    >
                        Explore
                    </button> */}
                </div>
            </CodeBox>
        </div>
    );
};

export default Button2;
