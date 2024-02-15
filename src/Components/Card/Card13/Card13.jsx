import CodeBox from '@/Shared/CodeBox/CodeBox';

const codeStr = `const Card13 = () => {
    return (
        <div className="w-[350px] mx-auto border/10 my-20 p-6 md:p-8 rounded-2xl shadow-lg bg-white">
            <div className="space-y-6 flex flex-col justify-center items-center">
                <svg width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#16BAC5" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"></path></g></svg>
                <h6 className="font-medium text-center text-slate-700">You have enough points to redeem Keep going.!</h6>
                <button className="text-white bg-[#16BAC5] px-6 py-2 rounded-full ">Redeem now</button>
                <button className="text-slate-500">Redeem later</button>
            </div>
        </div>
    );
};`;

const Card13 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="border/10 mx-auto my-20 w-[350px] rounded-2xl p-6 shadow-lg md:p-8 bg-white">
                <div className="flex flex-col items-center justify-center space-y-6">
                    <svg width={75} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                fill="#16BAC5"
                                d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
                            ></path>
                        </g>
                    </svg>
                    <h6 className="text-center font-medium text-slate-700">You have enough points to redeem Keep going.!</h6>
                    <button className="rounded-full bg-[#16BAC5] px-6 py-2 text-white ">Redeem now</button>
                    <button className="text-slate-500">Redeem later</button>
                </div>
            </div>
        </CodeBox>
    );
};

export default Card13;
