import Progress1 from '@/Components/Progress/Progress1';
import Progress2 from '@/Components/Progress/Progress2';
import Progress3 from '@/Components/Progress/Progress3';
import Progress4 from '@/Components/Progress/Progress4';
import Progress5 from '@/Components/Progress/Progress5';

export const metadata = {
  title: 'Progress Components',
  description: 'Navbar tailwind components'
};

const Progress = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Basic progress</h1>
      <Progress5 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Basic dynamic progress</h1>
      <Progress1 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Basic dynamic animated progress</h1>
      <Progress2 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Dynamic progress bar with inside text</h1>
      <Progress3 />
      <h1 className="mt-10 px-4 text-lg  font-semibold text-white md:text-xl lg:text-2xl"># Dynamic animated progress bar with outside text</h1>
      <Progress4 />
    </div>
  );
};

export default Progress;

