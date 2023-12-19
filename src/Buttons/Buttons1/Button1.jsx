import "../button.css";
const Button1 = () => {
  return (
    <>
      <button className="bg-red-600 hover:scale-95  text-white duration-300">
        Hover
      </button>
      <button className="hover:bg-black hover:text-white hover:scale-95 bg-transparent border-2 hover:border-transparent border-black duration-300">
        Hover
      </button>
      <button className="bg-teal-600 hover:text-white scale-95 relative overflow-hidden group">
        <span className="absolute bg-red-500 w-2/3 ease-linear inset-0 -left-full group-hover:left-0 duration-300 -z-10"></span>
        <span className="absolute bg-gray-500 ml-auto w-1/3 ease-linear inset-0 -right-full group-hover:right-0 duration-300 -z-10"></span>
        Hover
      </button>
    </>
  );
};

export default Button1;
