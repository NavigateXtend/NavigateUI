import CodeBox from "../../../Shared/CodeBox/CodeBox";

const codeStr = `const Card8 = () => {
    return (
      <div className="max-w-[300px] md:w-[350px] my-20 p-6 md:p-8 shadow-md rounded-2xl space-y-8"> 
      {/* profile image & bg  */}
        <div className="relative">
          <img className="w-full h-full rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt=""/>
          <img className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white" src="https://source.unsplash.com/100x100/?men" alt=""/>
        </div>
        {/* profile name & role */}
        <div className="pt-8 text-center space-y-1">
          <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
          <p className="text-gray-400 text-sm">Product Designer</p>
        </div>
        {/* post , followers following  */}
        <div className="flex flex-wrap px-4  md:px-8 justify-between items-center">
            <div className="text-center">
                <h5 className="font-medium text-xl">17</h5>
                <p className="text-sm  text-gray-400">Post</p>
            </div>
            <div className="text-center">
                <h5 className="font-medium text-xl">9.7k</h5>
                <p className="text-sm  text-gray-400">Followers</p>
            </div>
            <div className="text-center">
                <h5 className="font-medium text-xl">217</h5>
                <p className="text-sm  text-gray-400">Following</p>
            </div>
        </div>
        <div className="flex justify-center">
            <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">
                Follow
            </button>
        </div>

      </div>
    );
};
export default Card8;
`;
const Card8 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="max-w-[350px] md:max-w-[350px] mx-auto my-20 px-6 py-8 shadow-md rounded-2xl space-y-8">
                {/* profile image & bg  */}
                <div className="relative ">
                    <img className="w-[350px] h-[150px] rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="" />
                    <img
                        className="w-[100px] h-[100px] absolute -bottom-12 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border-4 border-white"
                        src="https://source.unsplash.com/100x100/?men"
                        alt=""
                    />
                </div>
                {/* profile name & role */}
                <div className="pt-8 text-center space-y-1">
                    <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
                    <p className="text-gray-400 text-sm">Product Designer</p>
                </div>
                {/* post , followers following  */}
                <div className="flex flex-wrap px-4   justify-between items-center">
                    <div className="text-center">
                        <h5 className="font-medium text-xl">17</h5>
                        <p className="text-sm  text-gray-400">Post</p>
                    </div>
                    <div className="text-center">
                        <h5 className="font-medium text-xl">9.7k</h5>
                        <p className="text-sm  text-gray-400">Followers</p>
                    </div>
                    <div className="text-center">
                        <h5 className="font-medium text-xl">217</h5>
                        <p className="text-sm  text-gray-400">Following</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">
                        Follow
                    </button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card8;