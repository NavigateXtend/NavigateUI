import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Banner2 = () => {
  const codeStr = `export const Banner2 = () => {
  return (
       <div className="bg-[url('https://source.unsplash.com/random/?tech')] bg-cover bg-fixed max-w-7xl h-96 md:h-[500px] lg:h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
        <div className="absolute z-20 flex justify-center items-center inset-0 mx-auto">
          <div className="w-1/2">
            <h1 className="text-xl lg:text-3xl mb-3">Escape to Serenity</h1>
            <p className="text-sm lg:text-lg w-3/4 opacity-80">A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement, surrounded by the wonders of nature.</p>
            <button className="bg-white text-black p-2 mt-5 font-bold rounded-lg">Show Now</button>
          </div>
          <div className="relative px-3 w-[265px] h-[265px] lg:w-[370px] lg:h-[370px] rounded-lg before:absolute lg:before:w-16 before:h-16 before:border-8 before:rounded-lg before:border-dashed before:animate-[spin_8s_linear_infinite] before:-left-8 before:-top-8 after:absolute lg:after:w-16 after:h-16 after:border-8 after:rounded-lg after:border-dashed after:animate-[spin_8s_linear_infinite] after:-right-8 after:-bottom-8 group">
            <img src="https://source.unsplash.com/180x180/?techs" alt="img" className="rounded-lg absolute top-0 left-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"/>
            <img src="https://source.unsplash.com/180x180/?laptop" alt="img" className="rounded-lg absolute right-0 bottom-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"/>
            <img src="https://source.unsplash.com/180x180/?mobile" alt="img" className="rounded-lg absolute left-0 bottom-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"/>
            <img src="https://source.unsplash.com/180x180/?electronics" alt="img" className="rounded-lg absolute right-0 top-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"/>
          </div>
        </div>
      </div>
  );
};
`;
  return (
    <CodeBox codeStr={codeStr}>
      <div className="bg-[url('https://source.unsplash.com/random/?tech')] bg-cover bg-fixed max-w-7xl h-96 md:h-[500px] lg:h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
        <div className="absolute z-20 flex justify-center items-center inset-0 mx-auto">
          <div className="w-1/2">
            <h1 className="text-xl lg:text-3xl mb-3">Escape to Serenity</h1>
            <p className="text-sm lg:text-lg w-3/4 opacity-80">
              A Symphony of Tranquility. Experience the perfect blend of
              relaxation and excitement, surrounded by the wonders of nature.
            </p>
            <button className="bg-white text-black p-2 mt-5 font-bold rounded-lg">
              Show Now
            </button>
          </div>
          <div className="relative px-3 w-[265px] h-[265px] lg:w-[370px] lg:h-[370px] rounded-lg before:absolute lg:before:w-16 before:h-16 before:border-8 before:rounded-lg before:border-dashed before:animate-[spin_8s_linear_infinite] before:-left-8 before:-top-8 after:absolute lg:after:w-16 after:h-16 after:border-8 after:rounded-lg after:border-dashed after:animate-[spin_8s_linear_infinite] after:-right-8 after:-bottom-8 group">
            <img
              src="https://source.unsplash.com/180x180/?techs"
              alt="img"
              className="rounded-lg absolute top-0 left-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/180x180/?laptop"
              alt="img"
              className="rounded-lg absolute right-0 bottom-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/180x180/?mobile"
              alt="img"
              className="rounded-lg absolute left-0 bottom-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"
            />
            <img
              src="https://source.unsplash.com/180x180/?electronics"
              alt="img"
              className="rounded-lg absolute right-0 top-0 z-20 bg-black/30 w-32 h-32 lg:w-[180px] lg:h-[180px] group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
    </CodeBox>
  );
};

export default Banner2;
