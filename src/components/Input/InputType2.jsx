import CP from '@/ui/CP';
import React from 'react';

const code = `export default function InputType2(){
    return (
      <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2" type="text"/>
    );
};
`;
export default function InputType2(){
  return (
    <CP code={code}>
        <input
          className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] ring-offset-1 duration-200 focus:outline-none focus:ring-2"
          type="text"
        />
    </CP>
  );
};
