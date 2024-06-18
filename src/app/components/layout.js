import Sidebar from '@/ui/Sidebar';

export const metadata = {
  title: { default: 'Components', template: '%s - Navigate UI' },
  description: 'tailwindCSS and react Components'
};

export default function ComponentLayout({ children }) {
  return (
    <div className="flex min-w-72 max-w-[1400px] justify-between px-3 lg:pr-10 2xl:mx-auto">
      <div className="max-w-[20%] justify-self-end">
        <Sidebar />
      </div>
      <div className="w-full pb-2 lg:w-[80%]">{children}</div>
    </div>
  );
}
