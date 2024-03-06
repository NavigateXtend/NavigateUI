import Skeleton1 from '@/components/Skeleton/Skeleton1';
import Skeleton2 from '@/components/Skeleton/Skeleton2';
import Skeleton3 from '@/components/Skeleton/Skeleton3';
import Skeleton4 from '@/components/Skeleton/Skeleton4';
import Skeleton5 from '@/components/Skeleton/Skeleton5';
import Skeleton6 from '@/components/Skeleton/Skeleton6';
import Skeleton7 from '@/components/Skeleton/Skeleton7';

export const metadata = {
  title: 'Skeleton Components',
  description: 'Skeleton tailwind components'
};

export default function SkeletonPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="m-0  px-3 py-0 text-base font-bold italic underline opacity-70 sm:text-lg md:text-xl">Avatar loading skeleton</h1>
      <Skeleton1 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Product Details loading skeleton</h1>
      <Skeleton4 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Ecommerce Card Skeleton</h1>
      <Skeleton2 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Ecommerce Card Skeleton</h1>
      <Skeleton3 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
      <Skeleton5 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
      <Skeleton6 />

      <h1 className="m-0 px-3 py-0 text-base font-bold italic text-white underline opacity-70 sm:text-lg md:text-xl">Social media post skeleton</h1>
      <Skeleton7 />
    </div>
  );
}
