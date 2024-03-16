import CP from '@/ui/CP';

const Hero1 = () => {
  const code = `
   <div className="min-h-[600px] sm:px-2 px-3 mx-3 max-h-[800px] py-20 rounded-t-2xl bg-[#2A3342]">
      <div className="flex justify-center flex-col">
      {/* Beautiful announcement line */}
        <div className="bg-[#1F2937] mx-auto max-w-[250px] pr-3 pl-1 py-[6px]  rounded-full gap-2 flex  items-center text-white">
          <span className="bg-[#22C55E] sm:px-3 px-2 sm:py-1 py-[3px] sm:text-base text-sm rounded-full">
            New
          </span>
          Smc product added
        </div>
        {/* Banner Content */}
        <div className="mt-10 ">
          <h2 className="text-white lg:text-5xl md:text-4xl sm:text-3xl text-2xl max-w-[600px] mx-auto text-center font-extrabold ">
            A small business is only as good as its tools.
          </h2>
          <p className="lg:text-xl md:text-lg text-[#8896AB] mt-5 max-w-[600px] text-center mx-auto text-sm">
            We’re different. Flex is the only saas business platform that lets
            you run your business on one platform, seamlessly across all digital
            channels.
          </p>
          {/* Banner action  */}
          <div className="mt-5 flex md:flex-row max-w-[450px] mx-auto justify-center gap-2 flex-col">
             <div className="md:ml-auto md:mr-0 lg:w-[55%] relative">
             <svg className="absolute mt-[10px] ml-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z"/></svg>
                 <input placeholder="Enter your email" className="pr-3 pl-8 rounded-lg w-full  py-3" type="text" name="" id="" />
             </div>
             <div className=" md:mr-auto md:ml-0 lg:w-[45%] ">
                   <button className="bg-[#22C55E] sm:py-3 py-2 sm:text-base text-sm px-18 text-white rounded-lg h-full w-full ">Get Early Acess</button>
             </div>
          </div>
        </div>
      </div>
    </div>  
   
   `;

  return (
    <CP code={code}>
      <div className="mx-3 max-h-[800px] min-h-[600px] rounded-t-2xl bg-[#2A3342] px-3 py-20 sm:px-2">
        <div className="flex flex-col justify-center">
          {/* Beautiful announcement line */}
          <div className="mx-auto flex max-w-[250px] items-center gap-2 rounded-full  bg-[#1F2937] py-[6px] pl-1  pr-3 text-white">
            <span className="rounded-full bg-[#22C55E] px-2 py-[3px] text-sm sm:px-3 sm:py-1 sm:text-base">New</span>
            Smc product added
          </div>
          {/* Banner Content */}
          <div className="mt-10 ">
            <h2 className="mx-auto max-w-[600px] text-center text-2xl font-extrabold text-white sm:text-3xl md:text-4xl lg:text-5xl ">A small business is only as good as its tools.</h2>
            <p className="mx-auto mt-5 max-w-[600px] text-center text-sm text-[#8896AB] md:text-lg lg:text-xl">
              We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.
            </p>
            <div className="mx-auto mt-5 flex max-w-[450px] flex-col justify-center gap-2 md:flex-row">
              <div className="relative md:ml-auto md:mr-0 lg:w-[55%]">
                <svg className="absolute ml-2 mt-[10px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 3.38 8.06 7.75 8.94.57.11.78-.25.78-.55v-3.06c0-.31-.22-.59-.53-.64C5.61 16.31 4 14.29 4 12c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6c-.34 0-.67-.04-1-.09-.31-.05-.54-.33-.54-.64v-3.07c0-.3-.21-.66.57-.59 3.43.65 6.18 3.25 6.18 6.49v.5c0 .41.34.75.75.75s.75-.34.75-.75v-.5c0-4.57-3.61-8.25-8-8.75z" />
                </svg>
                <input placeholder="Enter your email" className="w-full rounded-lg py-3 pl-8  pr-3" type="text" name="" id="" />
              </div>
              <div className=" md:ml-0 md:mr-auto lg:w-[45%] ">
                <button className="px-18 h-full w-full rounded-lg bg-[#22C55E] py-2 text-sm text-white sm:py-3 sm:text-base ">Get Early Acess</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CP>
  );
};

export default Hero1;
