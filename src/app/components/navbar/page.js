import Footer1 from '@/Components/Footer/Footer/Footer1/Footer1';
import Footer2 from '@/Components/Footer/Footer/Footer2/Footer2';
import Footer3 from '@/Components/Footer/Footer/Footer3/Footer3';
import Footer4 from '@/Components/Footer/Footer/Footer4/Footer4';
import Footer5 from '@/Components/Footer/Footer/Footer5/Footer5';
import Footer6 from '@/Components/Footer/Footer/Footer6/Footer6';
import Footer7 from '@/Components/Footer/Footer/Footer7/Footer7';
import { NavBar1 } from '@/Components/NavBar/NavBar1/NavBar1';
import { NavBar2 } from '@/Components/NavBar/NavBar2/NavBar2';
import { NavBar3 } from '@/Components/NavBar/NavBar3/NavBar3';
import { NavBar4 } from '@/Components/NavBar/NavBar4/NavBar4';
import { NavBar5 } from '@/Components/NavBar/NavBar5/NavBar5';
import { NavBar6 } from '@/Components/NavBar/NavBar6/NavBar6';

const Footer = () => {
    return (
        <>
            <div className="space-y-10">
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar</h1>
                <NavBar1 />
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar with Dropdown menu</h1>
                <NavBar2 />
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Two Ends</h1>
                <NavBar3 />
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Buttons</h1>
                <NavBar4 />
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic NavBar With Routes and Buttons</h1>
                <NavBar5 />
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Responsive NavBar</h1>
                <NavBar6 />
            </div>
        </>
    );
};

export default Footer;
