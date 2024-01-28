import { useState } from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `import { useState } from 'react';

export const Modal1 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">Modal</button>
                <div onClick={() => setOpenModal(false)} className={\`fixed flex justify-center items-center z-[100] \${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100\`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={\`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg \${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}\`}>
                        <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
                        <p className="mb-3">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                        <button onClick={() => setOpenModal(false)} className="text-white me-2 bg-[#16c55c] px-6 py-2 rounded-full">Ok</button>
                        <button onClick={() => setOpenModal(false)} className="text-[#c51636] hover:text-white hover:bg-[#c51636] px-6 py-2 border border-[#c51636] rounded-full">Cancel</button>
                    </div>
                </div>
            </div>
    )}`;

const Modal1 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <CodeBox codeStr={codeStr}>
            <div className="w-72 mx-auto flex items-center justify-center">
                <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">
                    Modal
                </button>
                <div
                    onClick={() => setOpenModal(false)}
                    className={`fixed flex justify-center items-center z-[100] ${
                        openModal ? 'visible opacity-1' : 'invisible opacity-0'
                    } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
                >
                    <div
                        onClick={(e_) => e_.stopPropagation()}
                        className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}
                    >
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

export default Modal1;
