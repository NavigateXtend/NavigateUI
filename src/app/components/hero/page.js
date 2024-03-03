import Hero1 from '@/Components/Hero/Hero1';
import Hero2 from '@/Components/Hero/Hero2';
import Hero3 from '@/Components/Hero/Hero3';
import Hero4 from '@/Components/Hero/Hero4';
import Hero5 from '@/Components/Hero/Hero5';

export const metadata = {
  title: 'Hero Components',
  description: 'Hero tailwind components'
};

export default function HeroPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
    </div>
  );
}
