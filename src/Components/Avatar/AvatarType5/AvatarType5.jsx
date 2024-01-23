import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType5 = () => {
    return (
            <div className="flex items-center flex-wrap justify-around">
            //  Small Size 
                <div className="relative group">
                    <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt=""/>
                    <span className="h-5 w-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"><g data-name="add" id="add-2"><g> <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            // Medium Size 
                <div className="relative group">
                    <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt=""/>
                    <span className="h-6 w-6 bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g data-name="add" id="add-2">                                     <g><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            // Large Size 
                <div className="relative group">
                    <img className="w-[130px] h-[130px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]" src="https://source.unsplash.com/300x300/?profile" alt=""/>
                    <span className="h-8 w-8 bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-4 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><g id="Complete"><g data-name="add" id="add-2"><g><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line><line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line></g></g></g></g>
                        </svg>
                    </span>
                </div>
            </div>
    );
};

export default AvatarType5;
`;

const AvatarType5 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                <div className="relative group">
                    <img
                        className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt=""
                    />
                    <span className="h-5 w-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title></title>
                                <g id="Complete">
                                    <g data-name="add" id="add-2">
                                        <g>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="relative group">
                    <img
                        className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt=""
                    />
                    <span className="h-6 w-6 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title></title>
                                <g id="Complete">
                                    <g data-name="add" id="add-2">
                                        <g>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
                <div className="relative group">
                    <img
                        className="w-[130px] h-[130px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt=""
                    />
                    <span className="h-8 w-8 bg-white p-1 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-4 left-[50%] -translate-x-1/2">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#60A5FA">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title></title>
                                <g id="Complete">
                                    <g data-name="add" id="add-2">
                                        <g>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12" x2="12" y1="19" y2="5"></line>
                                            <line fill="none" stroke="#60A5FA" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="5" x2="19" y1="12" y2="12"></line>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
        </CodeBox>
    );
};

export default AvatarType5;
