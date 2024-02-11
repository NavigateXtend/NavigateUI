import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

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
            <div className="flex flex-wrap items-center justify-around">
                <div className="group relative">
                    <Image width={80} height={80} className="h-[80px] w-[80px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar" />
                    <span className="absolute bottom-2 right-0 h-4 w-4 rounded-full border-[3px] border-white bg-green-500"></span>
                    <span className="absolute bottom-2 right-0 h-4 w-4 animate-ping rounded-full bg-green-500"></span>
                </div>
                <div className="group relative">
                    <Image width={110} height={110} className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar" />
                    <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500"></span>
                    <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                </div>
                <div className="group relative">
                    <Image width={130} height={130} className="h-[130px] w-[130px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar" />
                    <span className="absolute bottom-5 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500"></span>
                    <span className="absolute bottom-5 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
                </div>
            </div>
        </CodeBox>
    );
};

export default AvatarType3;
