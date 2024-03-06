import Link from 'next/link';
import { FaGithub, FaHtml5, FaReact, FaRocket } from 'react-icons/fa6';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export const metadata = {
  metadataBase: new URL('https://navigateui.com'),
  openGraph: {
    images: '/opengraph-image.png'
  }
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center space-y-5 pb-8 pt-14 sm:space-y-7 md:py-28">
        {/* <div className="xsm:text-[12px] mx-auto mb-6 flex max-w-[380px] items-center gap-2 rounded-full bg-[#393E46] py-[6px] pl-1 pr-3  text-[10px] text-white sm:mb-8 sm:text-sm  md:mb-10 md:text-base">
          <span className="rounded-full bg-sky-500 px-2 py-[3px]  sm:px-3 sm:py-1 ">New</span>
          Badge and tooltip category added
        </div> */}
        <h2 className="giveLineHeight text-2xl font-extrabold leading-[200px] text-[#FFFFFF] sm:text-3xl md:max-w-lg md:text-4xl lg:max-w-xl lg:text-5xl xl:max-w-2xl xl:text-6xl 2xl:max-w-3xl 2xl:text-7xl">
          <span className="text-sky-400">NavigateUI </span> Free Component Library for Developers
        </h2>
        <p className="max-w-md text-sm font-medium text-white sm:text-base md:text-lg lg:text-xl xl:max-w-lg xl:text-2xl">
          Navigate to a world of <span className="text-sky-400">free</span>, <span className="text-sky-400">reusable</span>, and highly <span className="text-sky-400">customizable</span> Tailwind
          components
        </p>
        <div className="flex flex-row flex-wrap items-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm md:gap-3 md:text-base lg:text-lg">
          <Link href="/components/accordion" className="flex items-center gap-2 text-nowrap rounded-sm bg-sky-500 px-6 py-2 text-white duration-300 hover:bg-[#2c6e9c] md:w-auto">
            Get Start <FaRocket />
          </Link>
          <Link href="https://github.com/NavigateUI/NavigateUI" className="flex items-center gap-2 rounded-sm border px-6 py-2 text-white duration-300 hover:bg-gray-100/20">
            <FaGithub /> Github
          </Link>
        </div>
        <div className="mt-5 flex gap-3 text-2xl text-white sm:text-4xl">
          <FaHtml5 className="text-[#dd4b25]" />
          <SiTailwindcss className="text-[#38bdf8]" />
          <FaReact className="animate-[spin_4s_linear_infinite] text-sky-500" />
          <SiNextdotjs />
        </div>
      </div>
    </>
  );
}
