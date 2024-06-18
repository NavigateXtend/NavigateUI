import CP from '@/ui/CP';

const code = `export const InputType5 = () => {
    return (
        <div className="relative w-max">
            <input className="peer h-[50px] border-b border-[#1B8EF8]  bg-blue-50 px-2 pt-4 text-[#1B8EF8] focus:outline-none" type="text" placeholder="" />
            <label className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]" htmlFor="">Email</label>
        </div>
    );
};`;
export const InputType5 = () => {
  return (
    <CP code={code}>
      <div className="relative w-max">
        <input className="peer h-[50px] border-b border-[#1B8EF8]  bg-blue-50 px-2 pt-4 text-[#1B8EF8] focus:outline-none dark:bg-blue-500/20" type="text" placeholder="" />
        <label
          className="absolute left-2 top-0.5 text-xs text-[#1B8EF8] duration-300 peer-placeholder-shown:left-2 peer-placeholder-shown:top-[50%] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-2 peer-focus:top-0.5 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-[#1B8EF8]"
          htmlFor=""
        >
          Email
        </label>
      </div>
    </CP>
  );
};
