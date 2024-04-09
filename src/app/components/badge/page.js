import Badge1 from '@/components/Badge/Badge1';
import Badge2 from '@/components/Badge/Badge2';
import Badge3 from '@/components/Badge/Badge3';
import Badge4 from '@/components/Badge/Badge4';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Badge Components',
  description: 'Badge tailwind components'
};

export default function BadgePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Simple notification badge</Heading>
      <Badge1 />
      <Heading>Notification badge with numbers</Heading>
      <Badge2 />
      <Heading>Home badge with below numbers</Heading>
      <Badge3 />
      <Heading>Badge with text </Heading>
      <Badge4 />
    </div>
  );
}
