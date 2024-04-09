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
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Accordion Components',
  description: 'Accordion tailwind components'
};

export default function AccordionPage() {
  return (
    <div className="">
      <Heading>Basic Accordion</Heading>
      <Accordion1 />
      <Heading>Dark theme Accordion</Heading>
      <Accordion2 />
      <Heading>Accordion With Index</Heading>
      <Accordion3 />
      <Heading>ColorFull Accordion </Heading>
      <Accordion4 />
      <Heading>Menu Accordion</Heading>
      <Accordion5 />
      <Heading>Accordion with image</Heading>
      <Accordion6 />
      <Heading>Vertical Accordion</Heading>
      <Accordion8 />
      <Heading>Vertical Menu Accordion</Heading>
      <Accordion9 />
      <Heading>Drawer Accordion</Heading>
      <Accordion10 />
      <Heading>Accordion With Image Slide</Heading>
      <Accordion11 />
      <Heading>Accordion With Image Slide</Heading>
      <Accordion12 />
    </div>
  );
}
