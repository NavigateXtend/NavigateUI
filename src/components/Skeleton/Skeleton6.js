import CP from '@/ui/CP';

const code = `
{/* Profile card skeleton with avatar*/}
<div className="max-w-[450px] w-full animate-pulse bg-white flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
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
<div className="max-w-[450px] w-full animate-pulse bg-white flex justify-between  items-center gap-6 mx-auto p-6 rounded-md shadow-xl ">
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
    <CP code={code}>
      <div className="flex w-full flex-wrap justify-center gap-7 ">
        {/* Profile card skeleton with avatar*/}
        <div className="mx-auto flex w-full max-w-[450px] animate-pulse items-center  justify-between gap-6 rounded-md bg-white p-6 shadow-xl ">
          {/* user post skeleton */}
          <div className=" flex ">
            <div className="h-32 w-32 animate-pulse rounded-lg bg-gray-300"></div>
          </div>
          {/* User profile  Skeleton */}
          <div className="mt-8 flex w-full  flex-col justify-center">
            <div className="mb-5 h-7 w-[60%] rounded-lg bg-gray-300"></div>
            <div className="mb-3 h-5 w-[100%] rounded-lg bg-gray-300"></div>
            <div className="mb-3 h-[13px] w-[40%] rounded-lg bg-gray-300"></div>
            <div className="h-5 w-[80%] rounded-lg bg-gray-300"></div>
          </div>
        </div>
        {/* Profile card skeleton with rounded avatar*/}
        <div className="mx-auto flex w-full max-w-[450px] animate-pulse items-center  justify-between gap-6 rounded-md bg-white p-6 shadow-xl ">
          {/* user post skeleton */}
          <div className="mt-8 flex w-full flex-col items-start justify-end">
            <div className="mb-5 h-7 w-[60%] rounded-lg bg-gray-300"></div>
            <div className="mb-3 h-5 w-[100%] rounded-lg bg-gray-300"></div>
            <div className="mb-3 h-[13px] w-[40%] rounded-lg bg-gray-300"></div>
            <div className="h-5 w-[80%] rounded-lg bg-gray-300"></div>
          </div>
          {/* User profile  Skeleton */}
          <div className=" flex items-end justify-end gap-2">
            <div className="h-32 w-32 animate-pulse rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </CP>
  );
};

export default Skeleton6;
