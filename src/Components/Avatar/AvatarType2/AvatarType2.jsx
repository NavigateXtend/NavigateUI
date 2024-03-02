import React from 'react';
import CodeBox from '@/Shared/CodeBox/CodeBox';
import Image from 'next/image';

const codeStr = `export default function CircleAvatar() {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-between">
            <img className="size-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar image" />
            <img className="size-[110px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar image" />
            <img className="size-[130px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar image" />
        </div>
    );
};
`;

export default function AvatarType2() {
  return (
    // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
    <CodeBox codeStr={codeStr}>
      <div className="flex flex-wrap items-center justify-around">
        <Image
          width={80}
          height={80}
          className="size-[80px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar image"
        />
        <Image
          width={110}
          height={110}
          className="size-[110px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar image"
        />
        <Image
          width={130}
          height={130}
          className="size-[130px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar image"
        />
      </div>
    </CodeBox>
  );
}
