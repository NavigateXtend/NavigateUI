import { useEffect } from 'react';
import Skeleton1 from './Skeleton1/Skeleton1';
import Skeleton2 from './Skeleton2/Skeleton2';
import Skeleton3 from './Skeleton3/Skeleton3';
import Skeleton4 from './Skeleton4/Skeleton4';

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
                <h1 className="md:text-xl  sm:text-lg text-base italic font-bold opacity-70 underline m-0 py-0 px-3">Avatar loading skeleton</h1>
                <Skeleton1></Skeleton1>
            </>
            <>
                <h1 className="md:text-xl sm:text-lg text-base  italic font-bold opacity-70 underline m-0 py-0 px-3 ">Product Details loading skeleton</h1>
                <Skeleton4></Skeleton4>
            </>
            <>
                <h1 className="md:text-xl sm:text-lg text-base  italic font-bold opacity-70 underline m-0 py-0 px-3">Ecommerce Card Skeleton</h1>
                <Skeleton2></Skeleton2>
            </>
            <>
                <h1 className="md:text-xl sm:text-lg text-base  italic font-bold opacity-70 underline m-0 py-0 px-3">Ecommerce Card Skeleton</h1>
                <Skeleton3></Skeleton3>
            </>
            
        </div>
    );
};

export default Skeleton;
