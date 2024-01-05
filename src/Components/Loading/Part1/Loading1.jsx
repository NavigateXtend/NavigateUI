import React from "react";

const Loading1 = () => {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
      <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
      <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-transparent border-l-transparent border-sky-400"></div>
      {/* <div className="w-10 h-10 before:animate-[spin_3s_linear_infinite] before:block before:inset-0 before:absolute relative before:bg-sky-700 overflow-hidden"></div> */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5 animate-[ping_2s_linear_infinite] border rounded-full border-sky-600"></div>
        <div className="w-5 h-5 animate-[ping_2s_linear_3s_infinite] border rounded-full border-sky-600 absolute"></div>
      </div>
      <div className="w-10 h-10 flex gap-2 items-center justify-center">
        <div className="w-2 h-5 animate-[ping_1.4s_linear_infinite] bg-sky-600"></div>
        <div className="w-2 h-5 animate-[ping_1.8s_linear_infinite] bg-sky-600"></div>
        <div className="w-2 h-5 animate-[ping_2s_linear_infinite] bg-sky-600"></div>
      </div>
      <div className="w-10 h-10 flex gap-1 items-center justify-center">
        <div className="w-2 h-2 animate-[bounce_1s_linear_infinite] bg-sky-600 rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_1.2s_linear_infinite] bg-sky-600 rounded-full"></div>
        <div className="w-2 h-2 animate-[bounce_1.4s_linear_infinite] bg-sky-600 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading1;
