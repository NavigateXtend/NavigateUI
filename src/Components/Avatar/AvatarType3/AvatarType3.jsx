import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType3 = () => {
    return (
            <div className="flex items-center flex-wrap justify-around">
            // small
                <div className="relative group">
                    <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
                // medium
                <div className="relative group">
                    <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
                </div>
                // large
                <div className="relative group">
                    <img className="w-[130px] h-[130px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-5 right-0 animate-ping"></span>
                </div>
            </div>
    );
};

export default AvatarType3;
`;

const AvatarType3 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                <div className="relative group">
                    <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="h-4 w-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
                <div className="relative group">
                    <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
                </div>
                <div className="relative group">
                    <img className="w-[130px] h-[130px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                    <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-5 right-0 animate-ping"></span>
                </div>
            </div>
        </CodeBox>
    );
};

export default AvatarType3;
