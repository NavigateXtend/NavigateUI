import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaStar } from 'react-icons/fa6';
import { getStar } from './getData';

export default async function Navbar() {
  const data = await getStar();

  return (
    <nav className="sticky top-0 z-[99] w-full text-white backdrop-blur-lg">
      <div className="item-center mx-auto flex max-w-[1500px] justify-between py-4">
        <Link href="/" className="flex items-center rounded-lg px-1 py-[2px] font-bold text-white drop-shadow-md backdrop-blur-xl sm:text-2xl">
          <Image src="/Logo.svg" className="size-6 sm:size-8" width={33} height={33} alt="navigate ui logo" />
          Navigate<span className="text-sky-400">UI</span>
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link href="/components/accordion">Components</Link>
          </li>
          <li>
            <Link href="/block">Blocks</Link>
          </li>
        </ul>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <Link className="group relative flex items-center gap-2" href="https://github.com/NavigateUI/NavigateUI" target="_blank">
              <div className="flex items-center justify-center gap-1 rounded-md bg-white/90 p-1 text-[8px] font-black text-black sm:rounded-lg sm:text-xs">
                <FaStar />
                <span className="font-mono">{data?.stargazers_count}</span>
              </div>
              <FaGithub className="rounded-full p-0 text-xl text-white group-hover:bg-white group-hover:text-black sm:text-2xl" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://discord.com/invite/ezphnpnEXx" target="_blank">
              <FaDiscord className="text-xl text-white hover:text-[#5662f6] sm:text-2xl" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://www.facebook.com/groups/navigateui/" target="_blank">
              <FaFacebook className="text-xl text-white hover:text-[#0866ff] sm:text-2xl" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
