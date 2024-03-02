import Sidebar from '@/Shared/Sidebar/Sidebar';
import Link from 'next/link';
export const metadata = {
  title: { default: 'Components', template: '%s - Navigate UI' },
  description: 'tailwindCSS and react Components'
};

export default function ComponentLayout({ children }) {
  return (
    <div className="flex min-w-72 max-w-[1400px] px-3 lg:pr-10 2xl:mx-auto">
      {/* <span className="absolute -left-48 -top-10 -z-10 h-80 w-80 rounded-full bg-gradient-to-b from-[#ff28df50] to-[#00bafd58] blur-xl">
      </span> */}
      <Link href="https://github.com/NavigateUI/NavigateUI/issues/new" className="group fixed bottom-10 right-4 z-50 items-center sm:right-6 md:right-8 lg:right-10" target="_blank">
        <svg className="w-7 rounded-full bg-red-700 p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0"></g>
          <g strokeLinecap="round" strokeLinejoin="round"></g>
          <g>
            <path
              d="M14 21.7101C13.3663 21.8987 12.695 22 12 22C8.13401 22 5 18.866 5 15V11.9375C5 9.76288 6.76288 8 8.9375 8H15.0625C17.2371 8 19 9.76288 19 11.9375V15C19 16.9073 18.2372 18.6364 17 19.899"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{' '}
            <path
              d="M8.25 7.5C8.25 7.08579 7.91421 6.75 7.5 6.75C7.08579 6.75 6.75 7.08579 6.75 7.5H8.25ZM7.63452 4.58281C7.40411 4.92702 7.49636 5.39285 7.84058 5.62326C8.18479 5.85367 8.65062 5.76141 8.88103 5.41719L7.63452 4.58281ZM17.25 8.5V7.5H15.75V8.5H17.25ZM6.75 7.5V8.5H8.25V7.5H6.75ZM17.25 7.5C17.25 4.60051 14.8995 2.25 12 2.25V3.75C14.0711 3.75 15.75 5.42893 15.75 7.5H17.25ZM12 2.25C10.179 2.25 8.57506 3.17771 7.63452 4.58281L8.88103 5.41719C9.55501 4.41032 10.7005 3.75 12 3.75V2.25Z"
              fill="#fff"
            ></path>{' '}
            <path d="M19 14H22" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M5 14H2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
            <path d="M14.5 3.5L17 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M9.5 3.5L7 2" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
            <path d="M20.5 20.0002L18.5 19.2002" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
            <path d="M20.5 7.9998L18.5 8.7998" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
            <path d="M3.5 20.0002L5.5 19.2002" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
            <path d="M3.5 7.9998L5.5 8.7998" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M12 21.5V15" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"></path>{' '}
          </g>
        </svg>
        <div className="invisible absolute right-full top-1 cursor-pointer whitespace-nowrap duration-200 group-hover:visible  group-hover:duration-300">
          <p className="rounded-md bg-red-700 px-1 py-px text-xs text-white">report a bug</p>{' '}
        </div>
      </Link>
      <div className="hidden w-[20%] justify-self-end lg:block">
        <Sidebar />
      </div>
      <div className="w-full pb-2 lg:w-[80%]">{children}</div>
    </div>
  );
}
