import Image from 'next/image';
export default function loading() {
  return (
    <div className="h-ch relative flex w-full items-center justify-center">
      <span className="absolute h-12 w-12 animate-[u_1s_linear_infinite] rounded-full border-4 border-sky-400 border-l-transparent border-r-transparent"></span>
      <span className="absolute h-16 w-16 animate-[spin_1s_linear_infinite] rounded-full border-4 border-sky-500 border-l-transparent border-r-transparent"></span>
      <span className="absolute h-[45px] w-[45px]">
        <Image src="/Logo.svg" alt="navigate ui logo" width={45} height={45} />
      </span>
    </div>
  );
}
