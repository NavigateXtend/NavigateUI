import CP from '@/ui/CP';

const Skeleton4 = () => {
  const code = `
                {/* Light theme skeleton */}
                <div className=" p-6 rounded-md bg-white shadow-md mx-auto max-w-fit">
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
    <CP code={code}>
      <div className="flex flex-col  justify-center gap-4 lg:flex-row">
        {/* Light theme skeleton */}
        <div className=" mx-auto max-w-fit rounded-md bg-white p-6 shadow-md">
          <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="mb-6 h-48 w-[300px] rounded-lg bg-gray-300 md:h-52 lg:h-52"></div>
            {/* Product Title Skeleton */}
            <div className="mb-4 h-4 w-[290px] rounded-lg bg-gray-300"></div>
            {/* product heading skeleton */}
            <div className="mb-4 h-4 w-[220px] rounded-lg bg-gray-300"></div>
            {/* Product Description Skeleton */}
            <div className="mb-4 h-4 w-[200px] rounded-lg bg-gray-300"></div>
          </div>
        </div>
        {/* Dark theme skeleton */}

        <div className="mx-auto max-w-fit rounded-md bg-[#657287] p-6 shadow-md ">
          <div className="animate-pulse">
            {/* Product Image Skeleton */}
            <div className="mb-6 h-48 w-[300px] rounded-lg bg-[#9FADC2] md:h-52 lg:h-52"></div>
            {/* Product Title Skeleton */}
            <div className="mb-4 h-4 w-[290px] rounded-lg bg-[#9FADC2]"></div>
            {/* Product Heading Skeleton */}
            <div className="mb-4 h-4 w-[220px] rounded-lg bg-[#9FADC2]"></div>
            {/* Product Description Skeleton */}
            <div className="mb-4 h-4 w-[200px] rounded-lg bg-[#9FADC2]"></div>
          </div>
        </div>
      </div>
    </CP>
  );
};

export default Skeleton4;
