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
      <div className="flex justify-between py-6 sm:py-10 md:py-14 lg:py-16 xl:py-20">
        <div className="space-y-5 sm:space-y-7">
          <h2 className={`text-2xl font-extrabold sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl dark:text-white`}>
            <span className="text-sky-400">NavigateUI </span> Free <br /> <span className="inline-block md:py-2 lg:py-3">Component Library</span> <br /> for Developers
          </h2>
          <p className="max-w-md text-sm font-medium sm:text-base md:text-lg lg:text-xl xl:max-w-lg xl:text-2xl dark:text-white">
            Navigate to a world of <span className="text-sky-400">free</span>, <span className="text-sky-400">reusable</span>, and highly <span className="text-sky-400">customizable</span> Tailwind
            components
          </p>
          <div className="flex flex-row flex-wrap items-center gap-1 text-xs font-medium sm:gap-2 sm:text-sm md:gap-3 md:text-base lg:text-lg">
            <Link href="/components/accordion" className="flex items-center gap-2 text-nowrap rounded-sm bg-sky-500 px-6 py-2 text-white duration-300 hover:bg-sky-600 md:w-auto">
              Get Start <FaRocket />
            </Link>
            <Link href="https://github.com/NavigateUI/NavigateUI" className="flex items-center gap-2 rounded-sm border px-6 py-2 duration-300 hover:bg-black/10 dark:text-white dark:hover:bg-white/10">
              <FaGithub /> Github
            </Link>
          </div>
          <div className="mt-5 flex gap-3 text-4xl sm:text-5xl dark:text-white">
            <FaHtml5 className="rounded-lg border p-2 text-[#dd4b25] shadow-md hover:bg-black/10 dark:hover:bg-white/10" />
            <SiTailwindcss className="rounded-lg border p-2 text-[#38bdf8] shadow-md hover:bg-black/10 dark:hover:bg-white/10" />
            <FaReact className="animate-[spn_4s_linear_infinite] rounded-lg border p-2 text-sky-500 shadow-md hover:bg-black/10 dark:hover:bg-white/10" />
            <SiNextdotjs className="rounded-lg border p-2 shadow-md hover:bg-black/10 dark:hover:bg-white/10" />
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
