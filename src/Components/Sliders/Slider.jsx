import { Helmet } from 'react-helmet';
import { Slider1 } from './Slider1/Slider1';
import { Slider2 } from './Slider2/Slider2';
import { Slider3 } from './Slider3/Slider3';
import { Slider4 } from './Slider4/Slider4';
import { Slider5 } from './Slider5/Slider5';
import Slider6 from './Slider6/Slider6';
import { Slider7 } from './Slider7/Slider7';
import { Slider8 } from './Slider8/Slider8';

const Slider = () => {
    return (
        <>
            <Helmet>
                <title>Slider Component | Unify UI</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center">
                <Slider1></Slider1>
                <Slider2></Slider2>
                <Slider3></Slider3>
                <Slider4></Slider4>
                <Slider5></Slider5>
                <Slider6></Slider6>
                <Slider7></Slider7>
                <Slider8></Slider8>
            </div>
        </>
    );
};

export default Slider;
