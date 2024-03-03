import CodeBox from '@/Shared/CodeBox/CodeBox';

const Skeleton5 = () => {
    const codestr = `
               {/* Light Theme Skeleton */}
                <div className="max-w-[700px] w-full bg-white animate-pulse flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                    {/* User profile  Skeleton */}
                    <div className="w-full flex gap-2 items-center">
                        <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse"></div>
                        <div className="w-[80%]">
                            <div className="w-[30%] rounded-full bg-gray-300 h-[15px] mb-3"></div>
                            <div className="w-[40%] rounded-full bg-gray-300 h-[15px]"></div>
                        </div>
                    </div>
                    {/* user post skeleton */}
                    <div className="mt-8 w-full">
                        <div className="w-full rounded-full bg-gray-300 h-[15px] mb-3"></div>
                        <div className="w-[90%] rounded-full bg-gray-300 h-[15px]"></div>
                    </div>
                </div>

                {/* Dark Theme Skeleton */}
                <div className="max-w-[700px] w-full animate-pulse bg-[#657287] flex justify-center flex-col items-start mx-auto p-6 rounded-md shadow-xl">
                    {/* User profile  Skeleton */}
                    <div className="w-full flex gap-2 items-center">
                        <div className="w-16 h-16 rounded-full bg-[#9FADC2] animate-pulse"></div>
                        <div className="w-[80%]">
                            <div className="w-[30%] rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                            <div className="w-[40%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                        </div>
                    </div>
                    {/* user post skeleton */}
                    <div className="mt-8 w-full">
                        <div className="w-full rounded-full bg-[#9FADC2] h-[15px] mb-3"></div>
                        <div className="w-[90%] rounded-full bg-[#9FADC2] h-[15px]"></div>
                    </div>
                </div>
  `;

    return (
        <CodeBox codeStr={codestr}>
            <div className="flex w-full flex-col justify-center gap-7 ">
                {/* Light Theme Skeleton */}
                <div className="mx-auto flex w-full max-w-[700px] bg-white animate-pulse flex-col items-start justify-center rounded-md p-6 shadow-xl">
                    {/* User profile  Skeleton */}
                    <div className="flex w-full items-center gap-2">
                        <div className="h-16 w-16 animate-pulse rounded-full bg-gray-300"></div>
                        <div className="w-[80%]">
                            <div className="mb-3 h-[15px] w-[30%] rounded-full bg-gray-300"></div>
                            <div className="h-[15px] w-[40%] rounded-full bg-gray-300"></div>
                        </div>
                    </div>
                    {/* user post skeleton */}
                    <div className="mt-8 w-full">
                        <div className="mb-3 h-[15px] w-full rounded-full bg-gray-300"></div>
                        <div className="h-[15px] w-[90%] rounded-full bg-gray-300"></div>
                    </div>
                </div>
                {/* Dark Theme Skeleton */}
                <div className="mx-auto flex w-full max-w-[700px] animate-pulse flex-col items-start justify-center rounded-md bg-[#657287] p-6 shadow-xl">
                    {/* User profile  Skeleton */}
                    <div className="flex w-full items-center gap-2">
                        <div className="h-16 w-16 animate-pulse rounded-full bg-[#9FADC2]"></div>
                        <div className="w-[80%]">
                            <div className="mb-3 h-[15px] w-[30%] rounded-full bg-[#9FADC2]"></div>
                            <div className="h-[15px] w-[40%] rounded-full bg-[#9FADC2]"></div>
                        </div>
                    </div>
                    {/* user post skeleton */}
                    <div className="mt-8 w-full">
                        <div className="mb-3 h-[15px] w-full rounded-full bg-[#9FADC2]"></div>
                        <div className="h-[15px] w-[90%] rounded-full bg-[#9FADC2]"></div>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Skeleton5;
