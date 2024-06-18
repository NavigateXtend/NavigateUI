import CP from '@/ui/CP';
import Image from 'next/image';

const code = `export default function DisableOfflineAvatar() {
    return (
        <div className="flex w-full flex-wrap items-center justify-evenly">
            <div className="group relative">
                <Image width={80} height={80} className="size-[80px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                <span className="absolute bottom-2 right-0 size-4 rounded-full border-[3px] border-white bg-red-500"></span>
            </div>
            <div className="group relative">
                <Image width={110} height={110} className="size-[110px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                <span className="absolute bottom-3 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
            </div>
            <div className="group relative">
                <Image width={130} height={130} className="size-[130px] rounded-full bg-slate-500 object-cover opacity-60" src="https://source.unsplash.com/300x300/?profile" alt="avatar navigate ui"/>
                <span className="absolute bottom-5 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
            </div>
        </div>
    );
}

`;

export default function DisableOfflineAvatar(i) {
    return (
        <CP code={code} i={i}>
            <div className="flex w-full flex-wrap items-center justify-evenly">
                <div className="group relative">
                    <Image
                        width={80}
                        height={80}
                        className="size-[80px] rounded-full bg-slate-500 object-cover opacity-60"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-2 right-0 size-4 rounded-full border-[3px] border-white bg-red-500"></span>
                </div>
                <div className="group relative">
                    <Image
                        width={110}
                        height={110}
                        className="size-[110px] rounded-full bg-slate-500 object-cover opacity-60"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-3 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
                </div>
                <div className="group relative">
                    <Image
                        width={130}
                        height={130}
                        className="size-[130px] rounded-full bg-slate-500 object-cover opacity-60"
                        src="https://source.unsplash.com/300x300/?profile"
                        alt="avatar navigate ui"
                    />
                    <span className="absolute bottom-5 right-0 size-5 rounded-full border-[3px] border-white bg-red-500"></span>
                </div>
            </div>
        </CP>
    );
}
