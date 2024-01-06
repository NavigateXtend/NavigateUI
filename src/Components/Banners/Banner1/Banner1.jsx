import CodeBox from "../../../Shared/CodeBox/CodeBox";
const Banner1 = () => {
  const codeStr = `export const Banner1 = () => {
  return (
    <div className="bg-[url('https://source.unsplash.com/random/?nature')] bg-cover bg-fixed max-w-7xl h-96 md:h-[500px] lg:h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
      <div className="absolute z-20 flex justify-around items-center inset-0 mx-auto">
        <div className="md:w-1/2 px-2 text-center md:text-left">
          <h1 className="text-xl lg:text-3xl mb-3">Escape to Serenity</h1>
          <p className="text-sm lg:text-lg">A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement, surrounded by the wonders of nature.</p>
        </div>
        <img src="https://source.unsplash.com/250x250/?nature" alt="img" className="rounded-s-full hidden md:block md:w-48 md:h-48 lg:w-[250px] lg:h-[250px] rounded-tr-full bg-black/30"/>
      </div>
    </div>
  );
};
`;
  return (
    <CodeBox codeStr={codeStr}>
      <div className="bg-[url('https://source.unsplash.com/random/?nature')] bg-cover bg-fixed max-w-7xl h-96 md:h-[500px] lg:h-[700px] mx-6 before:inset-0 before:bg-black/70 before:absolute before:z-10 relative text-white">
        <div className="absolute z-20 flex justify-around items-center inset-0 mx-auto">
          <div className="md:w-1/2 px-2 text-center md:text-left">
            <h1 className="text-xl lg:text-3xl mb-3">Escape to Serenity</h1>
            <p className="text-sm lg:text-lg">
              A Symphony of Tranquility. Experience the perfect blend of
              relaxation and excitement, surrounded by the wonders of nature.
            </p>
          </div>
          <img
            src="https://source.unsplash.com/250x250/?nature"
            alt="img"
            className="rounded-s-full hidden md:block md:w-48 md:h-48 lg:w-[250px] lg:h-[250px] rounded-tr-full bg-black/30"
          />
        </div>
      </div>
    </CodeBox>
  );
};

export default Banner1;
