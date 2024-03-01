import Sidebar from '@/Shared/Sidebar/Sidebar';

export const metadata = {
  title: { default: 'Components', template: '%s - Navigate UI' },
  description: 'tailwindCSS and react Components'
};

export default function ComponentLayout({ children }) {
  return (
    <div className="flex min-w-72  max-w-[1500px] px-3 lg:pr-10 2xl:mx-auto">
      <div className="hidden w-[30%] lg:block">
        <Sidebar />
      </div>
      <div className="w-full pb-2 lg:w-[70%]">{children}</div>
    </div>
  );
}
