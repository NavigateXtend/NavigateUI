


import  Progress1  from '@/Components/Progress/Progress1/Progress1';
import  Progress2  from '@/Components/Progress/Progress2/Progress2';
import  Progress3  from '@/Components/Progress/Progress3/Progress3';

export const metadata = {
    title: 'Progress Components',
    description: 'Navbar tailwind components'
};

const Progress = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic dynamic progress</h1>
            <Progress1 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic dynamic animated progress</h1>
            <Progress2 />
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Dynamic progress bar with inside text</h1>
            <Progress3 />
        </div>
    );
};

export default Progress;
