
import Heading from '@/ui/Heading';
import React from 'react';
import BasicRating from '@/components/Rating/BasicRating'
import ClickRating from '@/components/Rating/ClickRating'
import LoveRating from '@/Components/Rating/LoveRating';
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
      <LoveRating/>
    </div>
  );
};

export default Rating;
