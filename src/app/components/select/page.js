import Select1 from '@/components/Select/Select1';
import Heading from '@/ui/Heading';
import React from 'react';

export const metadata = {
  title: 'Selector Components',
  description: 'Navbar tailwind components'
};

const Selector = () => {
  return (
    <div>
      <Heading>Explore The Selects Collections</Heading>
      <Select1></Select1>
    </div>
  );
};

export default Selector;
