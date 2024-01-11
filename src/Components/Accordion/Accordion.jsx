
import Accordion1 from './Accordion1/Accordion1';
import Accordion2 from './Accordion2/Accordion2';
import Accordion3 from './Accordion3/Accordion3';
import Accordion4 from './Accordion4/Accordion4';


const Accordion = () => {
    
    return (
        <div>
            {/* accordion 1  */}

            <div>
                <h1 className="text-2xl font-semibold px-4 mt-20 text-slate-700"> # Basic Accordion</h1>
                <Accordion1></Accordion1>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-20 text-slate-700"> # Dark theme Accordion</h1>
                <Accordion2></Accordion2>
            </div>

            <div>
                <h1 className="text-2xl font-semibold px-4 mt-20 text-slate-700"> # Accordion 3</h1>
                <Accordion3></Accordion3>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-4 mt-20 text-slate-700"> # Accordion 3</h1>
                <Accordion4></Accordion4>
            </div>
        </div>
    );
};

export default Accordion;