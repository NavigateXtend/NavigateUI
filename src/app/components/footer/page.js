import Footer1 from '@/components/Footer/Footer1';
import Footer2 from '@/components/Footer/Footer2';
import Footer3 from '@/components/Footer/Footer3';
import Footer4 from '@/components/Footer/Footer4';
import Footer5 from '@/components/Footer/Footer5';
import Footer6 from '@/components/Footer/Footer6';
import Footer7 from '@/components/Footer/Footer7';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Footer Components',
  description: 'Footer tailwind components'
};

export default function FooterPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Basic Footer</Heading>
      <Footer1 />
      <Heading>Single Column Footer</Heading>
      <Footer2 />
      <Heading>Single Column Footer V2</Heading>
      <Footer3 />
      <Heading>Multi-Column Footer</Heading>
      <Footer4 />
      <Heading>Multi-Column Footer V2</Heading>
      <Footer5 />
      <Heading>Multi-Column Footer With Vertical Links</Heading>
      <Footer6 />
      <Heading>Multi-Column Footer With Three Columns</Heading>
      <Footer7 />
    </div>
  );
}
