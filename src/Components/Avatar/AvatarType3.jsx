import CP from '@/ui/CP';
import Image from 'next/image';

const code = `export default function ActiveAvatar() {
    return (
            <div className="flex items-center flex-wrap justify-around" id="_ActiveAvatar_NavigateUI">
            // small
                <div className="relative group">
                    <img className="size-[80px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                    <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
                </div>
                // medium
                <div className="relative group">
                    <img className="size-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
                </div>
                // large
                <div className="relative group">
                    <img className="size-[130px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                    <span className="size-5 bg-green-500 absolute rounded-full bottom-5 right-0 animate-ping"></span>
                </div>
            </div>
    );
};
`;

export default function AvatarType3() {
  return (
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <div className="group relative">
          <Image width={80} height={80} className="size-[80px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-2 right-0 size-4 rounded-full border-[3px] border-white bg-green-500"></span>
          <span className="absolute bottom-2 right-0 size-4 animate-ping rounded-full bg-green-500"></span>
        </div>
        <div className="group relative">
          <Image width={110} height={110} className="size-[110px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-3 right-0 size-5 rounded-full border-[3px] border-white bg-green-500"></span>
          <span className="absolute bottom-3 right-0 size-5 animate-ping rounded-full bg-green-500"></span>
        </div>
        <div className="group relative">
          <Image width={130} height={130} className="size-[130px] rounded-full bg-slate-500 object-cover" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-5 right-0 size-5 rounded-full border-[3px] border-white bg-green-500"></span>
          <span className="absolute bottom-5 right-0 size-5 animate-ping rounded-full bg-green-500"></span>
        </div>
      </div>
    </CP>
  );
}
