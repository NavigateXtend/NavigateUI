'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MenuItem from './MenuItem';

const navComponentsItems = [
  'Accordion',
  'Avatar',
  'Badge',
  'Button',
  'Card',
  'Carousel',
  'Footer',
  'Form',
  'Hero',
  'Input',
  'Modal',
  'NavBar',
  'Progress',
  'Select',
  'Skeleton',
  'Speed Dial',
  'Spinner',
  'Table',
  'Tooltip'
];

export default function Sidebar() {
  const [isDocOpen, setDocIsOpen] = useState(true);
  const [isComponentOpen, setComponentIsOpen] = useState(true);
  const path = usePathname();
  let pathname = path.replace('/components/', '');
  return (
    <div className="sidebar backdrop-blur[1px] fixed z-[90] w-fit select-none overflow-y-scroll pb-7 xl:px-5">
      <div className="group flex h-full w-full flex-col space-y-6">
        {/* container   */}
        <div className="flex flex-col pt-2 text-gray-600 duration-300">
          {/* Docs  */}
          <div onClick={() => setDocIsOpen(!isDocOpen)} className="flex cursor-pointer items-center justify-between rounded-lg py-2 text-white duration-300">
            <div className="flex items-center gap-4">
              <span className="font-medium">Documentation</span>
            </div>
            <svg className={`${isDocOpen ? 'duration-300' : '-rotate-180 duration-300 '} stroke-white opacity-70`} width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M7 14.5L12 9.5L14.5 12L17 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7 14.5L12 9.5L14.5 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
          {/* doc div  */}
          <div className={`grid text-slate-600 transition-all duration-300 ease-in-out ${isDocOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="flex flex-col space-y-2 overflow-hidden border-sky-400">
              <MenuItem className={`${pathname === 'introduction' ? 'text-white opacity-100' : 'text-[#a1a1aa] hover:opacity-100'}`} href="/">
                Introduction
              </MenuItem>
              <MenuItem className={`${pathname === 'introduction' ? 'text-white opacity-100' : 'text-[#a1a1aa] hover:opacity-100'}`} href="/components/avatar">
                Quick Start
              </MenuItem>
            </div>
          </div>
          {/* Component  */}
          <div onClick={() => setComponentIsOpen(!isComponentOpen)} className="flex  cursor-pointer items-center justify-between rounded-lg py-2 text-white">
            <div className="flex items-center gap-4">
              <span>Components</span>
            </div>
            <svg className={`${isComponentOpen ? 'duration-300 ' : '-rotate-180 duration-300 '} stroke-white opacity-70`} width={30} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M7 14.5L12 9.5L14.5 12L17 14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7 14.5L12 9.5L14.5 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>

          {/* Component div */}
          <div className={`grid  text-slate-600 transition-all duration-300 ease-in-out ${isComponentOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="flex flex-col space-y-2 overflow-hidden border-sky-400">
              {navComponentsItems.map((componentName, i) => (
                <MenuItem
                  key={i}
                  className={`${pathname === componentName.toLowerCase().replace(/\s+/g, '') ? 'font-semibold text-sky-400 opacity-100' : 'text-[#a1a1aa] hover:opacity-100'}`}
                  href={`/components/${componentName.toLowerCase().replace(/\s+/g, '')}`}
                >
                  {componentName}
                </MenuItem>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
