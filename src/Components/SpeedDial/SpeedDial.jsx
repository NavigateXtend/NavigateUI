import React, { useEffect } from 'react';
import { SpeedDial1 } from './SpeedDial1/SpeedDial1';

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
            <h1>Default Speed Dial</h1>
            <SpeedDial1></SpeedDial1>
        </div>
    );
};

export default SpeedDial;