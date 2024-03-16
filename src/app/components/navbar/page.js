import { NavBar1 } from '@/components/NavBar/NavBar1';
import { NavBar2 } from '@/components/NavBar/NavBar2';
import { NavBar3 } from '@/components/NavBar/NavBar3';
import { NavBar4 } from '@/components/NavBar/NavBar4';
import { NavBar5 } from '@/components/NavBar/NavBar5';
import { NavBar6 } from '@/components/NavBar/NavBar6';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Navbar Components',
  description: 'Navbar tailwind components'
};

export default function FooterPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>#Basic NavBar</Heading>
      <NavBar1 />
      <Heading>#Basic NavBar with Dropdown menu</Heading>
      <NavBar2 />
      <Heading>#Basic NavBar With Three Ends</Heading>
      <NavBar3 />
      <Heading>#Basic NavBar With Buttons</Heading>
      <NavBar4 />
      <Heading>#Basic NavBar With Routes and Buttons</Heading>
      <NavBar5 />
      <Heading>#Responsive NavBar</Heading>
      <NavBar6 />
    </div>
  );
}
