import Sidebar from '@/ui/Sidebar';

export default function blockLayout({ children }) {
  return (
    <div className="flex min-w-72 max-w-[1400px] justify-between px-3 lg:pr-10 2xl:mx-auto">
      <div className="max-w-[15%] justify-self-end">
        <Sidebar />
      </div>
      <div className="w-full pb-2 lg:w-[85%]">{children}</div>
    </div>
  );
}
