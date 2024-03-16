import CP from '@/ui/CP';
import Image from 'next/image';

const code = `export default function CircleAvatar() {
    return (
        // you can remove the blur by removing hover:blur-[2px] duration-500 these classes 
        <div className="flex flex-wrap justify-between">
            <img className="size-[80px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
            <img className="size-[110px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
            <img className="size-[130px] bg-slate-500 object-cover rounded-lg hover:blur-[2px] duration-500" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
        </div>
    );
};
`;

export default function AvatarType2() {
  return (
    // you can remove the blur by removing hover:blur-[2px] duration-500 these classes
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <Image
          width={80}
          height={80}
          className="size-[80px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
        <Image
          width={110}
          height={110}
          className="size-[110px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
        <Image
          width={130}
          height={130}
          className="size-[130px] rounded-full bg-slate-500 object-cover duration-500 hover:blur-[2px]"
          src="https://source.unsplash.com/300x300/?profile"
          alt="avatar navigate ui"
        />
      </div>
    </CP>
  );
}
