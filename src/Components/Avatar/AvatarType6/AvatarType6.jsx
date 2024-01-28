import CodeBox from '../../../Shared/CodeBox/CodeBox';

const codeStr = `const AvatarType6 = () => {
    return (
            <div className="flex items-center flex-wrap justify-around">
            // Small Size
                <div className="flex items-center flex-wrap justify-around">
                <div className="relative group">
                    <img className="w-[80px] h-[80px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-4 w-4 bg-red-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                </div>
            // Medium Size 
                <div className="relative group">
                    <img className="w-[110px] h-[110px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-red-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                </div>
            // Large Size 
                <div className="relative group">
                    <img className="w-[130px] h-[130px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-red-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                </div>
            </div>
            </div>
    );
};

export default AvatarType6;
`;

const AvatarType6 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="flex items-center flex-wrap justify-around">
                <div className="relative group">
                    <img className="w-[80px] h-[80px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-4 w-4 bg-red-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                </div>
                <div className="relative group">
                    <img className="w-[110px] h-[110px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-red-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                </div>
                <div className="relative group">
                    <img className="w-[130px] h-[130px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="" />
                    <span className="h-5 w-5 bg-red-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                </div>
            </div>
        </CodeBox>
    );
};

export default AvatarType6;
