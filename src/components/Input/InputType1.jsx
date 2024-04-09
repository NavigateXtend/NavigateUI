import React from 'react';
import CP from '@/ui/CP';

const code = `export default function InputType1(){
    return (
        <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
    );
};`;
export default function InputType1 () {
  return (
    <CP code={code}>
        <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
    </CP>
  );
};
