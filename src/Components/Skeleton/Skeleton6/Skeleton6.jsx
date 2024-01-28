import CodeBox from '../../../Shared/CodeBox/CodeBox';
const codestr = `
{/* Profile card skeleton with avatar*/}
<div className="max-w-[450px] w-full animate-pulse flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
    {/* user post skeleton */}
    <div className=" flex ">
        <div className="w-32 h-32 rounded-lg bg-gray-300 animate-pulse"></div>
    </div>
    {/* User profile  Skeleton */}
    <div className="mt-8 w-full flex  flex-col justify-center">
        <div className="w-[60%] rounded-lg bg-gray-300 h-7 mb-5"></div>
        <div className="w-[100%] rounded-lg bg-gray-300 h-5 mb-3"></div>
        <div className="w-[40%] rounded-lg bg-gray-300 h-[13px] mb-3"></div>
        <div className="w-[80%] rounded-lg bg-gray-300 h-5"></div>
    </div>
</div>

{/* Profile card skeleton with rounded avatar*/}
<div className="max-w-[450px] w-full animate-pulse flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
    {/* user post skeleton */}
    <div className="mt-8 w-full flex justify-end flex-col items-start">
        <div className="w-[60%] rounded-lg bg-gray-300 h-7 mb-5"></div>
        <div className="w-[100%] rounded-lg bg-gray-300 h-5 mb-3"></div>
        <div className="w-[40%] rounded-lg bg-gray-300 h-[13px] mb-3"></div>
        <div className="w-[80%] rounded-lg bg-gray-300 h-5"></div>
    </div>
    {/* User profile  Skeleton */}
    <div className=" flex gap-2 items-end justify-end">
        <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
    </div>
</div>

`;
const Skeleton6 = () => {

    return (
        <CodeBox codeStr={codestr}>
            <div className="flex gap-7 justify-center w-full flex-wrap ">
                
                {/* Profile card skeleton with avatar*/}
                <div className="max-w-[450px] w-full animate-pulse flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
                    {/* user post skeleton */}
                    <div className=" flex ">
                        <div className="w-32 h-32 rounded-lg bg-gray-300 animate-pulse"></div>
                    </div>
                    {/* User profile  Skeleton */}
                    <div className="mt-8 w-full flex  flex-col justify-center">
                        <div className="w-[60%] rounded-lg bg-gray-300 h-7 mb-5"></div>
                        <div className="w-[100%] rounded-lg bg-gray-300 h-5 mb-3"></div>
                        <div className="w-[40%] rounded-lg bg-gray-300 h-[13px] mb-3"></div>
                        <div className="w-[80%] rounded-lg bg-gray-300 h-5"></div>
                    </div>
                </div>
                {/* Profile card skeleton with rounded avatar*/}
                <div className="max-w-[450px] w-full animate-pulse flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
                    {/* user post skeleton */}
                    <div className="mt-8 w-full flex justify-end flex-col items-start">
                        <div className="w-[60%] rounded-lg bg-gray-300 h-7 mb-5"></div>
                        <div className="w-[100%] rounded-lg bg-gray-300 h-5 mb-3"></div>
                        <div className="w-[40%] rounded-lg bg-gray-300 h-[13px] mb-3"></div>
                        <div className="w-[80%] rounded-lg bg-gray-300 h-5"></div>
                    </div>
                    {/* User profile  Skeleton */}
                    <div className=" flex gap-2 items-end justify-end">
                        <div className="w-32 h-32 rounded-full bg-gray-300 animate-pulse"></div>
                    </div>
                </div>


            </div>
        </CodeBox>
    );
};

export default Skeleton6;
