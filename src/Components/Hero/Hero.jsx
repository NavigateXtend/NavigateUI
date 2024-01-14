import React, { useEffect } from 'react';
import Hero1 from './Hero1/Hero1';
import Hero2 from './Hero2/Hero2';
import Hero3 from './Hero3/Hero3';
import Hero4 from './Hero4/Hero4';
import Hero5 from './Hero5/Hero5';

const Hero = () => {
    // For starting the scroll form the top
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
        <div className="space-y-5">
            <Hero1></Hero1>
            <Hero2></Hero2>
            <Hero3></Hero3>
            <Hero4></Hero4>
            <Hero5></Hero5>
        </div>
    );
};

export default Hero;
