import { useEffect } from 'react';
import { SpeedDial1 } from './SpeedDial1/SpeedDial1';
import { SpeedDial2 } from './SpeedDial2/SpeedDial2';
import { SpeedDial3 } from './SpeedDial3/SpeedDial3';
import { SpeedDial4 } from './SpeedDial4/SpeedDial4';




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
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Horizontal To Top Speed dial</h1>
                <SpeedDial2></SpeedDial2>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Vertical To Right Speed dial</h1>
                <SpeedDial3></SpeedDial3>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-10 text-slate-800"># Vertical To left Speed dial</h1>
                <SpeedDial4></SpeedDial4>
            </div>
        </div>
    );
};

export default SpeedDial;