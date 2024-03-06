import CP from '@/ui/CP';

const Hero4 = () => {
  const code = `
            <section className="bg-[#FDE047] px-8 py-12">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center flex flex-col space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-widest text-black opacity-70 mb-2">#1 PLATFORM FOR JOBS</p>
                        {/* Text content for the banner */}
                        <div className=" text-black  mb-4">
                            <h2 className="lg:text-5xl sm:text-4xl max-w-[800px] mx-auto text-3xl font-bold">      
                                Find Your <span className="text-[#EE7236]">Dream Job</span> That Suit With Exciting Opportunities
                            </h2>
                            <p className="sm:text-base text-sm text-black opacity-70 mb-8 mt-5">
                                Embark on a journey towards your dream career, yousr ultimate job-finding companion! We've curated
                                <br />a platform that connects talented individuals with exciting opportunities.
                            </p>
                            {/* Explore and input field */}
                            <div className="flex justify-center items-center sm:flex-row flex-col space-x-4 sm:space-y-0  space-y-3 mb-12">
                                <svg xmlns="http://www.w3.org/2000/svg"width={24}height={24}viewBox="0 0 24 24"fill="none"stroke="currentColor"strokeWidth={2}strokeLinecap="round"strokeLinejoin="round"className="text-black h-6 w-6 md:block hidden"><circle cx={12} cy={12} r={10} /><line x1={2} x2={22} y1={12} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"  className="text-black h-6 w-6  md:block hidden"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M16 11H14M16 16H14M8 11L9 12L11 10M8 16L9 17L11 15" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                                <div className="relative rounded-md shadow-sm lg:w-[400px] sm:w-[300px] w-full ">
                                    <input className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none" placeholder="Job title, Salary, or Companies..." />
                                </div>
                                <button className="inline-flex items-center justify-center  sm:w-auto w-full rounded-md text-sm font-medium  disabled:opacity-50 hover:bg-black/90 h-10 px-4 py-2 bg-black text-white">
                                    Explore Now
                                </button>
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-black h-6 w-6  md:block hidden" > <path d="M3 7V5c0-1.1.9-2 2-2h2" /> <path d="M17 3h2c1.1 0 2 .9 2 2v2" /> <path d="M21 17v2c0 1.1-.9 2-2 2h-2" /> <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" /> <rect width={7} height={5} x={7} y={7} rx={1} /> <rect width={7} height={5} x={10} y={12} rx={1} /> </svg>
                            </div>
                        </div>
                    </div>
                    {/* Stats of the banner */}
                    <div className="flex flex-wrap justify-center  lg:gap-20 md:gap-10  gap-10 items-center text-center">
                        <div>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 76.16 76.16" xmlSpace="preserve" stroke="#000000" strokeWidth="0.00076161" className="text-black h-12 w-12 mx-auto"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M62.943,20.161H13.216v-7.393h49.728V20.161z M13.216,46.369h19.712V26.657H13.216V46.369z M13.216,57.792h26.88 c-0.673-0.672-1.345-1.567-1.792-2.464H13.216V57.792z M13.216,51.969h23.52c-0.224-0.896-0.672-1.566-0.896-2.465H13.216V51.969z M41.664,29.121c0.896-0.896,2.016-1.792,3.137-2.464h-6.497v2.464H41.664z M13.216,63.393h34.72 c-1.567-0.672-2.912-1.567-4.479-2.465h-30.24V63.393z M75.936,49.504c-0.672,2.912-2.016,5.377-3.584,7.616l3.81,6.72V48.833 C76.16,49.057,76.16,49.281,75.936,49.504z M63.393,72.801l-0.449-1.121H8.96c-2.464,0-4.48-2.016-4.48-4.479V8.96 c0-2.464,2.016-4.479,4.48-4.479H67.2c2.464,0,4.479,2.017,4.479,4.479v21.728c0.896,0.896,1.566,2.019,2.238,3.139 c1.12,1.792,1.792,3.584,2.24,5.603V8.96C76.16,4.033,72.128,0,67.2,0H8.96C4.032,0,0,4.033,0,8.96v58.24 c0,4.928,4.032,8.96,8.96,8.96h56.448l-0.225-0.448L63.393,72.801z M40.768,52.865c-4.705-8.288-1.791-19.04,6.496-23.744 c8.289-4.704,19.041-1.792,23.743,6.496c4.929,8.288,2.017,19.04-6.271,23.743C56.225,64.289,45.695,61.376,40.768,52.865z M63.168,56.897c6.943-4.033,9.409-12.994,5.376-19.938c-4.032-6.942-12.991-9.405-19.937-5.376 c-6.943,4.034-9.407,12.994-5.375,19.938C47.264,58.465,56.225,60.928,63.168,56.897z M68.993,58.079l-7.565,4.367l5.822,10.088 l7.566-4.366L68.993,58.079z M68.096,73.92c1.121,2.016,3.811,2.688,5.824,1.568c2.016-1.12,2.688-3.809,1.568-5.824L68.096,73.92z " /> </g> </g></svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Live Jobs</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">30000+</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-black h-12 w-12 mx-auto" > <rect width={20} height={14} x={2} y={7} rx={2} ry={2} /> <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /> </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Daily Job Post</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">5000+</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-black h-12 w-12 mx-auto" > <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx={9} cy={7} r={4} /> <polyline points="16 11 18 13 22 9" /> </svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">People Get Hired</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">25000+</p>
                        </div>
                        <div>                           
                            <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-black h-12 w-12 mx-auto"><g strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" /></g></svg>
                            <p className="font-semibold md:text-lg sm:text-base text-sm text-black mt-2">Companies</p>
                            <p className="md:text-2xl sm:text-xl text-base font-bold text-black">1000+</p>
                        </div>
                    </div>
                    {/* Some disclaimer for the banner */}
                    <div className="flex justify-center mt-8 items-center flex-wrap gap-4 space-x-2">
                        <p className="text-xs font-semibold">Product Manager</p>
                        <p className="text-xs font-semibold">Frontend Dev</p>
                        <p className=" text-xs font-semibold">Data Analyst</p>
                    </div>
                </div>
            </section>

   `;

  return (
    <CP code={code}>
      <section className="bg-[#FDE047] px-8 py-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col space-y-3 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-black opacity-70">#1 PLATFORM FOR JOBS</p>
            {/* Text content for the banner */}
            <div className=" mb-4  text-black">
              <h2 className="mx-auto max-w-[800px] text-3xl font-bold sm:text-4xl lg:text-5xl">
                Find Your <span className="text-[#EE7236]">Dream Job</span> That Suit With Exciting Opportunities
              </h2>
              <p className="mb-8 mt-5 text-sm text-black opacity-70 sm:text-base">
                Embark on a journey towards your dream career, your ultimate job-finding companion! We&apos;ve curated
                <br />a platform that connects talented individuals with exciting opportunities.
              </p>
              {/* Explore and input field */}
              <div className="mb-12 flex flex-col items-center justify-center space-x-4 space-y-3  sm:flex-row sm:space-y-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden h-6 w-6 text-black md:block"
                >
                  <circle cx={12} cy={12} r={10} />
                  <line x1={2} x2={22} y1={12} y2={12} />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden h-6 w-6  text-black md:block">
                  <g strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M8 5.00005C7.01165 5.00082 6.49359 5.01338 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.07989 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.5064 5.01338 16.9884 5.00082 16 5.00005M8 5.00005V7H16V5.00005M8 5.00005V4.70711C8 4.25435 8.17986 3.82014 8.5 3.5C8.82014 3.17986 9.25435 3 9.70711 3H14.2929C14.7456 3 15.1799 3.17986 15.5 3.5C15.8201 3.82014 16 4.25435 16 4.70711V5.00005M16 11H14M16 16H14M8 11L9 12L11 10M8 16L9 17L11 15"
                      stroke="#000000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
                <div className="relative w-full rounded-md shadow-sm sm:w-[300px] lg:w-[400px] ">
                  <input className="flex h-10 w-full rounded-md border  px-3 py-2 text-sm focus:outline-none" placeholder="Job title, Salary, or Companies..." />
                </div>
                <button className="inline-flex h-10 w-full  items-center justify-center rounded-md bg-black px-4  py-2 text-sm font-medium text-white hover:bg-black/90 disabled:opacity-50 sm:w-auto">
                  Explore Now
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden h-6 w-6  text-black md:block"
                >
                  <path d="M3 7V5c0-1.1.9-2 2-2h2" /> <path d="M17 3h2c1.1 0 2 .9 2 2v2" /> <path d="M21 17v2c0 1.1-.9 2-2 2h-2" /> <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                  <rect width={7} height={5} x={7} y={7} rx={1} /> <rect width={7} height={5} x={10} y={12} rx={1} />
                </svg>
              </div>
            </div>
          </div>
          {/* Stats of the banner */}
          <div className="flex flex-wrap items-center  justify-center gap-10  text-center md:gap-10 lg:gap-20">
            <div>
              <svg
                fill="#000000"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 76.16 76.16"
                xmlSpace="preserve"
                stroke="#000000"
                strokeWidth="0.00076161"
                className="mx-auto h-12 w-12 text-black"
              >
                <g strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <path d="M62.943,20.161H13.216v-7.393h49.728V20.161z M13.216,46.369h19.712V26.657H13.216V46.369z M13.216,57.792h26.88 c-0.673-0.672-1.345-1.567-1.792-2.464H13.216V57.792z M13.216,51.969h23.52c-0.224-0.896-0.672-1.566-0.896-2.465H13.216V51.969z M41.664,29.121c0.896-0.896,2.016-1.792,3.137-2.464h-6.497v2.464H41.664z M13.216,63.393h34.72 c-1.567-0.672-2.912-1.567-4.479-2.465h-30.24V63.393z M75.936,49.504c-0.672,2.912-2.016,5.377-3.584,7.616l3.81,6.72V48.833 C76.16,49.057,76.16,49.281,75.936,49.504z M63.393,72.801l-0.449-1.121H8.96c-2.464,0-4.48-2.016-4.48-4.479V8.96 c0-2.464,2.016-4.479,4.48-4.479H67.2c2.464,0,4.479,2.017,4.479,4.479v21.728c0.896,0.896,1.566,2.019,2.238,3.139 c1.12,1.792,1.792,3.584,2.24,5.603V8.96C76.16,4.033,72.128,0,67.2,0H8.96C4.032,0,0,4.033,0,8.96v58.24 c0,4.928,4.032,8.96,8.96,8.96h56.448l-0.225-0.448L63.393,72.801z M40.768,52.865c-4.705-8.288-1.791-19.04,6.496-23.744 c8.289-4.704,19.041-1.792,23.743,6.496c4.929,8.288,2.017,19.04-6.271,23.743C56.225,64.289,45.695,61.376,40.768,52.865z M63.168,56.897c6.943-4.033,9.409-12.994,5.376-19.938c-4.032-6.942-12.991-9.405-19.937-5.376 c-6.943,4.034-9.407,12.994-5.375,19.938C47.264,58.465,56.225,60.928,63.168,56.897z M68.993,58.079l-7.565,4.367l5.822,10.088 l7.566-4.366L68.993,58.079z M68.096,73.92c1.121,2.016,3.811,2.688,5.824,1.568c2.016-1.12,2.688-3.809,1.568-5.824L68.096,73.92z " />
                  </g>
                </g>
              </svg>
              <p className="mt-2 text-sm font-semibold text-black sm:text-base md:text-lg">Live Jobs</p>
              <p className="text-base font-bold text-black sm:text-xl md:text-2xl">30000+</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-12 w-12 text-black"
              >
                <rect width={20} height={14} x={2} y={7} rx={2} ry={2} /> <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
              <p className="mt-2 text-sm font-semibold text-black sm:text-base md:text-lg">Daily Job Post</p>
              <p className="text-base font-bold text-black sm:text-xl md:text-2xl">5000+</p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto h-12 w-12 text-black"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /> <circle cx={9} cy={7} r={4} /> <polyline points="16 11 18 13 22 9" />
              </svg>
              <p className="mt-2 text-sm font-semibold text-black sm:text-base md:text-lg">People Get Hired</p>
              <p className="text-base font-bold text-black sm:text-xl md:text-2xl">25000+</p>
            </div>
            <div>
              <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-black">
                <g strokeWidth={0} />
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z" />
                </g>
              </svg>
              <p className="mt-2 text-sm font-semibold text-black sm:text-base md:text-lg">Companies</p>
              <p className="text-base font-bold text-black sm:text-xl md:text-2xl">1000+</p>
            </div>
          </div>
          {/* Some disclaimer for the banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 space-x-2">
            <p className="text-xs font-semibold">Product Manager</p>
            <p className="text-xs font-semibold">Frontend Dev</p>
            <p className=" text-xs font-semibold">Data Analyst</p>
          </div>
        </div>
      </section>
    </CP>
  );
};

export default Hero4;
