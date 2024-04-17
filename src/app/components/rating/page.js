
import Heading from '@/ui/Heading';
import React from 'react';
import BasicRating from '@/components/Rating/BasicRating'
import ClickRating from '@/components/Rating/ClickRating'
export const metadata = {
  title: 'Rating Components',
  description: 'Rating tailwind components'
};

const Rating = () => {
  return (
    <div>
      <Heading>Explore The Rating Collections</Heading>
      <BasicRating/> 
      <ClickRating/>
    </div>
  );
};

export default Rating;
