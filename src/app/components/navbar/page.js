import { NavBar1 } from '@/components/NavBar/NavBar1';
import { NavBar2 } from '@/components/NavBar/NavBar2';
import { NavBar3 } from '@/components/NavBar/NavBar3';
import { NavBar4 } from '@/components/NavBar/NavBar4';
import { NavBar5 } from '@/components/NavBar/NavBar5';
import { NavBar6 } from '@/components/NavBar/NavBar6';

export const metadata = {
  title: 'Navbar Components',
  description: 'Navbar tailwind components'
};

export default function FooterPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar</h1>
      <NavBar1 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar with Dropdown menu</h1>
      <NavBar2 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Three Ends</h1>
      <NavBar3 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Buttons</h1>
      <NavBar4 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Routes and Buttons</h1>
      <NavBar5 />
      <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Responsive NavBar</h1>
      <NavBar6 />
    </div>
  );
}
