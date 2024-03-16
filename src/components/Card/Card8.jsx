import Image from 'next/image';
import CP from '@/ui/CP';

const code = `const Card8 = () => {
    return (
      <div className="max-w-[300px] md:w-[350px] bg-white my-20 p-6 md:p-8 shadow-md rounded-2xl space-y-8"> 
      {/* profile image & bg  */}
        <div className="relative">
          <img className="w-full h-full rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="card navigate ui"/>
          <img className="w-[100px] h-[100px] absolute -bottom-10 left-1/2 -translate-x-1/2 rounded-full bg-gray-400 border border-white" src="https://source.unsplash.com/100x100/?men" alt="card navigate ui"/>
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
            <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">
                    View Profile
                </button>
        </div>
      </div>
    );
};
export default Card8;
`;
const Card8 = () => {
  return (
    <CP code={code}>
      <div className="mx-auto my-20 max-w-[350px] space-y-8 rounded-2xl bg-white px-6 py-8 shadow-md md:max-w-[350px]">
        {/* profile image & bg  */}
        <div className="relative ">
          <Image width={350} height={150} className="h-[150px] w-[350px] rounded-2xl bg-gray-500" src="https://source.unsplash.com/350x150/?northern lights" alt="card navigate ui" />
          <Image
            width={100}
            height={100}
            className="absolute -bottom-12 left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full border-4 border-white bg-gray-400"
            src="https://source.unsplash.com/100x100/?men"
            alt="card navigate ui"
          />
        </div>
        {/* profile name & role */}
        <div className="space-y-1 pt-8 text-center">
          <h1 className="text-xl md:text-2xl">Shiyam Sarker</h1>
          <p className="text-sm text-gray-400">Product Designer</p>
        </div>
        {/* post , followers following  */}
        <div className="flex flex-wrap items-center   justify-between px-4">
          <div className="text-center">
            <h5 className="text-xl font-medium">17</h5>
            <p className="text-sm  text-gray-400">Post</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-medium">9.7k</h5>
            <p className="text-sm  text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <h5 className="text-xl font-medium">217</h5>
            <p className="text-sm  text-gray-400">Following</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="t w-[80%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500   hover:scale-95 hover:bg-[#0095FF] hover:text-white hover:shadow-xl">
            Follow
          </button>
        </div>
      </div>
    </CP>
  );
};

export default Card8;
