import { Carousel1 } from '@/Components/Carousel/Carousel1/Carousel1';
import { Carousel2 } from '@/Components/Carousel/Carousel2/Carousel2';
import { Carousel3 } from '@/Components/Carousel/Carousel3/Carousel3';
import { Carousel4 } from '@/Components/Carousel/Carousel4/Carousel4';
import { Carousel5 } from '@/Components/Carousel/Carousel5/Carousel5';
import { Carousel6 } from '@/Components/Carousel/Carousel6/Carousel6';
import { Carousel7 } from '@/Components/Carousel/Carousel7/Carousel7';
import { Carousel8 } from '@/Components/Carousel/Carousel8/Carousel8';
import { Carousel9 } from '@/Components/Carousel/Carousel9/Carousel9';

export const metadata = {
    title: 'Carousel Components',
    description: 'Carousel tailwind components'
};

const Slider = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <Carousel1></Carousel1>
            <Carousel2></Carousel2>
            <Carousel3></Carousel3>
            <Carousel4></Carousel4>
            <Carousel5></Carousel5>
            <Carousel6></Carousel6>
            <h1 className="text-red-500">Have some Issue.. (but code JSX will work perfectly in React project)</h1>
            <Carousel7></Carousel7>
            <Carousel8></Carousel8>
            <h1 className="text-red-500">Have some Issue.. (but code JSX will work perfectly in React project)</h1>
            <Carousel9></Carousel9>
        </div>
    );
};

export default Slider;
