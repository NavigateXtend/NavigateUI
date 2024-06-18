'use client';

import CP from '@/ui/CP';
import { useState } from 'react';

const codeStr = `
import { useState } from 'react';

export default function SquareCardPagination2() {

    const [pageNumber, setPageNumber] = useState(0);
    const page = 5; // Adjust the page numbers the way you want
    
    const updatePageNumber = (num) => {
        if (num > page - 1 || 0 > num) {
            return setPageNumber(0);
        }
        setPageNumber(num);
    };

    return (
        <div className="mx-auto flex w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
            {/* previous button */}
            <button
                disabled={pageNumber === 0}
                onClick={() => {
                    updatePageNumber(pageNumber - 1);
                }}
                className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white "
            >
                Previous
            </button>
            <div className="flex items-center justify-center divide-x divide-zinc-500">
                {[...Array(page).keys()].map((item, ind) => (
                    <div
                        onClick={() => {
                            setPageNumber(item);
                        }}
                        className={\`cursor-pointer px-4 text-sm  transition-all duration-200 \${pageNumber === item ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'}  py-[8px] font-semibold\`}
                        key={item}
                    >
                        {item + 1}
                    </div>
                ))}
            </div>
            {/* next button */}
            <button
                disabled={pageNumber === page - 1}
                onClick={() => {
                    updatePageNumber(pageNumber + 1);
                }}
                className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
            >
                Next
            </button>
        </div>
    );
}

`;

export default function SquareCardPagination2() {
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
      <div className="mx-auto flex w-fit select-none items-center justify-center divide-x divide-zinc-500 overflow-hidden rounded-sm border border-zinc-500 bg-white dark:bg-gray-700">
        {/* previous button */}
        <button
          disabled={pageNumber === 0}
          onClick={() => {
            updatePageNumber(pageNumber - 1);
          }}
          className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white "
        >
          Previous
        </button>
        <div className="flex items-center justify-center divide-x divide-zinc-500">
          {[...Array(page).keys()].map((item, ind) => (
            <div
              onClick={() => {
                setPageNumber(item);
              }}
              className={`cursor-pointer px-4 text-sm  transition-all duration-200 ${pageNumber === item ? 'bg-zinc-500 text-white' : 'hover:bg-gray-500/20'}  py-[8px] font-semibold`}
              key={item}
            >
              {item + 1}
            </div>
          ))}
        </div>
        {/* next button */}
        <button
          disabled={pageNumber === page - 1}
          onClick={() => {
            updatePageNumber(pageNumber + 1);
          }}
          className="w-20 cursor-pointer px-3 py-2 text-center text-sm outline-none transition-all duration-200 hover:bg-gray-500/20 disabled:bg-zinc-500 disabled:text-white"
        >
          Next
        </button>
      </div>
    </CP>
  );
}
