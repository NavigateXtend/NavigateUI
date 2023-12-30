import React from 'react';

const Card3 = () => {
    return (
      <div className="w-[350px] shadow-md py-10 pl-8 rounded-lg border-t border-l border-l-[#005eb6] border-t-[#005eb6] border-b-2 border-r-2 border-b-[#0084ff] border-r-[#0084ff] space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="w-[35%] text-4xl font-bold tracking-wider text-sky-900">
            <sup className="text-2xl font-black">$</sup>
            70<sub className="text-sm tracking-tight">/mo</sub>
          </h1>
          <div className="px-10 py-5  w-[65%] bg-gradient-to-r from-[#52b7ff] to-[#0084ff] rounded-tl-full rounded-bl-full">
            <h3 className="text-white font-semibold text-xl tracking-wider">STANDARD</h3>
          </div>
        </div>
        <div>
          <p className='text-sky-900 font-semibold '>Enjoy limitless use with interactive export use</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    );
};

export default Card3;