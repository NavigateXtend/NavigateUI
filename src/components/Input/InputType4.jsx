import CP from '@/ui/CP';
import React from 'react';

const code = `export default function InputType4(){
    return (
      <div className="relative w-max">
        <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
        <label className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400" htmlFor="navigate_ui_input_44">
          Email
        </label>
      </div>
    );
};`;
export default function InputType4(){
  return (
    <CP code={code}>
      <div className="relative w-max">
        <input className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none" type="text" id='navigate_ui_input_44'/>
        <label
          className="absolute -top-2 left-0 bg-transparent text-xs text-gray-400 duration-300 peer-placeholder-shown:left-0 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-blue-400"
          htmlFor="navigate_ui_input_44"
        >
          Email
        </label>
      </div>
    </CP>
  );
};
