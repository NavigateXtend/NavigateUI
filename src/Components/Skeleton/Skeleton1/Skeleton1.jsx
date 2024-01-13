import CodeBox from "../../../Shared/CodeBox/CodeBox";


const Skeleton1 = () => {
 
  const codestr = `
    {/* small avatar */}
    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
    {/* large avatar */}
    <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
    {/* Extra large avatar */}
    <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
  `

  return (
    <CodeBox codeStr={codestr}>
 <div className="flex gap-5 items-center justify-center flex-wrap ">
      {/* small avatar */}
     <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
     {/* large avatar */}
    <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse"></div>
    {/* Extra large avatar */}
    <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
    </div>
    </CodeBox>
   

);
};

export default Skeleton1;