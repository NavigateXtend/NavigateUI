import CP from '@/ui/CP';

const code = `const Tooltip4 = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="pointer group relative h-10">
                {/* Hover button */}
                <button className="inline rounded-md border border-[#0EA5E9] bg-slate-900 px-3 py-2 text-[#0EA5E9]">Hover on me</button>
                {/* Hover Text */}
                <div className="absolute -left-[200px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[220px] group-hover:opacity-100">
                    <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> This is the hover text</p>
                    <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
                </div>
            </div>
        </div>
    );
};
export default Tooltip4
`;

const Tooltip4 = () => {
  return (
    <CP code={code}>
      <div className="flex items-center justify-center">
        <div className="pointer group relative h-10">
          {/* Hover button */}
          <button className="inline rounded-md border border-[#0EA5E9] bg-slate-900 px-3 py-2 text-[#0EA5E9]">Hover on me</button>
          {/* Hover Text */}
          <div className="absolute -left-[200px] top-0 flex cursor-pointer whitespace-nowrap opacity-0 duration-500 hover:hidden group-hover:-left-[220px] group-hover:opacity-100">
            <p className="h-fit rounded-md bg-[#0EA5E9] px-3 py-2 text-white shadow-[0px_0px_10px_0px_#0EA5E9]"> This is the hover text</p>
            <span className="absolute -right-2 top-[50%] h-0 w-0 -translate-y-1/2 rotate-45 border-b-[20px] border-r-[20px] border-b-transparent border-r-[#0EA5E9] shadow-[0px_0px_10px_0px_#0EA5E9]"></span>
          </div>
        </div>
      </div>
    </CP>
  );
};

export default Tooltip4;
