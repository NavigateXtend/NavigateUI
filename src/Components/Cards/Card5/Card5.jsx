import React from 'react';

const Card5 = () => {
    return (
        <div className='max-w-[350px] my-20  shadow-md  rounded-lg border-t border-l border-l-[#005eb6] border-t-[#005eb6] border-b-2 border-r-2 border-b-[#0084ff] border-r-[#0084ff] space-y-6'>
           
           <div className='px-4 py-4 flex gap-10 justify-between items-center'>
              <div className='flex gap-3'>
                <img className='max-w-[100px]' src="/assets/avatar.png" alt="" />
                <div className='flex flex-col'>
                    <h2 className='text-xl font-semibold'>Yoan Lee</h2>
                    <p className='text-gray-400'>Web Development</p>
                </div>
              </div>
              <div className='flex flex-col gap-1 cursor-pointer px-4 py-3 rounded-full  hover:bg-gray-300'>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="black"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="black"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <path d="M2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 0 2 0C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4Z" fill="black"/>
              </svg>
              </div>
           </div>
           
           <div className='flex flex-col gap-1'>
            <div className='w-full'>
                <img className='w-full h-[150px]' src="/public/assets/post1.jpeg" alt="" />
            </div>
            <div className='flex gap-1'>
                <img className='w-[50%] h-[150px]'src="/public/assets/post2.jpeg" alt="" />
                <img className='w-[50%] h-[150px]' src="/public/assets/post3.jpeg"alt="" />
            </div>
           </div>

        </div>
    );
};

export default Card5;