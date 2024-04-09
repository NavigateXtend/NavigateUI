import CardPagination from '@/components/Pagination/CardPagination';
import SimplePagination from '@/components/Pagination/SimplePagination';
import SquareCardPagination from '@/components/Pagination/SquareCardPagination';
import SquareCardPagination2 from '@/components/Pagination/SquareCardPagination2';
import TransParentPagination from '@/components/Pagination/TransParentPagination';
import Heading from '@/ui/Heading';
import React from 'react';

export const metadata = {
  title: 'Pagination Components',
  description: 'Pagination tailwind components'
};

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Explore The Button Collections</Heading>
      <SimplePagination />
      <CardPagination />
      <SquareCardPagination />
      <SquareCardPagination2 />
      <TransParentPagination />
    </div>
  );
}
