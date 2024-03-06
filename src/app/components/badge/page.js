import Badge1 from '@/components/Badge/Badge1';
import Badge2 from '@/components/Badge/Badge2';
import Badge3 from '@/components/Badge/Badge3';
import Badge4 from '@/components/Badge/Badge4';

export const metadata = {
  title: 'Badge Components',
  description: 'Badge tailwind components'
};

export default function BadgePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Simple notification badge</h1>
      <Badge1 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Notification badge with numbers</h1>
      <Badge2 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Home badge with below numbers</h1>
      <Badge3 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Badge with text </h1>
      <Badge4 />
    </div>
  );
}
