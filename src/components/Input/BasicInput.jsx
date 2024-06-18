import React from 'react';
import CP from '@/ui/CP';

const code = `export default function BasicInput(){
    return <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
}`;
export default function BasicInput(i) {
    return (
        <CP code={code} i={i}>
            <input className="rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" />
        </CP>
    );
}
