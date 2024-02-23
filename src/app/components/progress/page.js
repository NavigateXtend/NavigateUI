


import  Progress1  from '@/Components/Progress/Progress1/Progress1';

export const metadata = {
    title: 'Progress Components',
    description: 'Navbar tailwind components'
};

const Progress = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 px-4 text-2xl font-semibold text-gray-100"># Basic dynamic progress</h1>
            <Progress1 />

        </div>
    );
};

export default Progress;
