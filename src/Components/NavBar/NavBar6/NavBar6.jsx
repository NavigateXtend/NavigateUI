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

export const NavBar6 = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
            <nav className="flex items-center justify-between gap-20 bg-sky-100 px-10 py-8 md:justify-start">
                <img src="/Logo.svg" alt="navigateui logo" />
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">Services</li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
                <div>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex md:hidden transition-transform">
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
                            className="cursor-pointer"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        {dropDownState && (
                            <ul className="absolute right-full z-10 mt-8 flex flex-col gap-2 bg-white px-5 py-2 shadow-sm">
                                <li className="cursor-pointer hover:text-sky-500">Home</li>
                                <li className="cursor-pointer hover:text-sky-500">Services</li>
                                <li className="cursor-pointer hover:text-sky-500">About</li>
                                <li className="cursor-pointer hover:text-sky-500">Contact</li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
    );
};

   `;

    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <CodeBox codeStr={codeStr}>
            <nav className="mb-24 flex items-center justify-between gap-20 bg-sky-100 px-10 py-8 md:justify-start">
                <Image src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="cursor-pointer hover:text-sky-500">Services</li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
                <div>
                    <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
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
                            className="cursor-pointer"
                        >
                            <line x1="4" x2="20" y1="12" y2="12" />
                            <line x1="4" x2="20" y1="6" y2="6" />
                            <line x1="4" x2="20" y1="18" y2="18" />
                        </svg>
                        {dropDownState && (
                            <ul className="absolute right-full z-10 mt-8 flex flex-col gap-2 bg-white px-5 py-2 shadow-sm">
                                <li className="cursor-pointer hover:text-sky-500">Home</li>
                                <li className="cursor-pointer hover:text-sky-500">Services</li>
                                <li className="cursor-pointer hover:text-sky-500">About</li>
                                <li className="cursor-pointer hover:text-sky-500">Contact</li>
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        </CodeBox>
    );
};
