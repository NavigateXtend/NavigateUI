'use client'
import CP from '@/ui/CP';
import React, { useState } from 'react';

const LoveRating = () => {
    const [userRating, setUserRating] = useState(1);
    const code = `
 import { useState } from 'react';
 
 const LoveRating = () => {
   const [userRating, setUserRating] = useState(1);
 
   return (
    <div className="flex space-x-1 ">
    {[1, 2, 3, 4, 5].map((star) => (
       <svg key={star} onClick={() => setUserRating(star)} className='w-7 cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill={ star <= userRating ? "#e11414" :"#94a3b8" } /> </g></svg>
      ))}
    </div>
   );
 };
 export default LoveRating;
 `
    return (
        <CP code={code}>
        <div className="flex space-x-1 justify-center">
        {[1, 2, 3, 4, 5].map((star) => (
           <svg key={star} onClick={() => setUserRating(star)} className='w-7 cursor-pointer' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill={ star <= userRating ? "#e11414" :"#94a3b8" } /> </g></svg>
          ))}
        </div>
        </CP>
    );
};

export default LoveRating;