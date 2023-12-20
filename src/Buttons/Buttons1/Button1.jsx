import "../button.css";
const Button1 = () => {
  return (
    <>
      {/* 1 */}
      <button className="text-3xl w-32 h-12 bg-red-600 hover:scale-95 text-white duration-300">
        Hover
      </button>
      {/* 2 */}
      <button className="text-3xl w-32 h-12 hover:before:bg-white before:w-0 before:h-0 hover:before:h-full before:top-0 before:duration-500 before:-z-10 before:left-0 hover:before:w-full before:block before:absolute relative inline-block transform origin-left hover:text-black text-white  bg-transparent border-2 hover:border-transparent border-white duration-500">
        Hover
      </button>
      {/* 3 */}
      <button className="text-3xl w-32 h-12 bg-black text-white relative overflow-hidden group z-10 rounded-lg">
        <span className="absolute bg-white rotate-12 -inset-44 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-500 rotate-12 -inset-44 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-600 rotate-12 -inset-44 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10 text-white">
          Leave
        </span>
        Hover
      </button>
      {/* 4 */}
      <button className="text-3xl w-32 h-12 before:block before:absolute before:inset-0 before:bg-teal-300 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-cyan-700 hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-white">
        <span>Hover</span>
      </button>
      {/* 5 */}
      <button className="text-3xl w-32 h-12 bg-blue-500  text-white focus:border-b-2 focus:border-l-2 border-l-4 border-b-4 focus:translate-y-0 -translate-y-[2px] duration-150 focus:bg-blue-500 border-yellow-500 rounded-lg">
        Click
      </button>
      {/* 6 */}
      <button className="text-3xl w-32 h-12 bg-lime-300 text-black relative overflow-hidden group z-10 hover:text-white duration-1000">
        <span className="absolute bg-lime-900 -inset-5 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-700 origin-center transform transition-all"></span>
        Hover
      </button>
      {/* 7 */}
      <button className="text-3xl w-32 h-12 text-white bg-indigo-300 overflow-hidden relative z-10 group">
        Hover
        <span className="bg-indigo-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute -top-8 left-2 -z-10"></span>
        <span className="bg-indigo-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute -top-4 left-6 -z-10"></span>
        <span className="bg-indigo-400 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-12 h-12 rounded-full absolute top-0 left-10 -z-10"></span>
      </button>
      {/* 8 */}
      <button className="text-3xl w-32 h-32 text-white rounded-full duration-300  bg-indigo-300 overflow-hidde relative z-10 group ">
        <span className="bg-indigo-600 group-hover:translate-x-1 group-hover:shadow-md group-hover:-translate-y-1 ease-in-out duration-300 delay-300 w-28 h-28 rounded-full absolute top-2 left-2 -z-10"></span>
        <span className="bg-indigo-500 group-hover:translate-x-2  group-hover:shadow-md group-hover:-translate-y-2 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute top-6 left-6 -z-10"></span>
        <span className="bg-indigo-400 group-hover:translate-x-3  group-hover:shadow-md group-hover:-translate-y-3 ease-in-out duration-300 delay-100 w-12 h-12 rounded-full absolute top-10 left-10 -z-10"></span>
        <span className=" group-hover:translate-x-3  group-hover:-translate-y-3 ease-in-out duration-300 delay-50  rounded-full absolute top-10 inset-0 -z-10">
          Hover
        </span>
      </button>
    </>
  );
};

export default Button1;
