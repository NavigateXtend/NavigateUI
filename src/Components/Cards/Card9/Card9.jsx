import CodeBox from "../../../Shared/CodeBox/CodeBox";


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
    `
 
 
 
 
     return (
         <CodeBox codeStr={codeStr}>
 
         <div className='lg:w-[310px] mx-auto md:w-[270px] w-[240px] '>
         <div className='lg:w-[310px] bg-gray-400 lg:h-[200px] md:h-[180px] h-[160px] rounded-3xl md:w-[270px] w-[240px]'>
             <img className='w-full h-full bg-gray-400 rounded-3xl' src={'https://source.unsplash.com/201x201/?furniture'} alt="" />
         </div>
         <div className='mt-3'>
                 <h2 className='text-slate-700  ml-1 font-semibold md:text-xl sm:text-lg '>Stylish chair</h2>
         </div>
         <div className='mt-2 flex gap-1'>
                 {[...Array(5)].map((_,index)=>(
                    <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#d6b706"
                    stroke="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                 ))}
         </div>
         <div className='mt-5 flex justify-between items-center'>
             <h2 className='lg:text-xl sm:text-lg text-base font-bold text-gray-800'>$20.00</h2>
             <button className='bg-[#0e82c5] text-white p-2 rounded-full font-semibold md:text-base sm:text-sm text-[12px] '>Add to</button>
         </div>
     </div>    
         </CodeBox>
         
     );
 }; 

export default Card9;