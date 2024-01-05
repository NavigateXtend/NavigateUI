import React from "react";

const Loading1 = () => {
  return (
    <div className="flex gap-3">
      <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dashed border-sky-600"></div>
      <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
    </div>
  );
};

export default Loading1;
