import Skeleton1 from '@/components/Skeleton/Skeleton1';
import Skeleton2 from '@/components/Skeleton/Skeleton2';
import Skeleton3 from '@/components/Skeleton/Skeleton3';
import Skeleton4 from '@/components/Skeleton/Skeleton4';
import Skeleton5 from '@/components/Skeleton/Skeleton5';
import Skeleton6 from '@/components/Skeleton/Skeleton6';
import Skeleton7 from '@/components/Skeleton/Skeleton7';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Skeleton Components',
  description: 'Skeleton tailwind components'
};

export default function SkeletonPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Avatar loading skeleton</Heading>
      <Skeleton1 />

      <Heading>Product Details loading skeleton</Heading>
      <Skeleton4 />
      <Heading>E-commerce Card Skeleton</Heading>
      <Skeleton2 />

      <Heading>E-commerce Card Skeleton</Heading>
      <Skeleton3 />

      <Heading>Social media post skeleton</Heading>
      <Skeleton5 />

      <Heading>Social media post skeleton</Heading>
      <Skeleton6 />

      <Heading>Social media post skeleton</Heading>
      <Skeleton7 />
    </div>
  );
}
