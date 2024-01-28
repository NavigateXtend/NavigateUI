import { useEffect } from 'react';
import Skeleton1 from './Skeleton1/Skeleton1';
import Skeleton2 from './Skeleton2/Skeleton2';
import Skeleton3 from './Skeleton3/Skeleton3';
import Skeleton4 from './Skeleton4/Skeleton4';
import Skeleton5 from './Skeleton5/Skeleton5';
import Skeleton6 from './Skeleton6/Skeleton6';
import Skeleton7 from './Skeleton7/Skeleton7';

const Skeleton = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="grid grid-cols-1 space-y-10">
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Avatar loading skeleton</h1>
                <Skeleton1></Skeleton1>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800 "># Product Details loading skeleton</h1>
                <Skeleton4></Skeleton4>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Ecommerce Card Skeleton</h1>
                <Skeleton2></Skeleton2>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Ecommerce Card Skeleton</h1>
                <Skeleton3></Skeleton3>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Social media post skeleton</h1>
                <Skeleton5></Skeleton5>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Profile Card Skeleton</h1>
                <Skeleton6></Skeleton6>
            </>
            <>
                <h1 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Profile Card dark theme Skeleton</h1>
                <Skeleton7></Skeleton7>
            </>
            
        </div>
    );
};

export default Skeleton;
