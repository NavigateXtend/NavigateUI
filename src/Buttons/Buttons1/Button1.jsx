import "../button.css";
const Button1 = () => {
  return (
    <>
      {/* 1 */}
      <button className="bg-red-600 hover:scale-95  text-white duration-300">
        Hover
      </button>
      {/* 2 */}
      <button className="hover:bg-white hover:text-black text-white hover:scale-95 bg-transparent border-2 hover:border-transparent border-white duration-300">
        Hover
      </button>
      {/* 3 */}
      <button className="bg-white text-black relative overflow-hidden group z-10 rounded-lg">
        <span className="absolute bg-white rotate-12 -inset-44 group-hover:duration-500 duration-1000 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-500 rotate-12 -inset-44 group-hover:duration-1000 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
        <span className="absolute bg-teal-600 rotate-12 -inset-44 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
        <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out text-center z-10">
          Leave
        </span>
        Hover
      </button>
      {/* 4 */}
      <button className=" before:block before:absolute before:inset-0 before:bg-orange-300 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-white hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-black">
        <span className="relative">Hover</span>
      </button>
    </>
  );
};

export default Button1;
