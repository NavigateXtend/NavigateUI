'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const NavBar6 = () => {
    const codeStr = `
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

export const NavBarBasicResponsive = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);
    }, []);

    return (
        <nav className="flex items-center justify-between gap-20 px-10 py-8 md:justify-start">
            <img src="/Logo.svg" alt="navigateui logo" />
            <ul className="hidden items-center justify-between gap-10 md:flex">
                <li className="cursor-pointer hover:text-sky-500">Home</li>
                <li className="cursor-pointer hover:text-sky-500">Services</li>
                <li className="cursor-pointer hover:text-sky-500">About</li>
                <li className="cursor-pointer hover:text-sky-500">Contact</li>
            </ul>
            <div>
                <button ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
                {dropDownState && (
                    <ul className="absolute right-10 z-10 flex flex-col gap-2 bg-white py-5">
                        <li className="cursor-pointer hover:text-sky-500">Home</li>
                        <li className="cursor-pointer hover:text-sky-500">Services</li>
                        <li className="cursor-pointer hover:text-sky-500">About</li>
                        <li className="cursor-pointer hover:text-sky-500">Contact</li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

   `;

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);
    }, []);

    return (
        <CodeBox codeStr={codeStr}>
            <nav className="flex items-center justify-between gap-20 bg-sky-100 px-10 py-8 md:justify-start">
                <Image src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">Services</li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
                <div>
                    <button ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                    </button>
                    {dropDownState && (
                        <ul className="absolute right-10 z-10 flex flex-col gap-2 bg-white py-5">
                            <li className="cursor-pointer hover:text-sky-500">Home</li>
                            <li className="cursor-pointer hover:text-sky-500">Services</li>
                            <li className="cursor-pointer hover:text-sky-500">About</li>
                            <li className="cursor-pointer hover:text-sky-500">Contact</li>
                        </ul>
                    )}
                </div>
            </nav>
        </CodeBox>
    );
};
