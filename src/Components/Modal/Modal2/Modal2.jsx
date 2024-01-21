import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useState } from 'react';

export const Modal2 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-[#0095FF] text-white p-2 rounded-lg">Modal</button>
                <div className={\`fixed flex justify-center items-center z-[100] \${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100\`}>
                    <div className={\`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg \${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}\`}>
                        <svg onClick={() => setOpenModal(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#c51636"></path></g></svg>
                        <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-3">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full">Ok</button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Cancel</button>
                    </div>
                </div>
            </div>
    )}`;

const Modal2 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <CodeBox codeStr={codeStr}>
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-[#0095FF] text-white p-2 rounded-lg">
                    Modal
                </button>
                <div className={`fixed flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}>
                    <div className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}>
                        <svg onClick={() => setOpenModal(false)} className="w-8 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                                    fill="#c51636"
                                ></path>
                            </g>
                        </svg>
                        <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-3">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full">
                            Ok
                        </button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Modal2;
