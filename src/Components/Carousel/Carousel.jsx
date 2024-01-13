import { Carousel1 } from './Carousel1/Carousel1';
import { Carousel2 } from './Carousel2/Carousel2';
import { Carousel3 } from './Carousel3/Carousel3';
import { Carousel4 } from './Carousel4/Carousel4';
import { Carousel5 } from './Carousel5/Carousel5';
import { Carousel6 } from './Carousel6/Carousel6';
import { Carousel7 } from './Carousel7/Carousel7';
import { Carousel8 } from './Carousel8/Carousel8';

const Slider = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <Carousel1></Carousel1>
            <Carousel2></Carousel2>
            <Carousel3></Carousel3>
            <Carousel4></Carousel4>
            <Carousel5></Carousel5>
            <Carousel6></Carousel6>
            <Carousel7></Carousel7>
            <Carousel8></Carousel8>
        </div>
    );
};

export default Slider;
