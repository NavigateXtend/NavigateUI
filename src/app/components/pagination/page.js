import SimplePagination from '@/Components/Pagination/SimplePagination';
import CardPagination from '@/Components/Pagination/CardPagination';
import SqureCardPagination from '@/Components/Pagination/SqureCardPagination';
import TransParentPagination from '@/Components/Pagination/TransParentPagination';
import SquareCardPaginaiton2 from '@/Components/Pagination/SquareCardPaginaiton2';

import React from 'react';

export const metadata = {
  title: 'Pagination Components',
  description: 'Pagination tailwind components'
};

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SimplePagination />
      <CardPagination></CardPagination>
      <SqureCardPagination></SqureCardPagination>
      <SquareCardPaginaiton2></SquareCardPaginaiton2>
      <TransParentPagination></TransParentPagination>


    </div>
  );
}

