
import BasicNavbar from '@/components/NavBar/BasicNavbar';
import { NavBar3 } from '@/components/NavBar/NavBar3';
import { NavBar4 } from '@/components/NavBar/NavBar4';
import { NavBar5 } from '@/components/NavBar/NavBar5';
import { NavBar6 } from '@/components/NavBar/NavBar6';
import NavbarWithDropdown from '@/components/NavBar/NavbarWithDropdown';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Navbar Components',
  description: 'Navbar tailwind components - Navigate UI'
};

export default function FooterPage() {
  return (
    <>
      <Heading>Basic Navbar</Heading>
      <BasicNavbar />
      <Heading>Navbar with dropdown menu</Heading>
      <NavbarWithDropdown />
      <Heading>Basic Navbar With Three Ends</Heading>
      <NavBar3 />
      <Heading>Basic Navbar With Buttons</Heading>
      <NavBar4 />
      <Heading>Basic Navbar With Routes and Buttons</Heading>
      <NavBar5 />
      <Heading>Responsive Navbar</Heading>
      <NavBar6 />
    </>
  );
}
