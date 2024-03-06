import Tooltip1 from '@/components/Tooltip/Tooltip1';
import Tooltip2 from '@/components/Tooltip/Tooltip2';
import Tooltip3 from '@/components/Tooltip/Tooltip3';
import Tooltip4 from '@/components/Tooltip/Tooltip4';

export const metadata = {
  title: 'Tooltip Components',
  description: 'Tooltip tailwind components'
};

export default function TooltipPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="font-semiboldtext-black mt-10 px-4 text-xl md:text-2xl dark:text-white"># Tooltip from top</h2>
      <Tooltip1 />
      <h2 className="font-semiboldtext-black mt-20 px-4 text-xl md:text-2xl  dark:text-white"># Tooltip from right</h2>
      <Tooltip2 />
      <h2 className="font-semiboldtext-black mt-20 px-4 text-xl md:text-2xl  dark:text-white"># Tooltip from bottom</h2>
      <Tooltip3 />
      <h2 className="font-semiboldtext-black mt-20 px-4 text-xl md:text-2xl  dark:text-white"># Tooltip from left</h2>
      <Tooltip4 />
    </div>
  );
}
