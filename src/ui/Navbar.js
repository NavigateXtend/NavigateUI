import Image from 'next/image';
import Link from 'next/link';
import { FaDiscord, FaFacebook, FaGithub, FaStar } from 'react-icons/fa6';
import { getStar } from './getData';

export default async function Navbar() {
  const data = await getStar();

  return (
    <nav className="sticky top-0 z-[99] w-full text-white backdrop-blur-lg">
      <div className="item-center mx-auto flex max-w-[1500px] justify-between px-10 py-4">
        <Link href="/" className="flex items-center text-xl font-bold text-sky-400">
          <Image src="/Logo.svg" className="rounded-lg bg-slate-400/20 p-px drop-shadow-md backdrop-blur-xl" width={33} height={33} alt="navigate ui logo" />
          NavigateUI
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
              <div className="flex items-center justify-center gap-1 rounded-lg bg-white/90 p-1 text-xs font-black text-black">
                <FaStar />
                <span className="font-mono">{data?.stargazers_count}</span>
              </div>
              <FaGithub size={22} className="rounded-full p-0 text-white group-hover:bg-white group-hover:text-black" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://discord.com/invite/ezphnpnEXx" target="_blank">
              <FaDiscord size={22} className="text-white hover:text-[#5662f6]" />
            </Link>
          </li>
          <li>
            <Link className="group relative flex items-center justify-center" href="https://facebook.com/groups/navigateui" target="_blank">
              <FaFacebook size={22} className="text-white hover:text-blue-500" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
