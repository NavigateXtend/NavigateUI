import Card1 from '@/Components/Card/Card1';
import Card10 from '@/Components/Card/Card10';
import Card11 from '@/Components/Card/Card11';
import Card12 from '@/Components/Card/Card12';
import Card13 from '@/Components/Card/Card13';
import Card14 from '@/Components/Card/Card14';
import Card2 from '@/Components/Card/Card2';
import Card3 from '@/Components/Card/Card3';
import Card4 from '@/Components/Card/Card4';
import Card5 from '@/Components/Card/Card5';
import Card6 from '@/Components/Card/Card6';
import Card7 from '@/Components/Card/Card7';
import Card8 from '@/Components/Card/Card8';
import Card9 from '@/Components/Card/Card9';

export const metadata = {
  title: 'Card Components',
  description: 'Card tailwind components'
};

export default function CardPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="border-gray-700 pb-2 pt-10 text-center text-2xl font-semibold text-white lg:text-3xl">Explore The Card Collections</h1>
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
      <Card12 />
      <Card13 />
      <Card14 />
    </div>
  );
}
