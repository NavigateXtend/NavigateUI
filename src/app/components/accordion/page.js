import Accordion1 from '@/Components/Accordion/Accordion1/Accordion1';
import Accordion10 from '@/Components/Accordion/Accordion10/Accordion10';
import { Accordion11 } from '@/Components/Accordion/Accordion11/Accordion11';
import Accordion12 from '@/Components/Accordion/Accordion12/Accordion12';
import Accordion2 from '@/Components/Accordion/Accordion2/Accordion2';
import Accordion3 from '@/Components/Accordion/Accordion3/Accordion3';
import Accordion4 from '@/Components/Accordion/Accordion4/Accordion4';
import Accordion5 from '@/Components/Accordion/Accordion5/Accordion5';
import Accordion6 from '@/Components/Accordion/Accordion6/Accordion6';
import Accordion8 from '@/Components/Accordion/Accordion8/Accordion8';
import Accordion9 from '@/Components/Accordion/Accordion9/Accordion9';

export const metadata = {
    title: 'Accordion Components',
    description: 'Accordion tailwind components'
};

const AccordionPage = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            {/* accordion 1  */}
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Basic Accordion</h1>
                <Accordion1></Accordion1>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Dark theme Accordion</h1>
                <Accordion2></Accordion2>
            </div>

            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Accordion With Index</h1>
                <Accordion3></Accordion3>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # ColorFull Accordion </h1>
                <Accordion4></Accordion4>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Menu Accordion</h1>
                <Accordion5></Accordion5>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Accordion with image</h1>
                <Accordion6></Accordion6>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Vertical Accordion</h1>
                <Accordion8></Accordion8>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Vertical Menu Accordion</h1>
                <Accordion9></Accordion9>
            </div>
            <div>
                <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"> # Drawer Accordion</h1>
                <Accordion10></Accordion10>
            </div>
            <div>
                <h1 className="mt-10  px-4 text-2xl font-semibold text-gray-100"> # Accordion With Image Slide</h1>
                <Accordion11></Accordion11>
            </div>
            <div>
                <h1 className="mt-10  px-4 text-2xl font-semibold text-gray-100"> # Accordion With Image Slide</h1>
                <Accordion12></Accordion12>
            </div>
        </div>
    );
};

export default AccordionPage;
