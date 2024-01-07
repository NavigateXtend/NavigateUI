import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Card9 = () => {
    const codeStr = `
    <div className='lg:w-[310px]  md:w-[270px] w-[240px] '>
    {/* Card Image */}
    <div className='lg:w-[310px] lg:h-[200px] md:h-[180px] h-[160px] md:w-[270px] w-[240px] bg-gray-400  rounded-3xl '>
        <img className='w-full h-full bg-gray-400 rounded-3xl' src={'https://source.unsplash.com/201x201/?furniture'} alt="" />
    </div>
    {/* Card Heading */}
    <div className='mt-3'>
            <h2 className='md:text-xl sm:text-lg text-slate-900 font-bold ml-1'>Stylish chair</h2>
    </div>
    {/* Adjust the for the desire amount rating */}
    <div className='flex gap-1 mt-2'>
            {[...Array(5)].map((_,index)=>(
               <svg key={index} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0095FF" stroke="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            ))}
    </div>
    {/* Price and action button */}
    <div className='flex justify-between items-center mt-5'>
        <h2 className='lg:text-xl sm:text-lg text-base font-bold text-gray-900'>$20.00</h2>
        <button className='md:text-base sm:text-sm text-[12px] font-semibold bg-[#0e82c5] text-white p-2 rounded-full'>Add to</button>
    </div>
 </div>    
    `;

    return (
        <CodeBox codeStr={codeStr}>
            <div className="max-[350px] md:w-[350px] bg-slate-300/30 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
                <img className="w-full h-full bg-gray-400 rounded-2xl" src={'https://source.unsplash.com/350x201/?furniture'} alt="" />
                <div className="space-y-2">
                    <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">Stylish chair</h2>
                    {/* rating  */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#1E293B"
                                stroke="none"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                            </svg>
                        ))}
                    </div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <h2 className="md:text-xl text-gray-800">$20.00</h2>
                    <button className="bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] ">Add to Cart</button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card9;
