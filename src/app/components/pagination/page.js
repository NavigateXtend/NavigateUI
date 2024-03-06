import SimplePagination from '@/Components/Pagination/SimplePagination';
import React from 'react';




export const metadata = {
    title: 'Modal Components',
    description: 'Modal tailwind components'
  }; 

export default function page () {
    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Simple progress</h1>
        <SimplePagination />
        </div>
    );
};

