'use client';
import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SidebarMenuItem({ menuItem, isOpen }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);

  const path = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);
  return (
    <div className={`${path.includes('components') && menuItem.about === 'Blocks' ? 'hidden' : path.includes('blocks') && menuItem.about === 'Components' ? 'hidden' : null}`}>
      
      {/* click event div  */}

      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`group flex w-full cursor-pointer items-center justify-between gap-5 py-3`}>
        <h4 className={`group-hover:text-primary text-lg font-medium capitalize text-[14x] text-white duration-300 `}>{menuItem.about}</h4>
        <IoIosArrowDown className={`${isDropdownOpen ? '-rotate-180 text-white duration-300' : ' text-white/60 duration-300'} duration-300`} />
      </div>
      
      {/* the dropdown  */}
      
      <div className={`grid origin-top overflow-hidden duration-300 ease-in-out ${isDropdownOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="flex flex-col space-y-3 overflow-hidden text-[#a1a1aa] lg:space-y-2">
          {menuItem?.links?.map((item, key) => (
            <div key={key} className={`${item?.route === 'Components' || item?.route === 'Blocks' ? 'lg:hidden' : null} `}>
              {menuItem.about === 'Getting Start' ? (
                <h1 className="pl-2 lg:pl-0">
                  <span className="duration-200 group-hover:pl-[2px] group-hover:tracking-widest group-hover:text-white">{item.route}</span>
                  <span className="rounded-lg border border-cyan-400 px-1 font-mono text-xs text-cyan-400" hidden={!item.new}>
                    {item.new ? 'new' : ''}
                  </span>
                </h1>
              ) : (
                <Link className="group flex items-center gap-1 pl-2 lg:pl-0" href={`/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}`}>
                  <span className={`duration-200 group-hover:pl-[2px] group-hover:tracking-widest group-hover:text-white`}>{item.route}</span>
                  <span
                    className={`rounded-lg border px-1 font-mono text-xs ${item.new ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400' : item.update ? 'border-orange-500 bg-orange-500/20 text-orange-500' : 'hidden'}`}
                  >
                    {item.new ? 'new' : item.update ? 'updated' : null}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

