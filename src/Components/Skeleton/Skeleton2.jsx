import CP from '@/ui/CP';

const Skeleton2 = () => {
  const code = `
    <div className="w-[400px] md:w-[350px]  bg-slate-300/20 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md animate-pulse">
        {/* Card Image Skeleton */}
        <div className="w-full h-[190px] bg-gray-400 rounded-2xl"></div> 
        {/* Card Heading and Rating Skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-2/3 rounded bg-gray-300"></div>
          <div className="flex gap-1">
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
          </div>
        </div>
        {/* Price and Add to Cart Button Skeleton */}
        <div className="mt-5 flex justify-between items-center font-medium">
          <div className="h-6 w-1/4 rounded bg-gray-300"></div>
          <div className="h-10 w-24  bg-gray-700 rounded-lg"></div>
        </div>
      </div>    
    `;
  return (
    <CP code={code}>
      <div className="mx-auto max-w-[400px] animate-pulse space-y-6 rounded-2xl bg-slate-300/20 bg-white px-6 py-4 shadow-md md:w-[350px]">
        {/* Card Image Skeleton */}
        <div className="h-[190px] w-full rounded-2xl bg-gray-400"></div>

        {/* Card Heading and Rating Skeleton */}
        <div className="space-y-2">
          <div className="h-6 w-2/3 rounded bg-gray-300"></div>
          <div className="flex gap-1">
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
            <div className="h-4 w-4 rounded bg-gray-300"></div>
          </div>
        </div>

        {/* Price and Add to Cart Button Skeleton */}
        <div className="mt-5 flex items-center justify-between font-medium">
          <div className="h-6 w-1/4 rounded bg-gray-300"></div>
          <div className="h-10 w-24  rounded-lg bg-gray-700"></div>
        </div>
      </div>
    </CP>
  );
};

export default Skeleton2;
