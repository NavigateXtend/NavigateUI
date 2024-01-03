import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Button2 = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-start">
      <CodeBox
        codeStr={`
<button type="button" className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Button</button>
<button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>

`}
      >
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <div className="space-y-3 grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center items-center">
            {/* button 1 */}
            <button
              type="button"
              className="py-2 w-40 h-16 px-6 mb-4 mt-6 text-sky-700 shadow-lg before:block before:-left-1 before:-top-1 before:bg-sky-700 before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-sky-700 after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
            >
              Button
            </button>
            {/* 2 */}
            <button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>
          </div>
        </div>
      </CodeBox>
    </div>
  );
};

export default Button2;
