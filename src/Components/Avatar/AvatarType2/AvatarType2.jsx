import React from 'react';
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

const codeStr = `const AvatarType2 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-between">
            <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[100px] h-[100px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[120px] h-[120px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
        </div>
    );
};

export default AvatarType2;`;

const AvatarType2 = () => {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
        <CodeBox codeStr={codeStr}>
            <div className="flex flex-wrap items-center justify-around">
                <Image
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                />
                <Image
                    width={110}
                    height={110}
                    className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                />
                <Image
                    width={130}
                    height={130}
                    className="h-[130px] w-[130px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
                    src="https://source.unsplash.com/300x300/?profile"
                    alt=""
                />
            </div>
        </CodeBox>
    );
};

export default AvatarType2;
