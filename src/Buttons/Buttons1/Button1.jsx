import "../button.css";
const Button1 = () => {
  return (
    <>
      {/* 1 */}
      <button className="bg-red-600 hover:scale-95 text-white duration-300">
        Hover
      </button>
      {/* 2 */}
      <button className="hover:before:bg-white before:w-0 before:h-0 hover:before:h-full before:top-0 before:duration-500 before:-z-10 before:left-0 hover:before:w-full before:block before:absolute relative inline-block transform origin-left hover:text-black text-white  bg-transparent border-2 hover:border-transparent border-white duration-500">
        Hover
      </button>
      {/* 3 */}
      <button className="bg-white text-black relative overflow-hidden group z-10 rounded-lg">
        <span className="absolute bg-white rotate-12 -inset-44 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-500 rotate-12 -inset-44 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-600 rotate-12 -inset-44 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10 text-white">
          Leave
        </span>
        Hover
      </button>
      {/* 4 */}
      <button className=" before:block before:absolute before:inset-0 before:bg-orange-300 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-white hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-black">
        <span>Hover</span>
      </button>
      {/* 5 */}
      <button className="bg-white focus:border-b-2 focus:border-l-2 border-l-4 border-b-4 focus:translate-y-0 -translate-y-[2px] duration-150 focus:bg-white border-yellow-600 rounded-lg">
        Click
      </button>
      {/* 6 */}
      <button className="bg-lime-300 text-black relative overflow-hidden group z-10 hover:text-white duration-1000">
        <span className="absolute bg-lime-900 -inset-5 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-700 origin-center transform transition-all"></span>
        Hover
      </button>
      {/* 7 */}
    </>
  );
};

export default Button1;
