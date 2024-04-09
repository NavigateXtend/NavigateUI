import Progress1 from '@/components/Progress/Progress1';
import Progress2 from '@/components/Progress/Progress2';
import Progress3 from '@/components/Progress/Progress3';
import Progress4 from '@/components/Progress/Progress4';
import Progress5 from '@/components/Progress/Progress5';
import Heading from '@/ui/Heading';

export const metadata = {
  title: 'Progress Components',
  description: 'Navbar tailwind components'
};

const Progress = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Heading>Basic progress</Heading>
      <Progress5 />
      <Heading>Basic dynamic progress</Heading>
      <Progress1 />
      <Heading>Basic dynamic animated progress</Heading>
      <Progress2 />
      <Heading>Dynamic progress bar with inside text</Heading>
      <Progress3 />
      <Heading>Dynamic animated progress bar with outside text</Heading>
      <Progress4 />
    </div>
  );
};

export default Progress;
