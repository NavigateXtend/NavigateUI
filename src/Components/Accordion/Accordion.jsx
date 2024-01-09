import { Helmet } from 'react-helmet';
import Accordion1 from './Accordion1/Accordion1';
import Accordion2 from './Accordion2/Accordion2';

const Accordion = () => {
    return (
        <>
            <Helmet>
                <title>Accordion Component | Unify UI</title>
            </Helmet>
            <div>
                {/* accordion 1  */}

                <div>
                    <h1 className="mt-20 px-4 text-2xl font-bold text-slate-700"> # Accordion 1</h1>
                    <Accordion1></Accordion1>
                </div>
                <div>
                    <h1 className="mt-20 px-4 text-2xl font-bold text-slate-700"> # Accordion 2</h1>
                    <Accordion2></Accordion2>
                </div>
            </div>
        </>
    );
};

export default Accordion;
