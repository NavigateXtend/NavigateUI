'use client';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
export function NavMenu() {
  const path = usePathname();
  return (
    <ul className="hidden flex-1 items-center justify-center gap-2 font-mono text-xs sm:gap-10 sm:text-base lg:flex">
      <li className={`${path.includes('components') ? 'font-semibold text-sky-600 underline underline-offset-8 dark:text-sky-400' : ''}`}>
        <Link href="/components/accordion">Components</Link>
      </li>
      <li className={`${path.includes('block') ? 'font-semibold text-sky-600 underline underline-offset-8 dark:text-sky-400' : ''}`}>
        <Link href="/blocks">Blocks</Link>
      </li>
    </ul>
  );
}

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === 'dark') {
    return <FiSun onClick={() => setTheme('light')} className="cursor-pointer select-none" />;
  }

  if (resolvedTheme === 'light') {
    return <FiMoon onClick={() => setTheme('dark')} className="cursor-pointer select-none" />;
  }
}
