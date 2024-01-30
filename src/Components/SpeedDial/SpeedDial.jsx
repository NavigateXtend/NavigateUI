import React, { useEffect } from 'react';
import { SpeedDial1 } from './SpeedDial1/SpeedDial1';
import SpeedDial2 from './SpeedDial2/SpeedDial2';

const SpeedDial = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Horizontal To Bottom Speed dial</h1>
                <SpeedDial1></SpeedDial1>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Horizontal To Bottom Speed dial</h1>
                <SpeedDial2></SpeedDial2>
            </div>
            
        </div>
    );
};

export default SpeedDial;