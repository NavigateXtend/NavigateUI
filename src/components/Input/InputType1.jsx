import React from 'react';
import CP from '@/ui/CP';

const code = `export const InputType1 = () => {
    return (
        <div className="">
            <input className="rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
        </div>
    );
};`;
export const InputType1 = () => {
  return (
    <CP code={code}>
      <div className="">
        <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
      </div>
    </CP>
  );
};
