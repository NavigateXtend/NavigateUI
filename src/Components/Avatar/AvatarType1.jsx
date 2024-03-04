import Image from 'next/image';
import CP from '@/ui/CP';

const code = `export default function SquareAvatar() 
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-evenly">
            <img className="size-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
            <img className="size-[100px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
            <img className="size-[120px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
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
          className="size-[80px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
        <Image
          width={100}
          height={100}
          className="size-[100px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
        <Image
          width={120}
          height={120}
          className="size-[120px] rounded-lg bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
      </div>
    </CP>
  );
}
