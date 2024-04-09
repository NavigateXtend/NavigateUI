import Button1 from '@/components/Button/Button1';
import Button2 from '@/components/Button/Button2';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Button Components',
  description: 'Button tailwind components'
};

export default function ButtonPage() {
  return (
    <div>
      <Heading>Explore The Button Collections</Heading>
      <Button1 />
      <Button2 />
    </div>
  );
}
