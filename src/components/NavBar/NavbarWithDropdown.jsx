'use client';
import CP from '@/ui/CP';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const code = `
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

export default function NavbarWithDropdown() {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

return (
    <nav className="flex items-center justify-between px-2 py-2">
        <Link href="#" className="text-2xl font-semibold dark:text-white">
            #NavigateUI
        </Link>
        <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
            <li className="hover:underline">
                <Link href="#">Home</Link>
            </li>
            <li className="relative" ref={dropDownMenuRef}>
                <button onClick={() => setDropDownState(!dropDownState)} className="relative flex items-center gap-1 py-2 hover:underline">
                    <span>Services</span>
                    <svg className={\`\${dropDownState ? '' : 'rotate-180'}\`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
                </button>
                {dropDownState && (
                    <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
                        <li className="px-3 hover:underline">
                            <Link href="#">Food</Link>
                        </li>
                        <li className="px-3 hover:underline">
                            <Link href="#">Transport</Link>
                        </li>
                        <li className="px-3 hover:underline">
                            <Link href="#">Management</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className="hover:underline">
                <Link href="#">About</Link>
            </li>
            <li className="hover:underline">
                <Link href="#">Contact</Link>
            </li>
        </ul>
    </nav>
  );
};
`;
export default function NavbarWithDropdown() {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };
        document.addEventListener('mousedown', closeDropDown);
        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);

    return (
        <CP code={code}>
            <nav className="flex items-center justify-between px-2 py-2">
                <Link href="#" className="text-2xl font-semibold dark:text-white">
                    #NavigateUI
                </Link>
                <ul className="flex items-center justify-between gap-4 text-slate-900 dark:text-gray-100 lg:gap-6">
                    <li className="hover:underline">
                        <Link href="#">Home</Link>
                    </li>
                    <li className="relative" ref={dropDownMenuRef}>
                        <button onClick={() => setDropDownState(!dropDownState)} className="relative flex items-center gap-1 py-2 hover:underline">
                            <span>Services</span>

                            <svg
                                className={`${dropDownState ? '' : 'rotate-180'}`}
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
                        </button>
                        {dropDownState && (
                            <ul className="absolute top-10 z-10 space-y-2 rounded-lg bg-gray-700 p-2 text-gray-100">
                                <li className="px-3 hover:underline">
                                    <Link href="#">Food</Link>
                                </li>
                                <li className="px-3 hover:underline">
                                    <Link href="#">Transport</Link>
                                </li>
                                <li className="px-3 hover:underline">
                                    <Link href="#">Management</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="hover:underline">
                        <Link href="#">About</Link>
                    </li>
                    <li className="hover:underline">
                        <Link href="#">Contact</Link>
                    </li>
                </ul>
            </nav>
        </CP>
    );
}
