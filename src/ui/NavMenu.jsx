'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavMenu() {
  const path = usePathname();
  return (
    <ul className="hidden flex-1 items-center justify-center gap-2 text-xs sm:gap-10 sm:text-base lg:flex">
      <li className={`${path.includes('components') ? 'text-sky-400 underline underline-offset-8' : ''}`}>
        <Link href="/components/accordion">Components</Link>
      </li>
      <li className={`${path.includes('block') ? 'text-sky-400 underline underline-offset-8' : ''}`}>
        <Link href="/blocks">Blocks</Link>
      </li>
    </ul>
  );
}
