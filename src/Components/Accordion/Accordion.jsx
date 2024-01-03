import React from 'react';
import Accordion1 from './Accordion1/Accordion1';

const Accordion = () => {
    return (
      <div>
        {/* accordion 1  */}

        <div>
            <h1 className='text-2xl font-bold px-4'>Accordion 1</h1>
          <Accordion1></Accordion1>
        </div>
      </div>
    );
};

export default Accordion;