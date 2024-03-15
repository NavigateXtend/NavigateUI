'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';

const codeStr = `
import { useState } from 'react';

export const CardPagination = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 // Adjust the page numbers the way you want
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
  <div className='flex select-none justify-center items-center gap-3 '>
      {/* left arrow */}
      <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full'>
        <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
      </div> 
      <div className='flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full'>
           {[...Array(page).keys()].map((item,ind) => <div onClick={()=>{setPageNumber(item)}} className={\`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 \${pageNumber === item ? 'bg-sky-500 text-white':'bg-white'} border-sky-300  font-semibold text-gray-700   py-[6px] rounded-full\`} key={item}>
          {item + 1}
          </div>)}
      </div>
      {/* right arrow */}
      <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className=' hover:scale-110 scale-100 transition-all duration-200 cursor-pointer hover:bg-white px-1 py-1 rounded-full'>
        <svg className='w-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
      </div>
  </div>
    );
};

`;

const CardPagination = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const page = 5; // Adjust the page numbers the way you want
  const updatePageNumber = (num) => {
    if (num > page - 1 || 0 > num) {
      return setPageNumber(0);
    }
    setPageNumber(num);
  };
  return (
    <CP code={codeStr}>
      <div className="flex select-none items-center justify-center gap-3 ">
        {/* left arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className=" scale-100 cursor-pointer rounded-full px-1 py-1 transition-all duration-200 hover:scale-110 hover:bg-white"
        >
          <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M15 7L10 12L15 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />{' '}
            </g>
          </svg>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-full bg-white p-2 shadow-lg">
          {[...Array(page).keys()].map((item, ind) => (
            <div
              onClick={() => {
                setPageNumber(item);
              }}
              className={`scale-100 cursor-pointer px-3 text-sm transition-all duration-200 hover:scale-110 ${pageNumber === item ? 'bg-sky-500 text-white' : 'bg-white'} rounded-full  border-sky-300 py-[6px]   font-semibold text-gray-700`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* right arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber + 1);
          }}
          className=" scale-100 cursor-pointer rounded-full px-1 py-1 transition-all duration-200 hover:scale-110 hover:bg-white"
        >
          <svg className="w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path d="M10 7L15 12L10 17" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>{' '}
            </g>
          </svg>
        </div>
      </div>
    </CP>
  );
};

export default CardPagination;
