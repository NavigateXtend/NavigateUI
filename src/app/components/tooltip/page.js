import Tooltip1 from '@/components/Tooltip/Tooltip1';
import Tooltip2 from '@/components/Tooltip/Tooltip2';
import Tooltip3 from '@/components/Tooltip/Tooltip3';
import Tooltip4 from '@/components/Tooltip/Tooltip4';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Tooltip Components',
  description: 'Tooltip tailwind components'
};

export default function TooltipPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Tooltip from top</Heading>
      <Tooltip1 />
      <Heading>Tooltip from right</Heading>
      <Tooltip2 />
      <Heading>Tooltip from bottom</Heading>
      <Tooltip3 />
      <Heading>Tooltip from left</Heading>
      <Tooltip4 />
    </div>
  );
}
