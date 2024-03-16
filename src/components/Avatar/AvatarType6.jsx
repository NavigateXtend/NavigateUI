import CP from '@/ui/CP';
import Image from 'next/image';

const code = `export default function DisableOfflineAvatar() {
    return (
            <div className="flex items-center flex-wrap justify-around" id="_DisableOfflineAvatar_NavigateUI">
            // Small Size
                <div className="flex items-center flex-wrap justify-around">
                <div className="relative group">
                    <img className="size-[80px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-4 bg-red-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                </div>
            // Medium Size 
                <div className="relative group">
                    <img className="size-[110px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-5 bg-red-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                </div>
            // Large Size 
                <div className="relative group">
                    <img className="size-[130px] opacity-60 bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
                    <span className="size-5 bg-red-500 absolute rounded-full bottom-5 right-0 border-[3px] border-white"></span>
                </div>
            </div>
            </div>
    );
};

export default AvatarType6;
`;

export default function AvatarType6() {
  return (
    <CP code={code}>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        <div className="group relative">
          <Image width={80} height={80} className="size-[80px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-2 right-0 size-4 rounded-full border-[3px] border-white bg-red-500"></span>
        </div>
        <div className="group relative">
          <Image width={110} height={110} className="size-[110px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-3 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
        </div>
        <div className="group relative">
          <Image width={130} height={130} className="size-[130px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui" />
          <span className="absolute bottom-5 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
        </div>
      </div>
    </CP>
  );
}
