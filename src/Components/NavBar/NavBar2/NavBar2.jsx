'use client';

import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const NavBar2 = () => {
    const codeStr = `
    import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const NavBar2 = () => {
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
            <nav className="flex items-center justify-start gap-20 bg-sky-100 px-10 py-8">
                <img src="/Logo.svg" alt="navigateui logo" />
                <ul className="flex items-center justify-between gap-10">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="relative transition-transform">
                        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="flex cursor-pointer hover:text-sky-500">
                            <span>Services</span>
                            {dropDownState ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            )}
                        </div>
                        {dropDownState && (
                            <ul className="absolute z-10 mt-1 flex flex-col gap-2 bg-white px-5 py-2 shadow-sm ">
                                <li className="cursor-pointer hover:text-sky-500">Food</li>
                                <li className="cursor-pointer hover:text-sky-500">Transport</li>
                                <li className="cursor-pointer hover:text-sky-500">Housing</li>
                                <li className="cursor-pointer hover:text-sky-500">Management</li>
                            </ul>
                        )}
                    </li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
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
            <nav className="mb-24 flex items-center justify-start gap-20 bg-sky-100 px-10 py-8">
                <Image src="/Logo.svg" alt="navigateui logo" width={45} height={45} />
                <ul className="flex items-center justify-between gap-10">
                    <li className="cursor-pointer hover:text-sky-500">Home</li>
                    <li className="relative transition-transform">
                        <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="flex cursor-pointer hover:text-sky-500">
                            <span>Services</span>
                            {dropDownState ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m18 15-6-6-6 6" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            )}
                        </div>
                        {dropDownState && (
                            <ul className="absolute z-10 mt-1 flex flex-col gap-2 bg-white px-5 py-2 shadow-sm ">
                                <li className="cursor-pointer hover:text-sky-500">Food</li>
                                <li className="cursor-pointer hover:text-sky-500">Transport</li>
                                <li className="cursor-pointer hover:text-sky-500">Housing</li>
                                <li className="cursor-pointer hover:text-sky-500">Management</li>
                            </ul>
                        )}
                    </li>
                    <li className="cursor-pointer hover:text-sky-500">About</li>
                    <li className="cursor-pointer hover:text-sky-500">Contact</li>
                </ul>
            </nav>
        </CodeBox>
    );
};
