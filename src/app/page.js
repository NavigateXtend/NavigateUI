import Link from 'next/link';
import { FaGithub, FaRocket } from 'react-icons/fa6';
export const metadata = {
  metadataBase: new URL('https://navigateui.com'),
  openGraph: {
    images: '/opengraph-image.png'
  }
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 pb-8 pt-14 text-center md:px-8 md:py-28 ">
        {/* <div className="xsm:text-[12px] mx-auto mb-6 flex max-w-[380px] items-center gap-2 rounded-full bg-[#393E46] py-[6px] pl-1 pr-3  text-[10px] text-white sm:mb-8 sm:text-sm  md:mb-10 md:text-base">
          <span className="rounded-full bg-sky-500 px-2 py-[3px]  sm:px-3 sm:py-1 ">New</span>
          Badge and tooltip category added
        </div> */}
        <h2 className="giveLineHeight max-w-[900px] space-y-1 text-2xl font-extrabold leading-[200px] text-[#FFFFFF] sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-sky-400">NavigateUI </span> Free Component Library for Developers
        </h2>
        <p className="mt-4 max-w-[500px] text-base font-medium  text-gray-400 md:text-lg">
          Navigate to a world of <span className="text-sky-400">free</span>, <span className="text-sky-400">reusable</span>, and highly <span className="text-sky-400">customizable</span> Tailwind
          components
        </p>
        <div className="mt-6 flex flex-row flex-wrap items-center gap-1 text-xs sm:gap-2 sm:text-sm md:gap-3 md:text-base">
          <Link href="/components/accordion" className="flex items-center gap-2 text-nowrap rounded-sm bg-sky-500 px-6 py-2 text-white duration-300 hover:bg-[#2c6e9c] md:w-auto">
            Get Start <FaRocket />
          </Link>
          <Link href="https://github.com/NavigateUI/NavigateUI" className="flex items-center gap-1 rounded-sm bg-gray-200 px-6 py-2 duration-300 hover:bg-gray-400">
            <FaGithub /> Github
          </Link>
        </div>
      </div>
    </>
  );
}
