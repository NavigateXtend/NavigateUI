import Tooltip1 from '@/Components/Tooltip/Tooltip1/Tooltip1';
import Tooltip2 from '@/Components/Tooltip/Tooltip2/Tooltip2';
import Tooltip3 from '@/Components/Tooltip/Tooltip3/Tooltip3';

const Tooltip = () => {
    return (
        <div>
            <h2 className="mt-10 px-4 text-xl font-semibold text-slate-800 md:text-2xl"># Simple text tooltip</h2>
            <Tooltip1></Tooltip1>
            <h2 className="mt-20 px-4 text-xl font-semibold text-slate-800  md:text-2xl"># Simple right side text tooltip</h2>
            <Tooltip2></Tooltip2>
            <h2 className="mt-20 px-4 text-xl font-semibold text-slate-800  md:text-2xl"># Simple animation with text tooltip</h2>
            <Tooltip3></Tooltip3>
        </div>
    );
};

export default Tooltip;
