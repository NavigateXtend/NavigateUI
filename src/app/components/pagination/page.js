import SimplePagination from '@/Components/Pagination/SimplePagination';
import CardPagination from '@/Components/Pagination/CardPagination';
import SquareCardPagination from '@/components/Pagination/SquareCardPagination';
import TransParentPagination from '@/Components/Pagination/TransParentPagination';
import SquareCardPagination2 from '@/components/Pagination/SquareCardPagination2';

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
      <SquareCardPagination></SquareCardPagination>
      <SquareCardPagination2></SquareCardPagination2>
      <TransParentPagination></TransParentPagination>
    </div>
  );
}
