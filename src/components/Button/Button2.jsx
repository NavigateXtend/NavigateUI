import CP from '@/ui/CP';

const Button2 = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-5">
      <CP
        code={`
<button className="bg-sky-700 text-white py-2 before:bg-sky-900 before:content-['Bye'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Hi!'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-40 h-16 relative group"></button>
<button className="bg-sky-600 flex items-center justify-center text-white font-bold text-lg overflow-hidden group"><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['N'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">X</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">P</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['F'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">L</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['Y'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">O</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['U'] after:bg-sky-400 after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:translate-y-full group-hover:-translate-y-full duration-500">R</span><span className="inline-block bg-sky-900 px-[10px] py-4 after:content-['I'] after:absolute after:inset-0 relative after:flex after:justify-center after:items-center after:-translate-y-full group-hover:translate-y-full duration-500">E</span></button>

`}
      >
        <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
          {/* button 16,17,18*/}
          {/* <button className="relative mb-4 mt-6 inline-block h-16 w-40 bg-white px-6 py-2 text-sky-700 shadow-lg before:absolute before:-left-1 before:-top-1 before:-z-40 before:block before:h-0  before:w-0 before:bg-sky-700 before:duration-500 after:absolute after:-bottom-1 after:-right-1 after:-z-40 after:block after:h-0 after:w-0 after:bg-sky-700 after:duration-500 before:hover:h-[100%] before:hover:w-[100%] after:hover:h-[100%] after:hover:w-[100%]">
            Button
          </button> */}
          <button className="group relative h-16 w-40 overflow-hidden bg-sky-700 px-6 py-2 text-white before:absolute before:inset-0 before:flex before:translate-y-full before:items-center before:justify-center before:bg-sky-900 before:duration-300 before:content-['Bye'] after:absolute after:inset-0 after:flex after:translate-y-0 after:items-center after:justify-center after:duration-300 after:content-['Hi!'] hover:before:translate-y-0 hover:after:-translate-y-full"></button>
          <button className="group flex h-14 items-center justify-center overflow-hidden bg-sky-600 text-lg font-bold text-white">
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['N'] group-hover:translate-y-full">
              E
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['A'] group-hover:-translate-y-full">
              X
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['V'] group-hover:translate-y-full">
              P
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['I'] group-hover:-translate-y-full">
              L
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['G'] group-hover:translate-y-full">
              O
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['A'] group-hover:-translate-y-full">
              R
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['T'] group-hover:translate-y-full">
              E
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['E'] group-hover:-translate-y-full">
              -
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:-translate-y-full after:items-center after:justify-center after:content-['U'] group-hover:translate-y-full">
              U
            </span>
            <span className="relative inline-block bg-sky-900 px-[10px] py-4 duration-500 after:absolute after:inset-0 after:flex after:translate-y-full after:items-center after:justify-center after:bg-sky-400 after:content-['I'] group-hover:-translate-y-full">
              I
            </span>
          </button>
        </div>
      </CP>
      <CP
        code={`
<button className="py-2 w-40 h-16 px-6 mb-4 mt-6 bg-sky-700 hover:bg-sky-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group"><svg viewBox="0 0 1024 1024" className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g strokeWidth="0"></g><g  strokeLinecap="round" strokeLinejoin="round"></g><g ><path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path><path d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z" fill="#154B8B"></path><path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path><path d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z" fill="#154B8B"></path><path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path><path d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z" fill="#154B8B"></path><path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path><path d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z" fill="#154B8B"></path></g></svg><span className="duration-500">Explore</span></button>
<button className="w-36 h-16 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Explore</button>
<button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300"><span>Get Start</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

`}
      >
        <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
          {/* button 19,20,21 */}
          <button className="group relative mb-4 mt-6 flex h-16 w-40 items-center justify-center overflow-hidden bg-sky-700 px-6 py-2 text-white duration-300 hover:overflow-visible hover:bg-sky-600">
            <svg
              viewBox="0 0 1024 1024"
              className="icon absolute w-12 -translate-x-full translate-y-full rotate-45 scale-0 duration-150 group-hover:-translate-y-8 group-hover:translate-x-8 group-hover:scale-100 group-hover:duration-700"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path d="M244.5 662l268.1-446.4 268 446.4z" fill="#9ED5E4"></path>
                <path
                  d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                  fill="#154B8B"
                ></path>
                <path d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z" fill="#F7F9F9"></path>
                <path
                  d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                  fill="#154B8B"
                ></path>
                <path d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z" fill="#9ED5E4"></path>
                <path
                  d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                  fill="#154B8B"
                ></path>
                <path d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z" fill="#9ED5E4"></path>
                <path
                  d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                  fill="#154B8B"
                ></path>
              </g>
            </svg>
            <span className="duration-500">Explore</span>
          </button>
          <button className="group relative h-16 w-36 rounded-full border-2 border-sky-300 font-black text-sky-800 duration-300 hover:text-white">
            <span className="absolute inset-2 -z-10 flex w-12 rounded-full bg-sky-300 duration-300 group-hover:w-[88%] group-hover:justify-start group-hover:bg-sky-500 group-hover:duration-500"></span>
            Explore
          </button>
          <button className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-sky-300">
            <span>Get Start</span>
            <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6">
              <svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </g>
              </svg>
            </span>
          </button>
        </div>
      </CP>
      <CP
        code={`
<button><label htmlFor="play" className="group relative flex size-10 cursor-pointer items-center justify-center"><input type="checkbox" id="play" className="peer/play hidden" /><span className="absolute left-0 top-0 h-full w-[5px] origin-center bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:scale-0"></span><span className="absolute right-0 top-0 h-[5px] w-full bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:w-8 peer-checked/play:translate-y-[9px] peer-checked/play:-rotate-[45deg]"></span><span className="absolute right-0 h-full w-[5px] bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:h-[50px] peer-checked/play:-translate-x-[3px]"></span><span className="absolute bottom-0 right-0 h-[5px] w-full bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:w-8 peer-checked/play:-translate-y-[9px] peer-checked/play:rotate-[45deg]"></span></label></button>
<button><label htmlFor="check" className="flex flex-col gap-[5px] p-3 rounded-lg hover:bg-sky-100 cursor-pointer"><input type="checkbox" id="check" className="peer/check hidden" /><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span></label></button>
<button><label htmlFor="lock" className="cursor-pointer"><input type="checkbox" id="lock" className="peer/lock hidden" /><svg className="block w-8 peer-checked/lock:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V14C11.25 13.5858 11.5858 13.25 12 13.25Z" fill="#035f91"></path></g></svg><svg className="hidden w-8 peer-checked/lock:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V10.0036C7.13301 10 7.54849 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.1463 1.25 17.788 3.4019 18.5373 6.31306C18.6405 6.7142 18.3991 7.12308 17.9979 7.22633C17.5968 7.32957 17.1879 7.08808 17.0846 6.68694C16.5018 4.42242 14.4453 2.75 12 2.75ZM12.75 14C12.75 13.5858 12.4142 13.25 12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V14Z" fill="#38bdf8"></path></g></svg></label></button>

`}
      >
        <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
          {/* button 22,23,24 */}
          <button>
            <label htmlFor="play" className="group relative flex size-10 cursor-pointer items-center justify-center">
              <input type="checkbox" id="play" className="peer/play hidden" />
              <span className="absolute left-0 top-0 h-full w-[5px] origin-center bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:scale-0"></span>
              <span className="absolute right-0 top-0 h-[5px] w-full bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:w-8 peer-checked/play:translate-y-[8px] peer-checked/play:-rotate-[45deg]"></span>
              <span className="absolute right-0 h-full w-[5px] bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:h-[46px] peer-checked/play:-translate-x-[1px]"></span>
              <span className="absolute bottom-0 right-0 h-[5px] w-full bg-sky-700 duration-300 group-hover:bg-sky-400 peer-checked/play:w-8 peer-checked/play:-translate-y-[8px] peer-checked/play:rotate-[45deg]"></span>
            </label>
          </button>
          <button>
            <label htmlFor="check" className="flex cursor-pointer flex-col gap-[5px] rounded-lg p-3 hover:bg-sky-200">
              <input type="checkbox" id="check" className="peer/check hidden" />
              <span className="inline-block h-1 w-10 rounded-lg bg-sky-700 duration-300 peer-checked/check:translate-y-[9px] peer-checked/check:rotate-45"></span>
              <span className="inline-block h-1 w-10 rounded-lg bg-sky-700 duration-300 peer-checked/check:scale-0"></span>
              <span className="inline-block h-1 w-10 rounded-lg bg-sky-700 duration-300 peer-checked/check:-translate-y-[9px] peer-checked/check:-rotate-45"></span>
            </label>
          </button>
          <button>
            <label htmlFor="lock" className="cursor-pointer">
              <input type="checkbox" id="lock" className="peer/lock hidden" />
              <svg className="block w-8 peer-checked/lock:hidden" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.7279 1.25 18.75 4.27208 18.75 8V10.0546C19.8648 10.1379 20.5907 10.348 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546ZM6.75 8C6.75 5.10051 9.10051 2.75 12 2.75C14.8995 2.75 17.25 5.10051 17.25 8V10.0036C16.867 10 16.4515 10 16 10H8C7.54849 10 7.13301 10 6.75 10.0036V8ZM12 13.25C12.4142 13.25 12.75 13.5858 12.75 14V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V14C11.25 13.5858 11.5858 13.25 12 13.25Z"
                    fill="#035f91"
                  ></path>
                </g>
              </svg>
              <svg className="hidden w-8 peer-checked/lock:block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 2.75C9.10051 2.75 6.75 5.10051 6.75 8V10.0036C7.13301 10 7.54849 10 8 10H16C18.8284 10 20.2426 10 21.1213 10.8787C22 11.7574 22 13.1716 22 16C22 18.8284 22 20.2426 21.1213 21.1213C20.2426 22 18.8284 22 16 22H8C5.17157 22 3.75736 22 2.87868 21.1213C2 20.2426 2 18.8284 2 16C2 13.1716 2 11.7574 2.87868 10.8787C3.40931 10.348 4.13525 10.1379 5.25 10.0546V8C5.25 4.27208 8.27208 1.25 12 1.25C15.1463 1.25 17.788 3.4019 18.5373 6.31306C18.6405 6.7142 18.3991 7.12308 17.9979 7.22633C17.5968 7.32957 17.1879 7.08808 17.0846 6.68694C16.5018 4.42242 14.4453 2.75 12 2.75ZM12.75 14C12.75 13.5858 12.4142 13.25 12 13.25C11.5858 13.25 11.25 13.5858 11.25 14V18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18V14Z"
                    fill="#38bdf8"
                  ></path>
                </g>
              </svg>
            </label>
          </button>
        </div>
      </CP>
    </div>
  );
};

export default Button2;
