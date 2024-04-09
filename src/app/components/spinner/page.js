import Spinner1 from '@/components/Spinner/Spinner1';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Spinner ',
  description: 'Spinner tailwind components'
};

export default function SpinnerPage() {
  return (
    <div>
      <Heading>Explore The Spinner Collections</Heading>
      <Spinner1 />
    </div>
  );
}
