import CodeBox from "../../../Shared/CodeBox/CodeBox";

const Card4 = () => {
  const codeStr = `const Card4 = () => {
  return (
    <div className="px-6 py-6 relative max-w-[350px] text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
      <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
      <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
      <div className="space-y-6 z-20 relative">
        <h1 className="text-2xl font-bold">Cookies.</h1>
        <p>By using this website you automatically accept that we use cookies.<a href="#" className="border-b">What for?</a></p>
        <button className="bg-[#1b8efa] py-2 px-6">Understood</button>
      </div>
    </div>
  );
};
export default Card4;
`;
  return (
    <CodeBox codeStr={codeStr}>
      <div className="px-6 py-6 relative max-w-[350px] mx-auto text-white shadow bg-gradient-to-r overflow-hidden from-[#3b99f1] via-[#4FB5FF] to-[#4FB5FF] group">
        <span className="h-[200px] duration-300 group-hover:blur-sm group-hover:top-[-30%] absolute rounded-full w-[200px] bg-gradient-to-r from-[#0064c2] top-[30%] left-[-40%] z-10 via-[#49aef7] to-[#c7e0f1]"></span>
        <span className="h-[200px] absolute rounded-full w-[200px] bg-gradient-to-tr from-[#0064c2] top-[-40%] right-[-40%] z-10 via-[#4FB5FF] duration-300 group-hover:blur-sm group-hover:top-[40%] to-[#4FB5FF]"></span>
        <div className="space-y-6 z-20 relative">
          <h1 className="text-2xl font-bold">Cookies.</h1>
          <p>
            By using this website you automatically accept that we use cookies.
            <a href="#" className="border-b">
              What for?
            </a>
          </p>
          <button className="bg-[#1b8efa] py-2 px-6">Understood</button>
        </div>
      </div>
    </CodeBox>
  );
};

export default Card4;
