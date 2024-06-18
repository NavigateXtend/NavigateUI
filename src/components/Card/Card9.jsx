import CP from '@/ui/CP';
import Image from 'next/image';

const code = `const Card9 = () => {
    return (
            <div className="max-[350px] md:w-[350px] bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
            {/* Card Image */}
                <img className="w-[350px] h-[190px] bg-gray-400 rounded-2xl" src={'https://source.unsplash.com/350x200/?furniture'} alt="card navigate ui" />
                {/* Card Heading */}
                <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Stylish chair</h2>
                    {/* rating  */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1E293B" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                </div>
                {/* Price and action button */}
                <div className="mt-5 flex justify-between items-center font-medium">
                    <h2 className="md:text-xl text-gray-800">$20.00</h2>
                    <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">Add to Cart</button>
                </div>
            </div>
    );
};
export default Card9;
`;

export const Card9 = () => {
  return (
    <CP code={code}>
      <div className="max-[350px] mx-auto space-y-6 rounded-2xl bg-slate-100/70 px-6 py-4 shadow-md md:w-[350px]">
        {/* Card Image */}
        <Image width={350} height={190} className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={'https://source.unsplash.com/350x190/?furniture'} alt="card navigate ui" />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl ">Stylish chair</h2>
          {/* rating  */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1E293B" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex items-center justify-between">
          <h2 className="font-medium text-gray-700 md:text-xl">$20.00</h2>
          <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">Add to Cart</button>
        </div>
      </div>
    </CP>
  );
};

export default Card9;
