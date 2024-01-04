import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button2 = () => {
  return (
    <CodeBox
      codeStr={`
<button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Button</button>
<button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>
<button className="bg-sky-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden group"><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['N'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">X</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">P</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['F'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">L</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['Y'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">O</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">R</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span></button>

`}
    >
      <div className="flex flex-wrap gap-4 justify-evenly items-center">
        {/* button 16,17,18*/}
        <button className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">
          Button
        </button>
        <button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>
        <button className="bg-sky-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden group">
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">
            E
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['N'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">
            X
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">
            P
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['F'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">
            L
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['Y'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">
            O
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">
            R
          </span>
          <span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">
            E
          </span>
        </button>
      </div>
    </CodeBox>
  );
};

export default Button2;
