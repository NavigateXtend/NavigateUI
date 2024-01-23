import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType7 = () => {
    return (
            <div className="flex items-center flex-wrap justify-around">
                {/* Small Size  */}
                <div className="relative group">
                    <img className="w-[80px] h-[80px] p-[2px] bg-sky-200 object-cover rounded-full border-2 border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-5 w-5 bg-white absolute rounded-full bottom-2 right-0 border border-[#0095FF] flex justify-center items-center p-[2px]"><svg width={10} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g></g></svg>
                    </div>
                </div>
                {/* Medium Size  */}
                <div className="relative group">
                    <img className="w-[110px] h-[110px] p-[2px] bg-sky-200 object-cover rounded-full border-[3px] border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-7 w-7 bg-white absolute rounded-full bottom-3 right-0 border-2 border-[#0095FF]  flex justify-center items-center p-1.5"><svg width={12} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g></g></svg>
                    </div>
                </div>
                {/* Large Size  */}
                <div className="relative group">
                    <img className="w-[130px] h-[130px] p-[2px] bg-sky-200 object-cover rounded-full border-4 border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-8 w-8 bg-white absolute rounded-full bottom-2 right-0 border-2 border-[#0095FF]  flex justify-center items-center p-[7px]"><svg width={20} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z" id="male-[#1364]"></path></g></g></g> </g></svg>
                    </div>
                </div>
            </div>
    );
};

export default AvatarType7;
`;

const AvatarType7 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                {/* Small Size  */}
                <div className="relative group">
                    <img className="w-[80px] h-[80px] p-[2px] bg-sky-200 object-cover rounded-full border-2 border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-5 w-5 bg-white absolute rounded-full bottom-2 right-0 border border-[#0095FF] flex justify-center items-center p-[2px]">
                        <svg width={10} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                                id="male-[#1364]"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                {/* Medium Size  */}
                <div className="relative group">
                    <img className="w-[110px] h-[110px] p-[2px] bg-sky-200 object-cover rounded-full border-[3px] border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-7 w-7 bg-white absolute rounded-full bottom-3 right-0 border-2 border-[#0095FF]  flex justify-center items-center p-1.5">
                        <svg width={12} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                                id="male-[#1364]"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                {/* Large Size  */}
                <div className="relative group">
                    <img className="w-[130px] h-[130px] p-[2px] bg-sky-200 object-cover rounded-full border-4 border-[#0095FF]" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <div className="h-8 w-8 bg-white absolute rounded-full bottom-2 right-0 border-2 border-[#0095FF]  flex justify-center items-center p-[7px]">
                        <svg width={20} viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#0095FF">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title>male [#1364]</title> <desc>Created with Sketch.</desc> <defs> </defs>
                                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -2079.000000)" fill="#0095FF">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path
                                                d="M11,1937.005 C8.243,1937.005 6,1934.762 6,1932.005 C6,1929.248 8.243,1927.005 11,1927.005 C13.757,1927.005 16,1929.248 16,1932.005 C16,1934.762 13.757,1937.005 11,1937.005 L11,1937.005 Z M16,1919 L16,1921 L20.586,1921 L15.186,1926.402 C14.018,1925.527 12.572,1925.004 11,1925.004 C7.134,1925.004 4,1928.138 4,1932.004 C4,1935.87 7.134,1939.005 11,1939.005 C14.866,1939.005 18,1935.871 18,1932.005 C18,1930.433 17.475,1928.987 16.601,1927.818 L22,1922.419 L22,1927 L24,1927 L24,1919 L16,1919 Z"
                                                id="male-[#1364]"
                                            ></path>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </CodeBox>
    );
};

export default AvatarType7;
