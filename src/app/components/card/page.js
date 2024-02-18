import Card1 from '@/Components/Card/Card1/Card1';
import Card10 from '@/Components/Card/Card10/Card10';
import Card11 from '@/Components/Card/Card11/Card11';
import Card12 from '@/Components/Card/Card12/Card12';
import Card13 from '@/Components/Card/Card13/Card13';
import Card14 from '@/Components/Card/Card14/Card14';
import Card2 from '@/Components/Card/Card2/Card2';
import Card3 from '@/Components/Card/Card3/Card3';
import Card4 from '@/Components/Card/Card4/Card4';
import Card5 from '@/Components/Card/Card5/Card5';
import Card6 from '@/Components/Card/Card6/Card6';
import Card7 from '@/Components/Card/Card7/Card7';
import Card8 from '@/Components/Card/Card8/Card8';
import Card9 from '@/Components/Card/Card9/Card9';

export const metadata = {
    title: 'Card Components',
    description: 'Card tailwind components'
};

const Card = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="border-gray-700 pb-2 pt-10 text-center text-2xl font-semibold text-gray-100 text-white lg:text-3xl">Explore The Card Collections</h1>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
            <Card7 />
            <Card8 />
            <Card9 />
            <Card10 />
            <Card11 />
            <Card12 />
            <Card13 />
            <Card14 />
        </div>
    );
};

export default Card;
