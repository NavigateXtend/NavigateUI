import React from 'react';
import CP from '@/ui/CP';
import Image from 'next/image';

const code = `const Card11 = () => {
    return (
      <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <Image width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="card navigate ui" />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Product Name</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
          <div className="text-lg font-semibold">$99.99</div>
        </div>
        <div className="flex gap-4">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
        </div>
      </div>
    );
};

export default Card11;`;

const Card11 = () => {
  return (
    <CP code={code}>
      <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]">
        <Image width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="card navigate ui" />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">Product Name</h1>
          <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
          <div className="text-lg font-semibold">$99.99</div>
        </div>
        <div className="flex gap-4">
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
          <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
        </div>
      </div>
    </CP>
  );
};

export default Card11;
