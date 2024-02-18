import Footer1 from '@/Components/Footer/Footer/Footer1/Footer1';
import Footer2 from '@/Components/Footer/Footer/Footer2/Footer2';
import Footer3 from '@/Components/Footer/Footer/Footer3/Footer3';
import Footer4 from '@/Components/Footer/Footer/Footer4/Footer4';
import Footer5 from '@/Components/Footer/Footer/Footer5/Footer5';
import Footer6 from '@/Components/Footer/Footer/Footer6/Footer6';
import Footer7 from '@/Components/Footer/Footer/Footer7/Footer7';

export const metadata = {
    title: 'Footer Components',
    description: 'Footer tailwind components'
};

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic Footer</h1>
            <Footer1 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Single Column Footer</h1>
            <Footer2 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Single Column Footer V2</h1>
            <Footer3 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Multi-Column Footer</h1>
            <Footer4 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Multi-Column Footer V2</h1>
            <Footer5 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Multi-Column Footer With Vertical Links</h1>
            <Footer6 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Multi-Column Footer With Three Columns</h1>
            <Footer7 />
        </div>
    );
};

export default Footer;
