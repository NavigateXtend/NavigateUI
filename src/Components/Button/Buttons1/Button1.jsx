import CodeBox from "./../../../Shared/CodeBox/CodeBox";
const Button1 = () => {
  return (
      <div className="flex flex-col gap-5 justify-center items-start">
          <CodeBox
              codeStr={`<button className="text-xl w-32 h-16 bg-sky-700 hover:scale-95 text-white duration-300">Button</button>
<button className="text-xl w-32 h-16 before:block before:absolute hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-transparent border-2 overflow-hidden border-sky-700 duration-500">Button</button>
<button className="border-2 text-xl text-sky-700 w-32 h-16 border-sky-700 hover:before:bg-sky-700 before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">Button</button>`}
          >
              <div className="flex flex-wrap gap-4 justify-evenly items-center">
                  {/* 1,2,3 */}
                  <button className="text-xl w-32 h-16 bg-sky-700 hover:scale-95 text-white rounded-lg">Button</button>
                  <button className="text-xl w-32 h-16 before:block before:absolute hover:before:bg-sky-700 before:w-0 before:h-0 hover:before:h-20 hover:before:w-40 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform hover:text-white text-sky-700 bg-transparent border-2 overflow-hidden border-sky-700 duration-500 ">
                      Button
                  </button>
                  <button className="border-2 text-xl text-sky-700 w-32 h-16 border-sky-700 hover:before:bg-sky-700 before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top  before:block">
                      Button
                  </button>
              </div>
          </CodeBox>

          <CodeBox
              codeStr={`<button className="text-xl w-32 h-16 bg-black text-white relative overflow-hidden group z-10 rounded-lg"><span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span><span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span><span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Leave</span>Button</button>
<button className="text-xl w-32 h-14 before:block before:absolute before:inset-0 before:bg-sky-600 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-sky-900 hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-white"><span>Button</span></button>
<button className="text-xl relative w-32 h-16 bg-sky-700 text-white border-y-4 duration-500 overflow-hidden border-sky-950 z-50 group">Button<span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Leave</span><span className="bg-sky-950 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span><span className="bg-sky-950 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span><span className="bg-sky-950 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span></button>`}
          >
              <div className="flex flex-wrap gap-4 justify-evenly items-center">
                  {/* 4,5,6 */}
                  <button className="text-xl w-32 h-16 bg-black text-white relative overflow-hidden group z-10 rounded-lg">
                      <span className="absolute bg-white rotate-12 -inset-8 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                      <span className="absolute bg-sky-700 rotate-12 -inset-8 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
                      <span className="absolute bg-sky-900 rotate-12 -inset-8 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
                      <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-700 ease-out text-center z-10 text-white">Leave</span>
                      Button
                  </button>
                  <button className="text-xl w-32 h-14 before:block before:absolute before:inset-0 before:bg-sky-600 before:duration-500 after:duration-500 duration-300 hover:before:skew-y-12 after:block after:absolute after:inset-0 after:bg-sky-900 hover:after:-skew-y-12 before:-z-10 after:-z-10 inline-block relative text-white">
                      <span>Button</span>
                  </button>
                  <button className="text-xl relative w-32 h-16 bg-sky-700 text-white border-y-4 duration-500 overflow-hidden border-sky-950 z-50 group">
                      Button
                      <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">Leave</span>
                      <span className="bg-sky-950 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                      <span className="bg-sky-950 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                      <span className="bg-sky-950 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                      <span className="bg-sky-950 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                  </button>
              </div>
          </CodeBox>

          <CodeBox
              codeStr={`     
<button className="text-xl w-32 h-16 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Button</button>
<button className="text-xl w-48 h-16 text-white bg-sky-950 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">Button<span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 w-32 h-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-24 h-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span><span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] w-16 h-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span></button>
<button className="text-xl w-32 h-16 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">Button</button>`}
          >
              <div className="flex flex-wrap gap-4 justify-evenly items-center">
                  {/* 7,8,9 */}
                  <button className="text-xl w-32 h-16 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
                      <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
                      <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
                      Button
                  </button>
                  <button className="text-xl w-48 h-16 text-white bg-sky-950 overflow-hidden relative z-10 group hover:text-sky-900 duration-700">
                      Button
                      <span className="bg-sky-900 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-50 w-32 h-32 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                      <span className="bg-sky-800 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-100 w-28 h-28 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                      <span className="bg-sky-600 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-200 w-24 h-24 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                      <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-300 w-20 h-20 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                      <span className="bg-sky-500 group-hover:scale-125 scale-0 ease-in-out duration-300 delay-[400ms] w-16 h-16 rounded-full absolute mx-auto my-auto inset-0 -z-10"></span>
                  </button>
                  <button className="text-xl w-32 h-16 before:absolute before:block before:inset-0 before:-z-10 before:bg-sky-500 text-white after:block hover:after:w-full after:w-0 after:hover:left-0 after:right-0 after:top-0 after:h-full after:-z-10 after:duration-300 after:bg-sky-900 after:absolute relative inline-block">
                      Button
                  </button>
              </div>
          </CodeBox>

          <CodeBox
              codeStr={`<button className="text-xl box-border border-4 border-sky-900 w-48 h-16 bg-sky-600 text-white relative group"><span className="pr-8">Download</span><span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
<button type="button" className="text-xl w-48 h-14 border-2 border-sky-950 text-sky-950 relative group hover:text-sky-200 overflow-hidden"><span className="bg-sky-950 ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-sky-700 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>Button</button>
<button type="button" className="py-2 px-5 w-40 h-16 text-sky-700 overflow-hidden shadow-lg border-sky-700 before:block before:absolute before:translate-x-[90%] before:inset-0 before:bg-sky-700 before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-[90%] after:inset-0  after:bg-sky-700 relative inline-block hover:text-white">Submit</button>`}
          >
              <div className="flex flex-wrap gap-4 justify-evenly items-center">
                  {/* 10 */}
                  <button className="text-xl box-border border-4 border-sky-900 w-48 h-16 bg-sky-600 text-white relative group">
                      <span className="pr-8">Download</span>
                      <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                          <svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                  <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path
                                      d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                                      stroke="#ffffff"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                  ></path>
                              </g>
                          </svg>
                      </span>
                  </button>
                  {/* 11 */}
                  <button type="button" className="text-xl w-48 h-14 border-2 border-sky-950 text-sky-950 relative group hover:text-sky-200 overflow-hidden">
                      <span className="bg-sky-950 ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span>
                      <span className="bg-sky-700 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>
                      Button
                  </button>
                  {/* 12 */}
                  <button
                      type="button"
                      className="py-2 px-5 w-40 h-16 text-sky-700 overflow-hidden shadow-lg border-sky-700 before:block before:absolute before:translate-x-[90%] before:inset-0 before:bg-sky-700 before:hover:translate-x-0 before:duration-200 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-500 after:hover:translate-x-0 after:block after:absolute after:-translate-x-[90%] after:inset-0 after:bg-sky-700 relative inline-block hover:text-white"
                  >
                      Submit
                  </button>
              </div>
          </CodeBox>

          {/* circle buttons  */}

          <CodeBox
              codeStr={`
<button className="text-xl w-32 h-32 text-white rounded-full duration-300  bg-sky-700 overflow-hidden relative z-10 group"><span className="bg-sky-500 group-hover:translate-x-1 group-hover:shadow-md group-hover:-translate-y-1 ease-in-out duration-300 delay-300 w-28 h-28 rounded-full absolute top-2 left-2 -z-10"></span><span className="bg-sky-400 group-hover:translate-x-2  group-hover:shadow-md group-hover:-translate-y-2 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute top-6 left-6 -z-10"></span><span className="bg-sky-300 group-hover:translate-x-3  group-hover:shadow-md group-hover:-translate-y-3 ease-in-out duration-300 delay-100 w-12 h-12 rounded-full absolute top-10 left-10 -z-10"></span><span className="text-sky-900 group-hover:translate-x-3  group-hover:-translate-y-3 ease-in-out duration-300 delay-50  rounded-full absolute inset-0 flex justify-center items-center -z-10">Button</span></button>
<button className="group w-[50px] h-[50px] relative"><span className="group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] bottom-0 left-1/2 transform -translate-x-1/2 rounded-full w-[40px] h-[40px] bg-white"><svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round" ></path> </g> </g> </g> </svg> </span> <span className="bg-gradient-to-tr bottom-0 left-1/2  transform -translate-x-1/2  from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute   rounded-full  z-20 w-0 h-0   group-hover:w-[50px] group-hover:h-[50px]"></span> <span className="bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500  absolute  rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span> </button>
<button><label htmlFor="check" className="flex flex-col gap-[5px] p-3 rounded-lg hover:bg-sky-100 cursor-pointer"><input type="checkbox" id="check" className="peer/check hidden" /><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-2 duration-300"></span><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span><span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-2 duration-300"></span></label></button>

`}
          >
              <div className="flex flex-wrap justify-evenly items-center">
                  {/* 13 */}
                  <button className="text-xl w-32 h-32 text-white rounded-full duration-300  bg-sky-700 overflow-hidden relative z-10 group ">
                      <span className="bg-sky-500 group-hover:translate-x-1 group-hover:shadow-md group-hover:-translate-y-1 ease-in-out duration-300 delay-300 w-28 h-28 rounded-full absolute top-2 left-2 -z-10"></span>
                      <span className="bg-sky-400 group-hover:translate-x-2 group-hover:shadow-md group-hover:-translate-y-2 ease-in-out duration-300 delay-200 w-20 h-20 rounded-full absolute top-6 left-6 -z-10"></span>
                      <span className="bg-sky-300 group-hover:translate-x-3 group-hover:shadow-md group-hover:-translate-y-3 ease-in-out duration-300 delay-100 w-12 h-12 rounded-full absolute top-10 left-10 -z-10"></span>
                      <span className="text-sky-900 group-hover:translate-x-3 group-hover:-translate-y-3 ease-in-out duration-300 delay-50  rounded-full absolute inset-0 flex justify-center items-center -z-10">
                          Button
                      </span>
                  </button>
                  {/* 14 */}
                  <button className="group w-[50px] h-[50px] relative">
                      <span className="group-hover:shadow-[0px_0px_30px_2px_#0d87f8] group-hover:rotate-180 duration-500 z-30 absolute flex justify-center items-center bg-gradient-to-tr from-[#0d87f8] to-[#70c4ff] bottom-0 left-1/2 transform -translate-x-1/2    rounded-full w-[40px] h-[40px] bg-white">
                          <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                              <g id="SVGRepo_iconCarrier">
                                  <g id="style=linear">
                                      <g id="add">
                                          <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path>
                                          <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path>
                                      </g>
                                  </g>
                              </g>
                          </svg>
                      </span>
                      <span className="bg-gradient-to-tr bottom-0 left-1/2 transform -translate-x-1/2 from-[#0d87f8]/80 to-[#70c4ff]/80 duration-300  absolute rounded-full z-20 w-0 h-0 group-hover:w-[50px] group-hover:h-[50px]"></span>
                      <span className="bg-gradient-to-tr bottom-0 left-1/2 from-[#0d87f8]/50 to-[#70c4ff]/50 transform -translate-x-1/2 duration-500 absolute rounded-full z-20 w-0 h-0 group-hover:w-[60px] group-hover:h-[60px] hover:duration-300"></span>
                  </button>
                  {/* 15 */}
                  <button>
                      <label htmlFor="check" className="flex flex-col gap-[5px] p-3 rounded-lg hover:bg-sky-100 cursor-pointer">
                          <input type="checkbox" id="check" className="peer/check hidden" />
                          <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:rotate-45 peer-checked/check:translate-y-[9px] duration-300"></span>
                          <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:scale-0 duration-300"></span>
                          <span className="w-10 h-1 rounded-lg inline-block bg-sky-700 peer-checked/check:-rotate-45 peer-checked/check:-translate-y-[9px] duration-300"></span>
                      </label>
                  </button>
              </div>
          </CodeBox>
      </div>
  );
};

export default Button1;
