import { useEffect } from 'react';
import Spinner1 from './Part1/Spinner1';

const Spinner = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div>
            <Spinner1 />
        </div>
    );
};

export default Spinner;
