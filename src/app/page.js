import Link from 'next/link';
import { FaGithub, FaHtml5, FaReact, FaRocket, FaSwatchbook } from 'react-icons/fa6';
import { FiMoon, FiPackage } from 'react-icons/fi';
import { RiDeviceLine } from 'react-icons/ri';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { lato } from './layout';

export const metadata = {
  metadataBase: new URL('https://navigateui.com'),
  openGraph: {
    images: '/opengraph-image.png'
  }
};

export default function Home() {
  return (
    <main className="mb-20">
      <div className="z-10 flex justify-center py-6 text-center sm:py-10 md:py-14 lg:py-16 xl:py-20">
        <div className="space-y-5 sm:space-y-7">
          <h2 className={`text-2xl font-extrabold dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${lato.className}`}>
            <span className="inline-block pb-2 text-3xl text-sky-400 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">NavigateUI </span> Free Component <br />
            Library for Developers
          </h2>
          <p className="mx-auto text-balance text-sm font-medium dark:text-white sm:text-base md:text-lg  lg:text-xl xl:text-2xl">
            Navigate to a world of <span className="text-sky-400">free</span>, <span className="text-sky-400">reusable</span>, and highly <span className="text-sky-400">customizable</span> Tailwind
            components
          </p>
          <div className="flex flex-row flex-wrap items-center justify-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm md:gap-3 md:text-base lg:text-lg">
            <Link href="/components/accordion" className="flex items-center gap-2 text-nowrap rounded-md bg-sky-500 px-6 py-2 text-white duration-300 hover:bg-sky-600 md:w-auto">
              Get Start <FaRocket />
            </Link>
            <Link
              href="https://github.com/NavigateUI/NavigateUI"
              className="flex items-center gap-2 rounded-md px-6 py-[7px] ring-1 ring-black backdrop-blur-sm duration-300 hover:bg-black/10 dark:text-white dark:ring-white dark:hover:bg-white/10"
            >
              <FaGithub /> Github
            </Link>
          </div>
          <div className="mt-5 flex justify-center gap-3 text-4xl dark:text-white sm:text-5xl">
            <FaHtml5 className="rounded-lg p-2 text-[#dd4b25] shadow-[0_0_2px] backdrop-blur-sm hover:bg-[#dd4b25]/10" />
            <SiTailwindcss className="rounded-lg p-2 text-[#38bdf8] shadow-[0_0_2px] backdrop-blur-sm hover:bg-[#38bdf8]/10" />
            <div className="rounded-lg text-sky-500 shadow-[0_0_2px] backdrop-blur-sm hover:bg-sky-500/10">
              <FaReact className="animate-[spin_4s_linear_infinite] p-2" />
            </div>
            <SiNextdotjs className="rounded-lg p-2 shadow-[0_0_2px] backdrop-blur-sm hover:bg-black/10 dark:hover:bg-white/10" />
          </div>
        </div>
      </div>

      <div className="z-10 flex flex-wrap justify-center gap-4">
        <div className="min-w-40 rounded-lg p-4 ring-1 ring-sky-400 backdrop-blur-sm">
          <FiPackage className="mx-auto text-4xl text-sky-400" />
          <h5 className="text-center">No dependencies</h5>
        </div>
        <div className="min-w-40 rounded-lg p-4 ring-1 ring-sky-400 backdrop-blur-sm">
          <RiDeviceLine className="mx-auto text-4xl text-sky-400" />
          <h5 className="text-center">Responsive Design</h5>
        </div>
        <div className="min-w-40 rounded-lg p-4 ring-1 ring-sky-400 backdrop-blur-sm">
          <FiMoon className="mx-auto text-4xl text-sky-400" />
          <h5 className="text-center">Dark mode</h5>
        </div>
        <div className="min-w-40 rounded-lg p-4 ring-1 ring-sky-400 backdrop-blur-sm">
          <FaSwatchbook className="mx-auto text-4xl text-sky-400" />
          <h5 className="text-center">Easy to Customize</h5>
        </div>
      </div>
    </main>
  );
}
