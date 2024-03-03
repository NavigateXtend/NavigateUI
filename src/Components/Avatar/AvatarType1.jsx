import Image from 'next/image';
import CP from '@/ui/CP';

const code = `export default function SquareAvatar() 
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-evenly">
            <img className="w-[80px] h-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[100px] h-[100px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
            <img className="w-[120px] h-[120px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="" />
        </div>
    );
};
`;

export default function AvatarType1() {
  return (
    // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <Image
          width={80}
          height={80}
          className="h-[80px] w-[80px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar"
        />
        <Image
          width={100}
          height={100}
          className="h-[100px] w-[100px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar"
        />
        <Image
          width={120}
          height={120}
          className="h-[120px] w-[120px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar"
        />
      </div>
    </CP>
  );
}
