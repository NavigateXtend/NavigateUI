import SimplePagination from '@/Components/Pagination/SimplePagination';
import CardPagination from '@/Components/Pagination/CardPagination';
import React from 'react';




export const metadata = {
    title: 'Pagination Components',
    description: 'Pagination tailwind components'
  }; 

export default function page () {
    return (
        <div className="flex flex-col items-center justify-center">
        <SimplePagination />
        <CardPagination></CardPagination>
        </div>
    );
};

