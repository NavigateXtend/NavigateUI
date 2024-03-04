import Accordion1 from '@/components/Accordion/Accordion1';
import Accordion10 from '@/components/Accordion/Accordion10';
import Accordion11 from '@/components/Accordion/Accordion11';
import Accordion12 from '@/components/Accordion/Accordion12';
import Accordion2 from '@/components/Accordion/Accordion2';
import Accordion3 from '@/components/Accordion/Accordion3';
import Accordion4 from '@/components/Accordion/Accordion4';
import Accordion5 from '@/components/Accordion/Accordion5';
import Accordion6 from '@/components/Accordion/Accordion6';
import Accordion8 from '@/components/Accordion/Accordion8';
import Accordion9 from '@/components/Accordion/Accordion9';

export const metadata = {
  title: 'Accordion Components',
  description: 'Accordion tailwind components'
};

export default function AccordionPage() {
  return (
    <div className="">
      {/* accordion 1  */}
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Basic Accordion</h1>
        <Accordion1 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Dark theme Accordion</h1>
        <Accordion2 />
      </div>

      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Accordion With Index</h1>
        <Accordion3 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # ColorFull Accordion </h1>
        <Accordion4 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Menu Accordion</h1>
        <Accordion5 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Accordion with image</h1>
        <Accordion6 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Vertical Accordion</h1>
        <Accordion8 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Vertical Menu Accordion</h1>
        <Accordion9 />
      </div>
      <div>
        <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Drawer Accordion</h1>
        <Accordion10 />
      </div>
      <div>
        <h1 className="mt-10  px-4 text-2xl font-semibold text-gray-100"> # Accordion With Image Slide</h1>
        <Accordion11 />
      </div>
      <div>
        <h1 className="mt-10  px-4 text-2xl font-semibold text-gray-100"> # Accordion With Image Slide</h1>
        <Accordion12 />
      </div>
    </div>
  );
}
