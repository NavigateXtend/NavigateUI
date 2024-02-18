import Tooltip1 from '@/Components/Tooltip/Tooltip1/Tooltip1';
import Tooltip2 from '@/Components/Tooltip/Tooltip2/Tooltip2';
import Tooltip3 from '@/Components/Tooltip/Tooltip3/Tooltip3';
import Tooltip4 from '@/Components/Tooltip/Tooltip4/Tooltip4';

export const metadata = {
    title: 'Tooltip Components',
    description: 'Tooltip tailwind components'
};

const Tooltip = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2 className="mt-10 px-4 text-xl font-semibold text-slate-800 md:text-2xl"># Tooltip from top</h2>
            <Tooltip1 />
            <h2 className="mt-20 px-4 text-xl font-semibold text-slate-800  md:text-2xl"># Tooltip from right</h2>
            <Tooltip2 />
            <h2 className="mt-20 px-4 text-xl font-semibold text-slate-800  md:text-2xl"># Tooltip from bottom</h2>
            <Tooltip3 />
            <h2 className="mt-20 px-4 text-xl font-semibold text-slate-800  md:text-2xl"># Tooltip from left</h2>
            <Tooltip4 />
        </div>
    );
};

export default Tooltip;
