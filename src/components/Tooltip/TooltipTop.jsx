import CP from '@/ui/CP';

const code = `
export default function TooltipTop() {
    return (
        <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
            {/* Hover button */}
            <button className="rounded-md border border-[#0EA5E9] px-3 py-2 text-[#0EA5E9]">Hover</button>
            {/* Hover Text */}
            <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> This is the hover text</p>
                <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
            </div>
        </div>
    );
}`;

export default function TooltipTop(i) {
    return (
        <CP code={code} i={i}>
            <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
                {/* Hover button */}
                <button className="rounded-md border border-[#0EA5E9] px-3 py-2 text-[#0EA5E9]">Hover</button>
                {/* Hover Text */}
                <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                    <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> This is the hover text</p>
                    <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                </div>
            </div>
        </CP>
    );
}
