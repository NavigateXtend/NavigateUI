
import Accordion1 from './Accordion1/Accordion1';
import Accordion2 from './Accordion2/Accordion2';


const Accordion = () => {
    
    return (
      <div>
        {/* accordion 1  */}

        <div>
            <h1 className='text-2xl font-bold px-4 mt-20 text-slate-700'> # Accordion 1</h1>
          <Accordion1></Accordion1>
        </div>
        <div>
            <h1 className='text-2xl font-bold px-4 mt-20 text-slate-700'> # Accordion 2</h1>
          <Accordion2></Accordion2>
        </div>
  
        
      </div>
    );
};

export default Accordion;