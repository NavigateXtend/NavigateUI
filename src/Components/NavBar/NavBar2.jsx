'use client';
import CP from '@/ui/CP';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const NavBar2 = () => {
  const code = `
    import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const NavBar2 = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);
    }, []);

    return (
        <nav className="flex items-center justify-between mb-32 bg-[#393E46] px-4 py-2 ">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
            <h2>Logo</h2>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Home</li>
            <li className="relative">
                <button
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex cursor-pointer  items-center gap-3 rounded-full px-6 py-2 text-white hover:bg-sky-600"
                >
                    <span>Services</span>
                    {dropDownState ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" > <path d="m18 15-6-6-6 6" /> </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m6 9 6 6 6-6" /> </svg>
                    )}
                </button>
                {dropDownState && (
                    <ul className="absolute top-12 z-10 flex flex-col gap-2 rounded-lg bg-[#393E46] ">
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Food</li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Transport</li>
                        <li className="cursor-pointer  rounded-b-lg px-6 py-2 text-white hover:bg-sky-600">Management</li>
                    </ul>
                )}
            </li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">About</li>
            <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Contact</li>
        </ul>
    </nav>
    );
};

   `;

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener('mousedown', closeDropDown);
  }, []);

  return (
    <CP code={code}>
      <nav className="mb-32 flex items-center justify-between bg-[#393E46] px-4 py-2 ">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
          <h2>Logo</h2>
        </div>
        <ul className="flex items-center justify-between gap-6 text-slate-900">
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Home</li>
          <li className="relative">
            <button
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className="relative flex cursor-pointer  items-center gap-3 rounded-full px-6 py-2 text-white hover:bg-sky-600"
            >
              <span>Services</span>
              {dropDownState ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </button>
            {dropDownState && (
              <ul className="absolute top-12 z-10 flex flex-col gap-2 rounded-lg bg-[#393E46] ">
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Food</li>
                <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Transport</li>
                <li className="cursor-pointer  rounded-b-lg px-6 py-2 text-white hover:bg-sky-600">Management</li>
              </ul>
            )}
          </li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">About</li>
          <li className="cursor-pointer  rounded-full px-6 py-2 text-white hover:bg-sky-600">Contact</li>
        </ul>
      </nav>
    </CP>
  );
};
