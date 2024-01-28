import { useEffect } from 'react';
import Accordion1 from './Accordion1/Accordion1';
import Accordion10 from './Accordion10/Accordion10';
import Accordion2 from './Accordion2/Accordion2';
import Accordion3 from './Accordion3/Accordion3';
import Accordion4 from './Accordion4/Accordion4';
import Accordion5 from './Accordion5/Accordion5';
import Accordion8 from './Accordion8/Accordion8';
import Accordion9 from './Accordion9/Accordion9';
import { Accordion11 } from './Accordion11/Accordion11';
import Accordion6 from './Accordion6/Accordion6';

const Accordion = () => {


    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div>
            {/* accordion 1  */}

            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Basic Accordion</h1>
                <Accordion1></Accordion1>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Dark theme Accordion</h1>
                <Accordion2></Accordion2>
            </div>

            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Accordion  With Index</h1>
                <Accordion3></Accordion3>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # ColorFull Accordion </h1>
                <Accordion4></Accordion4>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Menu Accordion</h1>
                <Accordion5></Accordion5>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Accordion with image</h1>
                <Accordion6></Accordion6>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Vertical Accordion</h1>
                <Accordion8></Accordion8>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Vertical Menu Accordion</h1>
                <Accordion9></Accordion9>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Drawer Accordion</h1>
                <Accordion10></Accordion10>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"> # Accordion With Image Slide</h1>
                <Accordion11></Accordion11>
            </div>
        </div>
    );
};

export default Accordion;
