import Tooltip1 from "./Tooltip1/Tooltip1";
import Tooltip2 from "./Tooltip2/Tooltip2";

const Tooltip = () => {
    return (
        <div>
            <h2 className="md:text-2xl text-xl font-semibold px-4 mt-10 text-slate-800"># Simple text tooltip</h2>
            <Tooltip1></Tooltip1>
            <h2 className="md:text-2xl text-xl mt-20 font-semibold px-4  text-slate-800"># Simple right side text tooltip</h2>
            <Tooltip2></Tooltip2>
        </div>
    );
};

export default Tooltip;