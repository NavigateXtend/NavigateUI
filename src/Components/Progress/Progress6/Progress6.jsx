import React from 'react';

const Progress6 = () => {
    const number = 50
    return (
<div className="relative w-40 h-40 text-white">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <circle className="text-gray-200 stroke-current" strokeWidth={10} cx={50} cy={50} r={40} fill="transparent" />
    <circle style={{
        strokeDasharray:`${number} 400`,
        // transition:"stroke-dashoffset 0.35s",
        // transform:"rotate(-90deg)",
        // transformOrigin:"50% 50%"
    }} className="text-indigo-500  progress-ring__circle stroke-current" strokeWidth={10} strokeLinecap="round" cx={50} cy={50} r={40} fill="transparent" strokeDashoffset="calc(400 - (400 * 45) / 100)" />
    <text x={50} y={50} fontFamily="Verdana" fontSize={12} textAnchor="middle" alignmentBaseline="middle">70%</text>
  </svg>
</div>

    );
};

export default Progress6;