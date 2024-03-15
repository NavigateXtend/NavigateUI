'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { RiCloseFill, RiMenu2Line } from 'react-icons/ri';
import SidebarMenuItem from './SidebarMenuItem';

const MenuItems = [
  {
    about: 'Getting Start',
    links: [{ route: 'Over View' }, { route: 'Instruction' }, { route: 'Components' }, { route: 'Blocks' }]
  },
  {
    about: 'Components',
    links: [
      { route: 'Accordion' },
      { route: 'Avatar' },
      { route: 'Badge' },
      { route: 'Button' },
      { route: 'Card' },
      { route: 'Carousel', update: true },
      { route: 'Dropdown', new: true },
      // { route: 'Footer' },
      { route: 'Form' },
      { route: 'File Upload', new: true },
      { route: 'Hero' },
      { route: 'Input', new: true },
      { route: 'Modal' },
      // { route: 'Navbar' },
      { route: 'Pagination', new: true },
      { route: 'Progress', new: true },
      { route: 'Select', new: true },
      { route: 'Skeleton' },
      { route: 'Speed Dial' },
      { route: 'Spinner' },
      { route: 'Switch', new: true },
      // { route: 'Table' },
      { route: 'Tooltip' }
    ]
  },
  {
    about: 'Blocks',
    links: [{ route: 'Pricing' }, { route: 'Contact Us' }]
  }
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const openRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (openRef.current && !openRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <>
      <div
        ref={openRef}
        className={`lg:h-ch sidebar fixed top-0 z-[99] h-screen select-none overflow-y-scroll pl-3 pr-5 duration-300 md:text-lg lg:visible lg:top-auto lg:pl-0 lg:text-base ${isOpen ? 'visible left-0 w-64 origin-left opacity-100 backdrop-blur-3xl lg:left-auto lg:w-40 lg:border-none lg:bg-transparent lg:backdrop-blur-0' : 'invisible -left-40 opacity-0 lg:visible lg:left-auto lg:opacity-100'}`}
      >
        <div className="flex items-center justify-between pb-2 pt-4 text-white lg:hidden">
          <Link href="/" className="group flex flex-1 items-center gap-px rounded-lg text-xl font-semibold">
            <Image src="/Logo.svg" className="size-8" width={33} height={32} alt="navigate ui logo" />
            <span>NavigateUI</span>
          </Link>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <RiCloseFill size={25} />
          </button>
        </div>
        {MenuItems.map((menuItem, idx) => (
          <SidebarMenuItem key={idx} isOpen={isOpen} menuItem={menuItem}></SidebarMenuItem>
        ))}
      </div>
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
        className={`visible fixed left-0 top-0 z-[99] p-3 lg:invisible`}
      >
        {!isOpen ? <RiMenu2Line size={25} className="text-white" /> : null}
      </button>
    </>
  );
}
