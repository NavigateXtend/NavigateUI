'use client';
import CP from '@/ui/CP';
import { useEffect, useState } from 'react';

const code = `import { useState } from 'react';

export default function Modal1() {
    const [openModal, setOpenModal] = useState(false);
    return (
      <div className="mx-auto w-fit">
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-sky-500 px-5 py-[6px] text-white">
          Open
        </button>
        <div
          onClick={() => setOpenModal(false)} 
          className={\`fixed z-[100] flex items-center justify-center \${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent\`}
        >
          <div onClick={(e_) => e_.stopPropagation()} className={\`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white \${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}\`}>
            <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
            <p className="mb-5 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
            <div className="flex justify-between">
              <button onClick={() => setOpenModal(false)} className="me-2 rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white">
                Ok
              </button>
              <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}`;

export default function Modal1() {
  const [openModal, setOpenModal] = useState(false);

  // Effect to handle body overflow
  // useEffect(() => {
  //   // Disable body scrollbar when the modal is open
  //   if (openModal) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     // Restore body scrollbar when the modal is closed
  //     document.body.style.overflowY = 'auto';
  //   }
  //   // Cleanup function to restore body scrollbar on component unmount
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [openModal]);
  return (
    <CP code={code}>
      <div className="mx-auto w-fit">
        <button onClick={() => setOpenModal(true)} className="rounded-md bg-sky-500 px-5 py-[6px] text-white">
          Open
        </button>
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] flex items-center justify-center ${openModal ? 'visible opacity-100' : 'invisible opacity-0'} inset-0 bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`text- absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-gray-800 dark:text-white ${openModal ? 'scale-1 opacity-1 duration-300' : 'scale-0 opacity-0 duration-150'}`}
          >
            <h1 className="mb-2 text-2xl font-semibold">Welcome to NavigateUI!</h1>
            <p className="mb-5 text-sm opacity-80">Elevate your React projects with beautifully crafted components designed for TailwindCSS.</p>
            <div className="flex justify-between">
              <button onClick={() => setOpenModal(false)} className="me-2 rounded-md bg-indigo-600 hover:bg-indigo-700 px-6 py-[6px] text-white">
                Ok
              </button>
              <button onClick={() => setOpenModal(false)} className="rounded-md border border-rose-600 px-6 py-[6px] text-rose-600 duration-150 hover:bg-rose-600 hover:text-white">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </CP>
  );
}
