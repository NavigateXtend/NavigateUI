import { useEffect } from 'react';
import Footer1 from './Footer1/Footer1';
import Footer2 from './Footer2/Footer2';
import Footer3 from './Footer3/Footer3';
import Footer4 from './Footer4/Footer4';
import Footer5 from './Footer5/Footer5';
import Footer6 from './Footer6/Footer6';
import Footer7 from './Footer7.jsx/Footer7';

const Footer = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <>
            <div className="space-y-10">
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Basic Footer</h1>
                <Footer1 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Single Column Footer</h1>
                <Footer2 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Single Column Footer V2</h1>
                <Footer3 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Multi-Column Footer</h1>
                <Footer4 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Multi-Column Footer V2</h1>
                <Footer5 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Multi-Column Footer With Vertical Links</h1>
                <Footer6 />
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Multi-Column Footer With Three Columns</h1>
                <Footer7 />
            </div>
        </>
    );
};

export default Footer;
