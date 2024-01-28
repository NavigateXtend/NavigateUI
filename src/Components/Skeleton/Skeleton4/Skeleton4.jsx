
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Skeleton4 = () => {
    const codeStr = `
                {/* Light theme skeleton */}
                <div className=" p-6 rounded-md shadow-md mx-auto max-w-fit">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                        {/* product heading skeleton */}
                        <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                    </div>
                </div>
                {/* Dark theme skeleton */}

                <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[290px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Heading Skeleton */}
                        <div className="w-[220px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                    </div>
                </div>
  `;

    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex gap-4 justify-center lg:flex-row flex-col">
                {/* Light theme skeleton */}
                <div className=" p-6 rounded-md shadow-md mx-auto max-w-fit">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-gray-300 mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[290px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                        {/* product heading skeleton */}
                        <div className="w-[220px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[200px] h-4 rounded-lg bg-gray-300 mb-4"></div>
                    </div>
                </div>
                {/* Dark theme skeleton */}

                <div className="p-6 rounded-md shadow-md mx-auto max-w-fit bg-[#657287] ">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-52 md:h-52 h-48 rounded-lg bg-[#9FADC2] mb-6"></div>
                        {/* Product Title Skeleton */}
                        <div className="w-[290px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Heading Skeleton */}
                        <div className="w-[220px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                        {/* Product Description Skeleton */}
                        <div className="w-[200px] h-4 rounded-lg bg-[#9FADC2] mb-4"></div>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default Skeleton4;
