import { useState } from 'react';

const Modal1 = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="w-72 mx-auto flex items-center justify-center">
            <button onClick={() => setOpenModal(true)} className="bg-gray-700 text-white p-2 rounded-lg">
                Modal
            </button>
            <div
                onClick={() => setOpenModal(false)}
                className={`absolute flex justify-center items-center z-[100] ${openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 backdrop-blur-sm bg-black/20 duration-100`}
            >
                <div
                    onClick={(e_) => e_.stopPropagation()}
                    className={`absolute max-w-md p-4 text-center bg-white drop-shadow-2xl rounded-lg ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'} `}
                >
                    <h1 className="p-2 text-3xl font-semibold ">Welcome to NavigateUI!</h1>
                    <p>Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
                </div>
            </div>
        </div>
    );
};

export default Modal1;
