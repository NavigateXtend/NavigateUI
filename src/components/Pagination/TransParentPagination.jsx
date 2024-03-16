'use client';

import CP from '@/ui/CP';
import React from 'react';
import { useState } from 'react';

const codeStr = `
import { useState } from 'react';

export const TransParentPagination = () => {
    const [pageNumber,setPageNumber] = useState(0)
    const page = 5 // Adjust the page numbers the way you want
    const updatePageNumber = (num)=>{
        if((num > (page - 1)) || (0 > num)){ return setPageNumber(0) }
        setPageNumber(num)
    }
    return (
    <div className='flex justify-center items-center gap-5 bg-white p-2 shadow-lg rounded-md w-fit mx-auto select-none'>
        {/* left arrow */}
        <div onClick={()=>{updatePageNumber(pageNumber - 1)}} className='text-[12px] cursor-pointer font-semibold px-1 py-1'>
           PREV
        </div> 
        <div className='flex justify-center items-center gap-2 '>
            {[...Array(page).keys()].map((item,ind) => <div key={item} onClick={()=>{setPageNumber(item)}} className={\`cursor-pointer hover:scale-110  border-b-2  text-sm scale-100 transition-all duration-200 px-3 \${pageNumber === item ? 'border-sky-300':'border-white'}   font-semibold text-gray-700   py-[6px] \`} >
                {item + 1}
            </div>)}
        </div>
        {/* right arrow */}
        <div  onClick={()=>{updatePageNumber(pageNumber + 1)}} className='text-[12px] cursor-pointer font-semibold px-1 py-1'>
           NEXT
        </div>
    </div>
    );
};

`;

const TransParentPagination = () => {
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
      <div className="mx-auto flex w-fit select-none items-center justify-center gap-5 rounded-md bg-white p-2 shadow-lg">
        {/* left arrow */}
        <div
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className="cursor-pointer px-1 py-1 text-[12px] font-semibold"
        >
          PREV
        </div>
        <div className="flex items-center justify-center gap-2 ">
          {[...Array(page).keys()].map((item, ind) => (
            <div
              key={item}
              onClick={() => {
                setPageNumber(item);
              }}
              className={`scale-100 cursor-pointer  border-b-2  px-3 text-sm transition-all duration-200 hover:scale-110 ${pageNumber === item ? 'border-sky-300' : 'border-white'}   py-[6px] font-semibold   text-gray-700 `}
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
          className="cursor-pointer px-1 py-1 text-[12px] font-semibold"
        >
          NEXT
        </div>
      </div>
    </CP>
  );
};

export default TransParentPagination;
