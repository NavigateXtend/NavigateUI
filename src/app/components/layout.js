import Sidebar from '@/ui/Sidebar';
import Link from 'next/link';
import { FaBug } from 'react-icons/fa6';

export const metadata = {
  title: { default: 'Components', template: '%s - Navigate UI' },
  description: 'tailwindCSS and react Components'
};

export default function ComponentLayout({ children }) {
  return (
    <div className="flex min-w-72 max-w-[1500px] justify-between px-3 lg:pr-10 2xl:mx-auto">
      <Link href="https://github.com/NavigateUI/NavigateUI/issues/new" className="group fixed bottom-10 right-4 z-50 items-center sm:right-6 md:right-8 lg:right-10" target="_blank">
        <FaBug color="white" className="rounded-full bg-red-700 p-1 text-2xl" />
        <div className="invisible absolute right-full top-1 cursor-pointer whitespace-nowrap duration-200 group-hover:visible  group-hover:duration-300">
          <p className="rounded-md bg-red-700 px-1 py-px text-xs text-white">report a bug</p>{' '}
        </div>
      </Link>
      <div className="hidden max-w-[20%] justify-self-end lg:block">
        <Sidebar />
      </div>
      <div className="w-full pb-2 lg:w-[80%]">{children}</div>
    </div>
  );
}
