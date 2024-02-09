'use client';
import { useState } from 'react';
import CodeBox from '@/Shared/CodeBox/CodeBox';

const codeStr = `import { useState } from 'react';

export const Modal = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-[#16BAC5] text-white p-2 rounded-lg">Modal</button>
                <div onClick={() => setOpenModal(false)} className={\`fixed flex justify-center items-center z-[100] \${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100\`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={\`absolute w-80 p-6 text-center bg-white drop-shadow-2xl rounded-lg \${openModal ? 'translate-y-0 opacity-1 duration-300' : 'translate-y-20 opacity-0 duration-150'}\`}>
                        <div className="space-y-3 flex flex-col justify-center items-center">
                            <svg className={\`\${openModal ? 'scale-100 rotate-0 duration-200' : 'scale-0 rotate-90'} delay-100\`} width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#16BAC5" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                            <h6 className="font-medium text-center text-slate-700">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</h6>
                            <button onClick={() => setOpenModal(false)} className="text-white bg-[#16BAC5] px-6 py-2 rounded-full">Explore now</button>
                            <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Not Now</button>
                        </div>
                    </div>
                </div>
            </div>
    )}`;

const Modal3 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <CodeBox codeStr={codeStr}>
            <div className="mx-auto flex w-72 items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="rounded-lg bg-[#16BAC5] p-2 text-white">
                    Modal
                </button>
                <div
                    onClick={() => setOpenModal(false)}
                    className={`fixed z-[100] flex items-center justify-center ${openModal ? 'opacity-1 visible' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100`}
                >
                    <div
                        onClick={(e_) => e_.stopPropagation()}
                        className={`absolute w-80 rounded-lg bg-white p-6 text-center drop-shadow-2xl ${openModal ? 'opacity-1 translate-y-0 duration-300' : 'translate-y-20 opacity-0 duration-150'}`}
                    >
                        <div className="flex flex-col items-center justify-center space-y-3">
                            <svg
                                className={`${openModal ? 'rotate-0 scale-100 duration-200' : 'rotate-90 scale-0'} delay-100`}
                                width={75}
                                viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        fill="#16BAC5"
                                        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                                    ></path>
                                </g>
                            </svg>
                            <h6 className="text-center font-medium text-slate-700">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</h6>
                            <button onClick={() => setOpenModal(false)} className="rounded-full bg-[#16BAC5] px-6 py-2 text-white">
                                Explore now
                            </button>
                            <button onClick={() => setOpenModal(false)} className="rounded-full border border-[#c51636] px-6 py-2 text-[#c51636] hover:bg-[#c51636] hover:text-white">
                                Not Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Modal3;
