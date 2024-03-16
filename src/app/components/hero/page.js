import Hero1 from '@/components/Hero/Hero1';
import Hero2 from '@/components/Hero/Hero2';
import Hero3 from '@/components/Hero/Hero3';
import Hero4 from '@/components/Hero/Hero4';
import Hero5 from '@/components/Hero/Hero5';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Hero Components',
  description: 'Hero tailwind components'
};

export default function HeroPage() {
  return (
    <>
      <Heading>#Explore The Hero Collections</Heading>
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Hero5 />
    </>
  );
}
