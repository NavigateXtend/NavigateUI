'use client';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import MenuItem from './MenuItem';

const navComponentsItems = [
  'Accordion',
  'Avatar',
  'Badge',
  'Button',
  'Card',
  'Carousel',
  'Dropdown',
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
  'Pagination',
  'Switch',
  'Table',
  'Tooltip',

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
        <div className="flex flex-col pt-2 duration-300">
          {/* Docs  */}
          <div onClick={() => setDocIsOpen(!isDocOpen)} className="py-2text-black flex cursor-pointer items-center justify-between rounded-lg text-white duration-300">
            <div className="flex items-center gap-4">
              <span className="font-medium">Documentation</span>
            </div>
            <IoIosArrowUp size={20} className={`${isDocOpen ? 'text-gray-100' : '-rotate-180 text-gray-400'} duration-300`} />
          </div>
          {/* doc div  */}
          <div className={`grid transition-all duration-300 ease-in-out ${isDocOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="my-2 flex flex-col space-y-2 overflow-hidden border-sky-400">
              <MenuItem key={23} className={`${pathname === 'introduction' ? 'text-white' : 'text-[#a1a1aa] hover:opacity-100'}`} href="/">
                Introduction
              </MenuItem>
              <MenuItem key={32} className={`${pathname === 'introduction' ? 'text-white' : 'text-[#a1a1aa] hover:opacity-100'}`} href="/components/avatar">
                Quick Start
              </MenuItem>
            </div>
          </div>
          {/* Component  */}
          <div onClick={() => setComponentIsOpen(!isComponentOpen)} className="py-2text-black flex cursor-pointer items-center justify-between rounded-lg text-white">
            <div className="flex items-center gap-4">
              <span>Components</span>
            </div>
            <IoIosArrowUp size={20} className={`${isComponentOpen ? 'text-gray-100' : '-rotate-180 text-gray-400'} duration-300`} />
          </div>

          {/* Component div */}
          <div className={`my-2 grid transition-all duration-300 ease-in-out ${isComponentOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
            <div className="flex flex-col space-y-2 overflow-hidden border-sky-400">
              {navComponentsItems.map((componentName, i) => (
                <MenuItem
                  key={i}
                  className={`${pathname === componentName.toLowerCase().replace(/\s+/g, '') ? 'font-semibold text-sky-400' : 'text-[#a1a1aa]'}`}
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
