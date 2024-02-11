import CodeBox from "@/Shared/CodeBox/CodeBox";

const codeStr = `export const InputType3 = () => {
    return (
        <div className="relative  w-max rounded-lg">
            <input className="peer rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" placeholder="" />
            <label className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400" htmlFor="">Email</label>
        </div>
    );
};
`

export const InputType3 = () => {
    return (
        <CodeBox codeStr={codeStr}>
            <div className="relative  w-max rounded-lg">
                <input className="peer rounded-lg border border-[#1B8EF8] bg-transparent px-4 py-2 text-[#1B8EF8] focus:outline-none" type="text" placeholder="" />
                <label
                    className="dark:bg-[#0F172A] absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px]  peer-placeholder-shown:top-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] dark:peer-focus:bg-[#0F172A] peer-focus:bg-white peer-focus:text-xs peer-focus:text-blue-400"
                    htmlFor=""
                >
                    Email
                </label>
            </div>
        </CodeBox>
    );
};
