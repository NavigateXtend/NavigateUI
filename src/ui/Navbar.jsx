import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaStar } from 'react-icons/fa6';
import ThemeSwitch, { NavMenu } from './Client';

export async function getRepoData() {
  const res = await fetch('https://api.github.com/repos/navigateui/navigateui', { next: { revalidate: 3600 } });
  return res.json();
}
export default async function Navbar() {
  const data = await getRepoData();

  return (
    <nav className="sticky top-0 z-[99] w-full backdrop-blur-2xl dark:text-white">
      <div className="item-center mx-auto flex max-w-[1400px] justify-between px-2 py-4 lg:px-10">
        <Link href="/" className="group flex flex-1 items-center gap-px rounded-lg text-xl font-semibold">
          <Image src="/Logo.svg" className="hidden size-8 lg:block" width={33} height={32} alt="navigate ui logo" />
          <span className="hidden text-sky-400 lg:block">NavigateUI</span>
        </Link>
        <NavMenu />
        <ul className="flex flex-1 items-center justify-end gap-3 text-2xl">
          <ThemeSwitch />
          <li>
            <Link className="group relative flex items-center gap-1" href="https://github.com/NavigateUI/NavigateUI" target="_blank">
              <div className="flex items-center justify-center gap-[2px] rounded-md bg-black/90 px-1 py-[2px] text-xs font-black text-white dark:bg-white/90 dark:text-black">
                <FaStar />
                <span className="font-mono">{data?.stargazers_count}</span>
              </div>
              <FaGithub className="rounded-full group-hover:bg-white group-hover:text-black" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://discord.com/invite/ezphnpnEXx" target="_blank">
              <FaDiscord className="hover:text-[#5662f6]" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://www.facebook.com/groups/navigateui/" target="_blank">
              <FaFacebook className="hover:text-[#0866ff]" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
