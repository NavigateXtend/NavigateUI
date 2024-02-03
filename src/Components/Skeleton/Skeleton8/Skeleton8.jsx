import React from 'react';
import CodeBox from '../../../Shared/CodeBox/CodeBox';

const Skeleton8 = () => {

   const codestr =`
{/* Light Theme */}
<div className=" p-6 rounded-md shadow-md mx-auto max-w-fit">
   <div className="animate-pulse">
       {/* Product Image Skeleton */}
       <div className="w-[300px] lg:h-44 md:h-44 h-44 rounded-lg bg-gray-300 mb-4"></div>
       <div className='flex gap-2 items-start w-full'> 
       {/* Author picture  */}
         <div className='w-10 h-10 rounded-full bg-gray-300'></div>
       {/* Product Title Skeleton */}
         <div className=''>
         <div className="w-[230px] h-5 rounded bg-gray-300 mb-4"></div>
         <div className="w-[200px] h-4 rounded bg-gray-300 mb-4"></div>
         </div>
       </div>
   </div>
</div>  

{/* Dark Theme */}
<div className=" p-6 rounded-md shadow-md mx-auto bg-[#657287] max-w-fit">
   <div className="animate-pulse">
       {/* Product Image Skeleton */}
       <div className="w-[300px] lg:h-44 md:h-44 h-44 rounded-lg bg-[#9FADC2] mb-4"></div>
       <div className='flex gap-2 items-start w-full'> 
       {/* Author picture  */}
         <div className='w-10 h-10 rounded-full  bg-[#9FADC2]'></div>
       {/* Product Title Skeleton */}
       <div className=''>
         <div className="w-[230px] h-5 rounded  bg-[#9FADC2] mb-4"></div>
         <div className="w-[200px] h-4 rounded  bg-[#9FADC2] mb-4"></div>
       </div>
       </div>
   </div>
</div>

   `

    return (
        <CodeBox codeStr={codestr}>
        <div className='flex justify-center gap-20 flex-wrap'>
            {/* Light Theme */}
              <div className=" p-6 rounded-md shadow-md mx-auto max-w-fit">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-44 md:h-44 h-44 rounded-lg bg-gray-300 mb-4"></div>
    
                        <div className='flex gap-2 items-start w-full'> 
                        {/* Author picture  */}
                          <div className='w-10 h-10 rounded-full bg-gray-300'>
                          </div>
                        {/* Product Title Skeleton */}
                          <div className=''>
                          <div className="w-[230px] h-5 rounded bg-gray-300 mb-4"></div>
                          <div className="w-[200px] h-4 rounded bg-gray-300 mb-4"></div>
                          </div>
                        </div>
                    </div>
                </div>

                       {/* Dark Theme */}
                 <div className=" p-6 rounded-md shadow-md mx-auto bg-[#657287] max-w-fit">
                    <div className="animate-pulse">
                        {/* Product Image Skeleton */}
                        <div className="w-[300px] lg:h-44 md:h-44 h-44 rounded-lg bg-[#9FADC2] mb-4"></div>
    
                        <div className='flex gap-2 items-start w-full'> 
                        {/* Author picture  */}
                          <div className='w-10 h-10 rounded-full  bg-[#9FADC2]'>
                          </div>
                        {/* Product Title Skeleton */}
                        <div className=''>
                          <div className="w-[230px] h-5 rounded  bg-[#9FADC2] mb-4"></div>
                          <div className="w-[200px] h-4 rounded  bg-[#9FADC2] mb-4"></div>
                        </div>
                        </div>


                    </div>
                </div>
        </div>

        </CodeBox>

    );
};

export default Skeleton8;