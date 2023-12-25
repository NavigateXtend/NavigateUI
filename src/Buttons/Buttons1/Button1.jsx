import "../button.css";
const Button1 = () => {
  return (
    <>
      {/* 1 */}
      <button className="text-3xl w-32 h-16 bg-red-600 hover:scale-95 text-white duration-300">
        Hover
      </button>
      {/* 2 */}
      <button className="text-3xl w-32 h-16 hover:before:bg-black before:w-0 before:h-0 hover:before:h-full before:bottom-0 before:duration-500 before:-z-10 before:right-0 hover:before:w-full before:block before:absolute relative inline-block transform hover:text-white text-black  bg-transparent border-2 border-black duration-500 ">
        Hover
      </button>
       {/* 2 variant */}
      <button className="border-2 text-3xl w-32 h-16 border-black hover:before:bg-black before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500  hover:text-white transform origin-top  before:block">
        Hover
      </button>
      {/* 3 */}
      <button className="text-3xl w-32 h-16 bg-black text-white relative overflow-hidden group z-10 rounded-lg">
        <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-500 rotate-12 -inset-8 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-600 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10 text-white">
          Leave
        </span>
        Hover
      </button>
      {/* 4 */}
      <button className="text-3xl w-32 h-14 before:block before:absolute before:inset-0 before:bg-teal-500 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-cyan-700 hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-white">
        <span>Hover</span>
      </button>
      {/* 5 */}
      <button className="text-3xl w-32 h-32 text-white rounded-full duration-300  bg-indigo-300 overflow-hidden relative z-10 group ">
        <span className="bg-indigo-600 group-hover:translate-x-1 group-hover:shadow-md group-hover:-translate-y-1 ease-in-out duration-300 delay-300 w-28 h-28 rounded-full absolute top-2 left-2 -z-10"></span>
        <span className="bg-indigo-500 group-hover:translate-x-2  group-hover:shadow-md group-hover:-translate-y-2 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute top-6 left-6 -z-10"></span>
        <span className="bg-indigo-400 group-hover:translate-x-3  group-hover:shadow-md group-hover:-translate-y-3 ease-in-out duration-300 delay-100 w-12 h-12 rounded-full absolute top-10 left-10 -z-10"></span>
        <span className=" group-hover:translate-x-3  group-hover:-translate-y-3 ease-in-out duration-300 delay-50  rounded-full absolute top-10 inset-0 -z-10">
          Hover
        </span>
      </button>
      {/* 6 */}
      <button className="text-3xl relative w-32 h-16 bg-[#F05941] text-[#872341] border-y-4 duration-500 overflow-hidden border-[#872341] z-50 group">
        Hover
        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
          Leave
        </span>
        <span className="bg-[#872341] absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
        <span className="bg-[#872341] absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
        <span className="bg-[#872341] absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
        <span className="bg-[#872341] absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
      </button>
      {/* 7 */}
      <button className="text-3xl w-32 h-16 bg-[#5F8670] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
        <span className="absolute bg-[#FF9800] w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
        <span className="absolute bg-[#BE3144] w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
        Hover
      </button>
      {/* 8 */}
      <button className="text-3xl w-32 h-16 text-white bg-indigo-500 overflow-hidden relative z-10 group">
        Hover
        <span className="bg-indigo-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-indigo-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
        <span className="bg-indigo-400 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-12 h-12 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
      </button>
    </>
  );
};

export default Button1;
