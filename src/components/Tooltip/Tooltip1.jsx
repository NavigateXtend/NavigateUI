import CP from '@/ui/CP';

const code = `const Tooltip1 = () => {
    return (
        <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
            <button className="rounded-md border border-[#0EA5E9] bg-slate-900 px-3 py-2 text-[#0EA5E9]">Hover on me</button>
            {/* Hover Text */}
            <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
                <p className="h-fit shadow-[0px_0px_10px_0px_#0EA5E9] rounded-md bg-[#0EA5E9] px-3 py-2 text-white"> This is the hover text</p>
                <span className="absolute shadow-[0px_0px_10px_0px_#0EA5E9] -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9]"></span>
            </div>
            {/* Hover button */}
        </div>
    );
};

export default Tooltip1;`;

const Tooltip1 = () => {
  return (
    <CP code={code}>
      <div className="group relative mx-auto my-14 flex h-10 w-max cursor-pointer justify-center">
        <button className="rounded-md border border-[#0EA5E9] bg-slate-900 px-3 py-2 text-[#0EA5E9]">Hover on me</button>
        {/* Hover Text */}
        <div className="absolute -top-12 cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-top-16 group-hover:opacity-100  ">
          <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> This is the hover text</p>
          <span className="absolute -bottom-2 left-[50%] h-0 w-0 -translate-x-1/2 rotate-[135deg] border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
        </div>
        {/* Hover button */}
      </div>
    </CP>
  );
};

export default Tooltip1;
